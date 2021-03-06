const {slugify} = require('./src/util/utilityFunction');
const path = require('path')
const _ = require('lodash');

exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions;
    if (node.internal.type === "MarkdownRemark") {
      const slugFromTitle = slugify(node.frontmatter.title);
      createNodeField({
        node,
        name: "slug",
        value: slugFromTitle,
      });
    }
  };

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions;

    const templates = {
        singlePost: path.resolve('./src/templates/post-template.js'),
        tagsPage: path.resolve('./src/templates/tags-template.js'),
        tagPosts: path.resolve('./src/templates/tag-posts-template.js'),
        postList: path.resolve('./src/templates/post-list-template.js')
    }

    return graphql(`
        {
            allMarkdownRemark{
                edges{
                    node{
                        frontmatter{
                            author
                            tags
                        }
                        fields{
                            slug
                        }
                    }
                }
            }
        }
    `).then(res => {
        if(res.errors) return Promise.reject(res.errors)

        const posts = res.data.allMarkdownRemark.edges

        //Create single blog post pages
        posts.forEach(({node}) => {
            createPage({
                path: node.fields.slug,
                component: templates.singlePost,
                context: {
                    slug: node.fields.slug
                }
            })
        })

        //Get all tags
        let tags = []
        _.each(posts, edge => {
            if(_.get(edge, 'node.frontmatter.tags')){
            tags = tags.concat(edge.node.frontmatter.tags)
            }
        })
        let tagPostCounts = {}
        tags.forEach(tag => {
            tagPostCounts[tag] = (tagPostCounts[tag] || 0) + 1
        })
        tags = _.uniq(tags)

        createPage({
            path: `/tags`,
            component: templates.tagsPage,
            context: {
                tags,
                tagPostCounts,
            },
        })
        tags.forEach(tag => {
            createPage({
                path: `/tag/${slugify(tag)}`,
                component: templates.tagPosts,
                context: {
                    tag,
                },
            })
        })

        const postsPerPage = 6
        const numberOfPages = Math.ceil(posts.length / postsPerPage)

        Array.from({length: numberOfPages}).forEach((_, index) => {
            const isFirstPage = index === 0
            const currentPage = index + 1

            if(isFirstPage) return 

            createPage({
                path: `/page/${currentPage}`,
                component: templates.postList,
                context: {
                    limit: postsPerPage,
                    skip: index * postsPerPage,
                    numberOfPages: numberOfPages,
                    currentPage: currentPage,
                }
            })
        })
    })
}