import React from 'react'
import Heading from '../Heading'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptop } from '@fortawesome/free-solid-svg-icons'

const ShowcaseDescription = () => {
    const element = <FontAwesomeIcon icon={faLaptop} />
    return (
        <div className="my-10">
            <Heading icon={element} title="what we do"/>
            <div className="">
                <p className="lg:text-center text-left">WebFirst specializes in Web Development and Design, as well as search engine optimization and advertising by ranking your company on Google to generate more revenue. Our websites are built to the highest standards with the lowest pricing on the market. More money dosen't always mean more value...</p>
                <div className="lg:flex mt-12 justify-evenly text-center">
                    <div className="px-2">
                        <svg className="w-24 lg:mt-0 mt-6 h-24 m-auto" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
        viewBox="0 0 512 512" style={{enableBackground: "new 0 0 512 512"}}>
    <circle style={{fill:'#69CDFF'}} cx="267" cy="256" r="245"/>
    <rect x="185.72" y="358.53" style={{fill:'#445EA0'}} width="78.71" height="41.23"/>
    <rect x="185.72" y="358.53" style={{fill:'#2E4C89'}} width="19.842" height="41.23"/>
    <path style={{fill:'#293D7C'}} d="M316.856,398.763H127.56c-2.806,0-5.101,2.296-5.101,5.102v25.571c0,2.806,2.296,5.102,5.101,5.102
        h189.296L316.856,398.763L316.856,398.763z"/>
    <path style={{fill:'#1A2B63'}} d="M142.301,429.435v-25.571c0-2.806,2.296-5.102,5.102-5.102H127.56c-2.806,0-5.101,2.296-5.101,5.102
        v25.571c0,2.806,2.296,5.102,5.101,5.102h19.842C144.597,434.537,142.301,432.241,142.301,429.435z"/>
    <path style={{fill:'#293D7C'}} d="M445.054,58.964H5.102C2.296,58.964,0,61.26,0,64.066V354.43c0,2.807,2.296,5.102,5.102,5.102
        h311.754V206.768c0-3.859,3.14-7,7-7h126.3V64.066C450.156,61.26,447.86,58.964,445.054,58.964z"/>
    <path style={{fill:'#FFFFFF'}} d="M22.396,308.514c0,1.684,1.377,3.06,3.061,3.06h291.399V206.768c0-3.859,3.14-7,7-7H427.76v-90.77
        H22.396V308.514z"/>
    <path style={{fill:'#D9EAFC'}} d="M42.239,308.514V108.998H22.396v199.516c0,1.684,1.377,3.06,3.061,3.06H45.3
        C43.616,311.574,42.239,310.197,42.239,308.514z"/>
    <circle style={{fill:'#445EA0'}} cx="225.08" cy="335.46" r="13.774"/>
    <path style={{fill:'#C3DDF4'}} d="M316.856,223.146h-53.424c-1.65,0-3,1.35-3,3v59.639c0,1.65,1.35,3,3,3h53.424V223.146z"/>
    <path style={{fill:'#AEC1ED'}} d="M280.274,285.785v-59.639c0-1.65,1.35-3,3-3h-19.842c-1.65,0-3,1.35-3,3v59.639c0,1.65,1.35,3,3,3
        h19.842C281.624,288.785,280.274,287.435,280.274,285.785z"/>
    <path style={{fill:'#C3DDF4'}} d="M323.856,199.768h46.618v-65.382c0-2.75-2.25-5-5-5H84.682c-2.75,0-5,2.25-5,5v66.525
        c0,2.75,2.25,5,5,5h232.233C317.339,202.455,320.288,199.768,323.856,199.768z"/>
    <path style={{fill:'#AEC1ED'}} d="M99.524,200.91v-66.525c0-2.75,2.25-5,5-5H84.682c-2.75,0-5,2.25-5,5v66.525c0,2.75,2.25,5,5,5
        h19.842C101.774,205.91,99.524,203.66,99.524,200.91z"/>
    <path style={{fill:'#FFAF10'}} d="M424.699,84.983H25.457c-1.684,0-3.061,1.377-3.061,3.062v21.953H427.76V88.045
        C427.76,86.36,426.382,84.983,424.699,84.983z"/>
    <path style={{fill:'#FF9518'}} d="M45.3,84.983H25.457c-1.684,0-3.061,1.377-3.061,3.062v21.953h19.842V88.045
        C42.239,86.36,43.616,84.983,45.3,84.983z"/>
    <g>
        <path style={{fill:'#5DC1D8'}} d="M171.504,238.979h-84.17c-4.142,0-7.5-3.357-7.5-7.5s3.358-7.5,7.5-7.5h84.17
            c4.142,0,7.5,3.357,7.5,7.5S175.646,238.979,171.504,238.979z"/>
        <path style={{fill:'#5DC1D8'}} d="M171.504,263.466h-84.17c-4.142,0-7.5-3.357-7.5-7.5s3.358-7.5,7.5-7.5h84.17
            c4.142,0,7.5,3.357,7.5,7.5C179.004,260.108,175.646,263.466,171.504,263.466z"/>
        <path style={{fill:'#5DC1D8'}} d="M171.504,287.953h-84.17c-4.142,0-7.5-3.357-7.5-7.5s3.358-7.5,7.5-7.5h84.17
            c4.142,0,7.5,3.357,7.5,7.5S175.646,287.953,171.504,287.953z"/>
        <path style={{fill:'#5DC1D8'}} d="M237.56,238.979h-43.326c-4.142,0-7.5-3.357-7.5-7.5s3.358-7.5,7.5-7.5h43.326
            c4.142,0,7.5,3.357,7.5,7.5S241.702,238.979,237.56,238.979z"/>
        <path style={{fill:'#5DC1D8'}} d="M237.56,263.466h-43.326c-4.142,0-7.5-3.357-7.5-7.5s3.358-7.5,7.5-7.5h43.326
            c4.142,0,7.5,3.357,7.5,7.5C245.06,260.108,241.702,263.466,237.56,263.466z"/>
        <path style={{fill:'#5DC1D8'}} d="M237.56,287.953h-43.326c-4.142,0-7.5-3.357-7.5-7.5s3.358-7.5,7.5-7.5h43.326
            c4.142,0,7.5,3.357,7.5,7.5S241.702,287.953,237.56,287.953z"/>
    </g>
    <path style={{fill:'#445EA0'}} d="M504,198.768c4.4,0,8,3.6,8,8v241.77c0,4.4-3.6,8-8,8H323.856c-4.4,0-8-3.6-8-8v-241.77
        c0-4.4,3.6-8,8-8L504,198.768L504,198.768z"/>
    <path style={{fill:'#FFFFFF'}} d="M337.567,425.125c-2.75,0-5-2.25-5-5V219.18c0-2.75,2.25-5,5-5H490.29c2.75,0,5,2.25,5,5v200.945
        c0,2.75-2.25,5-5,5H337.567z"/>
    <path style={{fill:'#D9EAFC'}} d="M352.409,420.125V219.18c0-2.75,2.25-5,5-5h-19.842c-2.75,0-5,2.25-5,5v200.945c0,2.75,2.25,5,5,5
        h19.842C354.659,425.125,352.409,422.875,352.409,420.125z"/>
    <path style={{fill:'#445EA0'}} d="M404.567,445.125c-2.75,0-5-2.25-5-5v-1.945c0-2.75,2.25-5,5-5h18.723c2.75,0,5,2.25,5,5v1.945
        c0,2.75-2.25,5-5,5H404.567z"/>
    <path style={{fill:'#FFAF10'}} d="M495.29,233.473V219.18c0-2.75-2.25-5-5-5H337.567c-2.75,0-5,2.25-5,5v14.293L495.29,233.473
        L495.29,233.473z"/>
    <path style={{fill:'#FF9518'}} d="M357.409,214.18h-19.842c-2.75,0-5,2.25-5,5v14.293h19.842V219.18
        C352.409,216.43,354.659,214.18,357.409,214.18z"/>
    <g>
        <path style={{fill:'#5DC1D8'}} d="M448.013,324.933h-68.169c-4.142,0-7.5-3.357-7.5-7.5s3.358-7.5,7.5-7.5h68.169
            c4.142,0,7.5,3.357,7.5,7.5C455.513,321.575,452.155,324.933,448.013,324.933z"/>
        <path style={{fill:'#5DC1D8'}} d="M448.013,348.06h-68.169c-4.142,0-7.5-3.357-7.5-7.5c0-4.142,3.358-7.5,7.5-7.5h68.169
            c4.142,0,7.5,3.358,7.5,7.5C455.513,344.703,452.155,348.06,448.013,348.06z"/>
        <path style={{fill:'#5DC1D8'}} d="M448.013,371.185h-68.169c-4.142,0-7.5-3.357-7.5-7.5c0-4.142,3.358-7.5,7.5-7.5h68.169
            c4.142,0,7.5,3.358,7.5,7.5C455.513,367.828,452.155,371.185,448.013,371.185z"/>
    </g>
    <path style={{fill:'#C3DDF4'}} d="M479.756,292.257c0,2.75-2.25,5-5,5H353.101c-2.75,0-5-2.25-5-5v-41.244c0-2.75,2.25-5,5-5h121.655
        c2.75,0,5,2.25,5,5V292.257z"/>
    <path style={{fill:'#AEC1ED'}} d="M367.943,292.257v-41.244c0-2.75,2.25-5,5-5h-19.842c-2.75,0-5,2.25-5,5v41.244c0,2.75,2.25,5,5,5
        h19.842C370.193,297.257,367.943,295.007,367.943,292.257z"/>
    <path style={{fill:'#C3DDF4'}} d="M461.757,409.416c0,2.75-2.25,5-5,5H371.1c-2.75,0-5-2.25-5-5v-16.91c0-2.75,2.25-5,5-5h85.657
        c2.75,0,5,2.25,5,5L461.757,409.416L461.757,409.416z"/>
    <path style={{fill:'#AEC1ED'}} d="M385.942,409.416v-16.91c0-2.75,2.25-5,5-5H371.1c-2.75,0-5,2.25-5,5v16.91c0,2.75,2.25,5,5,5h19.842
        C388.192,414.416,385.942,412.166,385.942,409.416z"/>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    </svg>
                        <h2 className="text-xl my-2 font-bold">Fully Responsive</h2>
                        <p className="text-sm">We start building your site for mobile devices first, this is to be sure that your website is 100% responsive for every internet user.</p>
                    </div>
                    <div className="px-2">
                        <svg className="w-24 lg:mt-0 mt-6 h-24 m-auto" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 512 512" viewBox="0 0 512 512"><g><path d="m256 21.995c-135.311 0-245.002 109.691-245.002 245.002 0 52.367 16.439 100.889 44.425 140.708l286.822 88.666c92.755-34.893 158.757-124.419 158.757-229.373 0-135.311-109.691-245.003-245.002-245.003z" fill="#ffdd40"></path><path d="m231.432 113.764c0-9.306 1.146-18.348 3.29-27.001h-136.783c-3.034 0-5.995.316-8.855.911-12.847 11.963-24.404 25.288-34.446 39.748-.057.906-.096 1.818-.096 2.738v276.275c10.451 15.071 22.551 28.912 36.035 41.265l216.579 58.936c12.562-2.672 24.769-6.302 36.54-10.816v-269.794c-61.903 0-112.264-50.36-112.264-112.262z" fill="#167cc1"></path><path d="m162.165 480.399-2.113-336.11c-.003-.492-.185-.964-.49-1.35-5.347-6.752-2.011-11.404.082-13.366.685-.642.846-1.673.417-2.508-2.463-4.796.815-7.829 2.195-8.834.379-.276.648-.676.779-1.126l3.773-13.061c.203-.703.041-1.471-.449-2.014-6.459-7.16-1.993-12.277.494-14.304.318-.259.539-.596.664-.963h-69.578c-23.929 0-43.397 19.468-43.397 43.397v276.273c10.054 14.499 21.633 27.858 34.503 39.85z" fill="#024788"></path><path d="m81.542 195.887v243.108c44.43 45.062 106.177 73.005 174.458 73.005 20.951 0 41.285-2.636 60.695-7.583v-281.681c-18.787-4.656-35.72-14.055-49.454-26.849z" fill="#e9efff"></path><path d="m81.542 438.996c22.271 22.587 48.888 40.875 78.506 53.494v-296.603h-78.506z" fill="#d3dcfb"></path><g><path d="m167.149 117.862h-4.333c-4.142 0-7.5-3.357-7.5-7.5s3.358-7.5 7.5-7.5h4.333c4.142 0 7.5 3.357 7.5 7.5s-3.358 7.5-7.5 7.5z" fill="#1e92d3"></path></g><g><path d="m234.384 117.862h-41.638c-4.142 0-7.5-3.357-7.5-7.5s3.358-7.5 7.5-7.5h41.638c4.142 0 7.5 3.357 7.5 7.5s-3.358 7.5-7.5 7.5z" fill="#1e92d3"></path></g><path d="m233.653 136.029h-83.035c-6.6 0-12-5.4-12-12 0-5.67-4.596-10.266-10.266-10.266h-30.413c-9.056 0-16.397 7.341-16.397 16.397v68.385h188.644c-18.379-15.956-31.535-37.775-36.533-62.516z" fill="#9bd8f9"></path><path d="m150.618 136.029c-6.6 0-12-5.4-12-12 0-5.67-4.596-10.266-10.265-10.266h-30.414c-9.056 0-16.397 7.341-16.397 16.397v68.385h78.505v-62.517h-9.429z" fill="#73c3f9"></path><g fill="#1e92d3"><path d="m316.695 210.236c-4.142 0-7.5 3.357-7.5 7.5v288.455c5.06-1.12 10.063-2.392 15-3.819v-284.636c0-4.142-3.358-7.5-7.5-7.5z"></path><path d="m89.042 446.282v-316.122c0-4.906 3.991-8.897 8.897-8.897h30.414c1.525 0 2.766 1.24 2.766 2.765 0 10.752 8.748 19.5 19.5 19.5h88.035c4.142 0 7.5-3.357 7.5-7.5 0-4.142-3.358-7.5-7.5-7.5h-88.035c-2.439 0-4.5-2.06-4.5-4.5 0-9.796-7.97-17.765-17.766-17.765h-30.414c-13.177 0-23.897 10.721-23.897 23.897v300.892c4.776 5.293 9.784 10.371 15 15.23z"></path></g><path d="m159.644 129.573c.306-.286.489-.655.58-1.044h-9.606c-2.439 0-4.5-2.06-4.5-4.5 0-9.796-7.97-17.765-17.766-17.765h-30.413c-13.177 0-23.897 10.721-23.897 23.897v300.892c4.776 5.293 9.784 10.371 15 15.23v-316.123c0-4.906 3.991-8.897 8.897-8.897h30.414c1.525 0 2.766 1.24 2.766 2.765 0 10.752 8.748 19.5 19.5 19.5h9.281c-.083-.21-.195-.41-.337-.59-5.347-6.751-2.011-11.404.081-13.365z" fill="#167cc1"></path><path d="m241.934 157.106h-81.585v26.286h94.292c.568 0 1.124-.048 1.674-.118-5.892-7.984-10.75-16.772-14.381-26.168z" fill="#e9efff"></path><path d="m161.349 157.106h-14.752c-7.259 0-13.143 5.884-13.143 13.143s5.884 13.143 13.143 13.143h14.752z" fill="#3c58a0"></path><g><path d="m116.535 141.832h-10.334c-4.142 0-7.5-3.357-7.5-7.5s3.358-7.5 7.5-7.5h10.334c4.142 0 7.5 3.357 7.5 7.5s-3.358 7.5-7.5 7.5z" fill="#e9efff"></path></g><path d="m279.821 344.5h-161.405c-5.445 0-9.899-4.455-9.899-9.899v-87.32c0-5.445 4.455-9.899 9.899-9.899h161.405c5.445 0 9.899 4.455 9.899 9.899v87.32c0 5.445-4.454 9.899-9.899 9.899z" fill="#ff4155"></path><path d="m108.517 247.281v87.32c0 5.445 4.455 9.899 9.899 9.899h103.706c-.316-.525-.778-.97-1.374-1.255-8.068-3.848-7.854-10.046-6.848-13.692.443-1.607-.374-3.315-1.94-3.886-14.32-5.216-11.761-18.034-10.633-21.86.218-.739.172-1.527-.14-2.232l-10.99-24.823c-.479-1.081-1.51-1.839-2.69-1.908-9.687-.567-11.434-8.464-11.672-12.684-.084-1.484-1.191-2.714-2.656-2.964-16.049-2.743-14.719-15.34-13.63-20.039.139-.601.094-1.214-.103-1.775h-41.029c-5.446 0-9.9 4.454-9.9 9.899z" fill="#e80054"></path><g><path d="m138.23 382.003h-5c-4.142 0-7.5-3.357-7.5-7.5 0-4.142 3.358-7.5 7.5-7.5h5c4.142 0 7.5 3.358 7.5 7.5 0 4.143-3.357 7.5-7.5 7.5z" fill="#ff4155"></path></g><g><path d="m113.517 382.003h-5c-4.142 0-7.5-3.357-7.5-7.5 0-4.142 3.358-7.5 7.5-7.5h5c4.142 0 7.5 3.358 7.5 7.5 0 4.143-3.358 7.5-7.5 7.5z" fill="#ff4155"></path></g><g><path d="m289.721 382.003h-94.074c-4.142 0-7.5-3.357-7.5-7.5 0-4.142 3.358-7.5 7.5-7.5h94.074c4.142 0 7.5 3.358 7.5 7.5 0 4.143-3.358 7.5-7.5 7.5z" fill="#bec8f7"></path></g><g><path d="m195.647 382.003h-37.083c-4.142 0-7.5-3.357-7.5-7.5 0-4.142 3.358-7.5 7.5-7.5h37.083c4.142 0 7.5 3.358 7.5 7.5 0 4.143-3.358 7.5-7.5 7.5z" fill="#ff4155"></path></g><g><path d="m195.648 389.882c-4.142 0-7.5-3.357-7.5-7.5v-15.5c0-4.143 3.358-7.5 7.5-7.5s7.5 3.357 7.5 7.5v15.5c0 4.143-3.358 7.5-7.5 7.5z" fill="#e80054"></path></g><ellipse cx="199.118" cy="290.941" fill="#e9efff" rx="39.071" ry="39.071" transform="matrix(.16 -.987 .987 .16 -119.961 440.885)"></ellipse><path d="m211.959 325.668c-14.32-5.216-11.761-18.034-10.633-21.86.218-.739.172-1.527-.14-2.232l-10.99-24.823c-.479-1.081-1.51-1.839-2.69-1.908-9.687-.567-11.434-8.464-11.672-12.684-.042-.747-.345-1.43-.821-1.955-9.108 7.153-14.965 18.257-14.965 30.736 0 21.578 17.493 39.071 39.071 39.071 5.145 0 10.053-1.004 14.551-2.811-.347-.69-.936-1.252-1.711-1.534z" fill="#bec8f7"></path><path d="m213.804 286.915-19.081-12.199c-3.18-2.033-7.352.251-7.352 4.026v24.398c0 3.775 4.172 6.059 7.352 4.026l19.081-12.199c2.939-1.879 2.939-6.173 0-8.052z" fill="#ff4155"></path><g><path d="m180.747 414.763h-72.23c-4.142 0-7.5-3.357-7.5-7.5s3.358-7.5 7.5-7.5h72.23c4.142 0 7.5 3.357 7.5 7.5 0 4.142-3.358 7.5-7.5 7.5z" fill="#bec8f7"></path></g><g><path d="m289.721 444.145h-181.204c-4.142 0-7.5-3.358-7.5-7.5 0-4.143 3.358-7.5 7.5-7.5h181.204c4.142 0 7.5 3.357 7.5 7.5 0 4.142-3.358 7.5-7.5 7.5z" fill="#bec8f7"></path></g><path d="m289.721 456.922h-181.204c-1.9 0-3.63.712-4.952 1.877 5.833 4.642 11.884 9.02 18.133 13.123h168.023c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5z" fill="#bec8f7"></path><path d="m289.721 484.7h-146.2c11.395 5.899 23.313 10.925 35.665 15h110.534c4.142 0 7.5-3.357 7.5-7.5.001-4.142-3.357-7.5-7.499-7.5z" fill="#bec8f7"></path><circle cx="343.695" cy="113.763" fill="#2a428c" r="113.763"></circle><path d="m387.182 155.35c.097-1.953-.613-3.856-1.996-5.239l-6.662-6.662c-1.2-1.2-2.808-1.891-4.502-1.997-21.61-1.357-22.772-19.765-22.708-24.531.011-.815-.137-1.622-.417-2.387l-5.878-16.076c-.837-2.287-2.829-3.926-5.219-4.394-51.017-9.995-39.706-68.875-35.972-83.791.258-1.031.257-2.089.037-3.098-43.184 16.144-73.934 57.773-73.934 106.589 0 62.83 50.933 113.763 113.763 113.763 7.325 0 14.484-.701 21.424-2.023l30.396-60.95c-7.418-1.528-8.482-6.176-8.332-9.204z" fill="#1c2e7a"></path><g><path d="m299.712 152.603-33.304-33.304c-3.057-3.057-3.057-8.015 0-11.072l33.304-33.304c3.057-3.057 8.014-3.058 11.072 0 3.057 3.057 3.058 8.015 0 11.072l-27.768 27.769 27.768 27.768c3.057 3.057 3.057 8.015 0 11.072-3.058 3.057-8.014 3.056-11.072-.001z" fill="#4b6bb2"></path></g><g><path d="m376.607 152.603c-3.057-3.057-3.057-8.014 0-11.072l27.768-27.768-27.769-27.768c-3.057-3.057-3.057-8.015 0-11.072 3.058-3.058 8.015-3.058 11.072 0l33.305 33.304c3.055 3.056 3.057 8.015 0 11.072l-33.304 33.304c-3.057 3.057-8.014 3.058-11.072 0z" fill="#4b6bb2"></path></g><g><path d="m325.589 154.213c-3.947-1.766-5.714-6.398-3.948-10.344l29.816-66.608c1.767-3.946 6.399-5.713 10.344-3.947 3.947 1.767 5.714 6.398 3.947 10.344l-29.816 66.608c-1.76 3.934-6.385 5.718-10.343 3.947z" fill="#4b6bb2"></path></g><path d="m441.789 192.471h-9.091c-2.402 0-4.356-1.954-4.356-4.356v-9.091c0-10.81-7.631-14.419-12.5-15.622h-67.236c-2.738 0-4.958 2.22-4.958 4.958v152.775c0 2.738 2.22 4.958 4.958 4.958h103.848c2.738 0 4.958-2.22 4.958-4.958v-117.961c-2.916-10.459-15.475-10.701-15.623-10.703z" fill="#e9efff"></path><path d="m383.069 301.465v-113.435c0-13.601 11.026-24.628 24.627-24.628h-59.09c-2.738 0-4.958 2.22-4.958 4.958v152.775c0 2.738 2.22 4.958 4.958 4.958h59.09c-13.601 0-24.627-11.026-24.627-24.628z" fill="#d3dcfb"></path><path d="m452.296 187.958-19.44-19.44c-3.275-3.275-7.718-5.115-12.35-5.115h-8.628s15.862.242 15.862 15.622v9.091c0 2.738 2.22 4.958 4.958 4.958h9.091s15.622.128 15.622 14.771v-7.537c0-4.632-1.84-9.075-5.115-12.35z" fill="#bec8f7"></path><g fill="#73c3f9"><path d="m414.045 238.911h-31.483c-2.841 0-5.145-2.303-5.145-5.145s2.304-5.145 5.145-5.145h31.483c2.841 0 5.145 2.303 5.145 5.145s-2.303 5.145-5.145 5.145z"></path><path d="m439.22 218.407h-26.082c-2.841 0-5.145-2.303-5.145-5.145s2.303-5.145 5.145-5.145h26.082c2.841 0 5.145 2.303 5.145 5.145s-2.304 5.145-5.145 5.145z"></path><path d="m395.563 218.407h-13.001c-2.841 0-5.145-2.303-5.145-5.145s2.304-5.145 5.145-5.145h13.001c2.841 0 5.145 2.303 5.145 5.145s-2.303 5.145-5.145 5.145z"></path><path d="m439.22 258.586h-26.082c-2.841 0-5.145-2.303-5.145-5.145s2.303-5.145 5.145-5.145h26.082c2.841 0 5.145 2.303 5.145 5.145s-2.304 5.145-5.145 5.145z"></path><path d="m395.563 258.586h-13.001c-2.841 0-5.145-2.303-5.145-5.145s2.304-5.145 5.145-5.145h13.001c2.841 0 5.145 2.303 5.145 5.145s-2.303 5.145-5.145 5.145z"></path><path d="m386.377 279.088h-3.814c-2.841 0-5.145-2.303-5.145-5.145s2.304-5.145 5.145-5.145h3.814c2.841 0 5.145 2.303 5.145 5.145s-2.304 5.145-5.145 5.145z"></path><path d="m439.22 279.088h-35.644c-2.841 0-5.145-2.303-5.145-5.145s2.303-5.145 5.145-5.145h35.644c2.841 0 5.145 2.303 5.145 5.145s-2.304 5.145-5.145 5.145z"></path></g><path d="m366.783 238.911h-4.943c-2.841 0-5.145-2.303-5.145-5.145s2.304-5.145 5.145-5.145h4.943c2.841 0 5.145 2.303 5.145 5.145s-2.304 5.145-5.145 5.145z" fill="#4b6bb2"></path><path d="m366.783 218.407h-4.943c-2.841 0-5.145-2.303-5.145-5.145s2.304-5.145 5.145-5.145h4.943c2.841 0 5.145 2.303 5.145 5.145s-2.304 5.145-5.145 5.145z" fill="#4b6bb2"></path><path d="m366.783 258.586h-4.943c-2.841 0-5.145-2.303-5.145-5.145s2.304-5.145 5.145-5.145h4.943c2.841 0 5.145 2.303 5.145 5.145s-2.304 5.145-5.145 5.145z" fill="#4b6bb2"></path><path d="m366.783 279.088h-4.943c-2.841 0-5.145-2.303-5.145-5.145s2.304-5.145 5.145-5.145h4.943c2.841 0 5.145 2.303 5.145 5.145s-2.304 5.145-5.145 5.145z" fill="#4b6bb2"></path><path d="m436.647 238.911h-5.395c-2.841 0-5.145-2.303-5.145-5.145s2.303-5.145 5.145-5.145h5.395c2.841 0 5.145 2.303 5.145 5.145s-2.303 5.145-5.145 5.145z" fill="#73c3f9"></path><path d="m414.045 299.591h-31.483c-2.841 0-5.145-2.303-5.145-5.145s2.304-5.145 5.145-5.145h31.483c2.841 0 5.145 2.303 5.145 5.145s-2.303 5.145-5.145 5.145z" fill="#73c3f9"></path><path d="m366.783 299.591h-4.943c-2.841 0-5.145-2.303-5.145-5.145s2.304-5.145 5.145-5.145h4.943c2.841 0 5.145 2.303 5.145 5.145s-2.304 5.145-5.145 5.145z" fill="#4b6bb2"></path><path d="m436.647 299.591h-5.395c-2.841 0-5.145-2.303-5.145-5.145s2.303-5.145 5.145-5.145h5.395c2.841 0 5.145 2.303 5.145 5.145s-2.303 5.145-5.145 5.145z" fill="#73c3f9"></path></g></svg>
                        <h2 className="text-xl my-2 font-bold">SEO Optimization</h2>
                        <p className="text-sm">We proivde white hat SEO so your website can rank higher in Google when people search for your company.</p>
                    </div>
                    <div className="px-2">
                        <svg className="w-24 lg:mt-0 mt-6 h-24 m-auto" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="-11 0 512 512.001"><path d="m261.4375 511.441406 138.851562-54.941406c54.765626-44.929688 89.710938-113.132812 89.710938-189.5 0-135.308594-109.691406-245-245-245s-245 109.691406-245 245c0 135.3125 109.691406 245 245 245 5.527344 0 11.003906-.199219 16.4375-.558594zm0 0" fill="#27a3ff"></path><path d="m388.742188 318.949219c1.953124-23.644531-1.648438-47.335938-12.117188-68.628907-27.042969-55.011718-20.839844-59.003906-21.679688-113.601562 0-11.15625-9.042968-20.195312-20.195312-20.195312-11.15625 0-20.195312 9.039062-20.195312 20.195312 0 7.203125 0 203.832031 0 203.0625 0 3.148438-.335938 6.222656-.957032 9.1875v29.070312c0 24.496094-19.929687 44.429688-44.425781 44.429688-16.269531 0-72.375 0-110.550781 0 16.980468 23.617188 40.214844 42.113281 67.179687 53.3125.167969.066406.335938.136719.503907.207031 16.222656 6.855469 28.609374 19.78125 35.132812 35.453125 52.535156-3.480468 100.546875-23.507812 138.851562-54.9375l-15.050781-55.292968c-2.148437-7.902344-2.90625-16.117188-2.238281-24.277344zm0 0" fill="#f9cfa9"></path><path d="m83.609375 117.230469-6.152344-5.699219c-9.480469-8.789062-24.429687-8.21875-33.214843 1.265625-8.785157 9.480469-8.214844 24.429687 1.265624 33.214844l38.101563 35.304687zm0 0" fill="#f9cfa9"></path><path d="m285.621094 0h-172.714844c-16.757812 0-30.390625 13.636719-30.390625 30.394531v363.980469c0 16.757812 13.632813 30.394531 30.390625 30.394531h172.714844c16.757812 0 30.394531-13.636719 30.394531-30.394531v-363.980469c0-16.757812-13.636719-30.394531-30.394531-30.394531zm0 0" fill="#3d4ec6"></path><path d="m141.035156 22.539062c-1.644531-2.445312-2.605468-5.386718-2.605468-8.554687 0-6.21875 3.703124-11.5625 9.015624-13.984375h-34.539062c-16.785156 0-30.394531 13.609375-30.394531 30.394531v363.980469c0 16.785156 13.609375 30.390625 30.394531 30.390625h36.71875v-375.589844c0-9.558593-3.253906-18.703125-8.589844-26.636719zm0 0" fill="#2b3894"></path><path d="m100.109375 191.976562v202.398438c0 7.070312 5.730469 12.800781 12.796875 12.800781h172.714844c7.066406 0 12.796875-5.730469 12.796875-12.800781 0-6.945312 0-108.335938 0-202.398438zm0 0" fill="#e6f7fe"></path><path d="m100.109375 191.976562v202.398438c0 7.070312 5.730469 12.800781 12.796875 12.800781h30.273438v-215.199219zm0 0" fill="#d5f1fe"></path><path d="m169.675781 253.03125c0 11.074219-8.976562 20.050781-20.050781 20.050781s-20.050781-8.976562-20.050781-20.050781 8.976562-20.054688 20.050781-20.054688 20.050781 8.980469 20.050781 20.054688zm0 0" fill="#3d4ec6"></path><path d="m169.675781 327.382812c0 11.074219-8.976562 20.054688-20.050781 20.054688s-20.050781-8.980469-20.050781-20.054688c0-11.074218 8.976562-20.050781 20.050781-20.050781s20.050781 8.976563 20.050781 20.050781zm0 0" fill="#3d4ec6"></path><path d="m147.359375 233.113281c-10.007813 1.128907-17.785156 9.609375-17.785156 19.917969 0 11.074219 8.976562 20.050781 20.050781 20.050781 6.90625 0 12.992188-3.492187 16.597656-8.804687-17.289062 1.949218-28.296875-17.269532-18.863281-31.164063zm0 0" fill="#2b3894"></path><path d="m147.359375 307.46875c-10.007813 1.125-17.785156 9.609375-17.785156 19.914062 0 11.078126 8.976562 20.054688 20.050781 20.054688 6.90625 0 12.992188-3.492188 16.597656-8.804688-17.183594 1.933594-28.359375-17.179687-18.863281-31.164062zm0 0" fill="#2b3894"></path><g fill="#11dfef"><path d="m231.566406 244.695312h-28.46875c-4.140625 0-7.5-3.359374-7.5-7.5 0-4.144531 3.359375-7.5 7.5-7.5h28.46875c4.140625 0 7.5 3.355469 7.5 7.5 0 4.140626-3.359375 7.5-7.5 7.5zm0 0"></path><path d="m260.035156 276.367188h-56.9375c-4.144531 0-7.5-3.359376-7.5-7.5 0-4.144532 3.355469-7.5 7.5-7.5h56.9375c4.140625 0 7.5 3.355468 7.5 7.5 0 4.140624-3.359375 7.5-7.5 7.5zm0 0"></path><path d="m231.566406 319.046875h-28.46875c-4.140625 0-7.5-3.355469-7.5-7.5s3.359375-7.5 7.5-7.5h28.46875c4.140625 0 7.5 3.355469 7.5 7.5s-3.359375 7.5-7.5 7.5zm0 0"></path><path d="m260.035156 350.71875h-56.9375c-4.144531 0-7.5-3.355469-7.5-7.5 0-4.140625 3.355469-7.5 7.5-7.5h56.9375c4.140625 0 7.5 3.359375 7.5 7.5 0 4.144531-3.359375 7.5-7.5 7.5zm0 0"></path></g><path d="m285.519531 17.597656h-25.667969c-2.421874 0-4.382812 1.960938-4.382812 4.378906 0 5.808594-4.75 10.558594-10.554688 10.558594h-91.496093c-5.808594 0-10.558594-4.75-10.558594-10.558594 0-2.417968-1.960937-4.378906-4.382813-4.378906h-25.667968c-7.070313 0-12.800782 5.730469-12.800782 12.796875v163.582031h198.3125v-163.582031c0-7.066406-5.730468-12.796875-12.800781-12.796875zm0 0" fill="#f948b4"></path><path d="m143.179688 24.507812c-.203126-.8125-.320313-1.65625-.320313-2.527343 0-2.421875-1.960937-4.382813-4.382813-4.382813h-25.667968c-7.070313 0-12.800782 5.730469-12.800782 12.796875v163.582031h43.171876zm0 0" fill="#e00e8b"></path><path d="m285.519531 17.597656h-25.667969c-2.421874 0-4.382812 1.960938-4.382812 4.378906 0 5.808594-4.75 10.558594-10.554688 10.558594h-50.464843l103.871093 130.203125v-132.34375c0-7.066406-5.730468-12.796875-12.800781-12.796875zm0 0" fill="#fc7acd"></path><path d="m166.917969 77.207031h-34.585938c-4.140625 0-7.5-3.355469-7.5-7.5s3.359375-7.5 7.5-7.5h34.585938c4.140625 0 7.5 3.355469 7.5 7.5 0 4.140625-3.359375 7.5-7.5 7.5zm0 0" fill="#fc7acd"></path><path d="m117.816406 241.191406c-7.730468 8.339844-20.761718 8.839844-29.105468 1.109375l-34.496094-31.964843c-8.34375-7.730469-8.839844-20.761719-1.109375-29.105469s20.761719-8.839844 29.105469-1.109375l34.496093 31.964844c8.339844 7.730468 8.839844 20.761718 1.109375 29.105468zm0 0" fill="#f9cfa9"></path><path d="m116.707031 212.085938-16.410156-15.203126c2.160156 7.824219.367187 16.542969-5.550781 22.929688-5.921875 6.390625-14.480469 8.839844-22.441406 7.285156l16.40625 15.203125c8.34375 7.730469 21.371093 7.230469 29.105468-1.109375 7.730469-8.34375 7.230469-21.375-1.109375-29.105468zm0 0" fill="#fbbc8d"></path><path d="m117.816406 297.363281c-7.730468 8.34375-20.761718 8.839844-29.105468 1.109375l-34.496094-31.964844c-8.34375-7.730468-8.839844-20.761718-1.109375-29.101562 7.730469-8.34375 20.761719-8.839844 29.105469-1.109375l34.496093 31.964844c8.339844 7.730469 8.839844 20.757812 1.109375 29.101562zm0 0" fill="#f9cfa9"></path><path d="m117.816406 353.539062c-7.730468 8.34375-20.761718 8.839844-29.105468 1.109376l-34.496094-31.964844c-8.34375-7.730469-8.839844-20.761719-1.109375-29.105469s20.761719-8.839844 29.105469-1.109375l34.496093 31.964844c8.339844 7.730468 8.839844 20.761718 1.109375 29.105468zm0 0" fill="#f9cfa9"></path><path d="m385.238281 401.207031c-1.066406-3.929687-1.789062-7.933593-2.167969-11.972656-38.164062 62.65625-112.257812 91.753906-181.855468 73.660156 7.761718 4.988281 15.984375 9.308594 24.585937 12.882813.167969.070312.335938.140625.503907.210937 16.222656 6.851563 28.609374 19.777344 35.132812 35.453125 52.535156-3.480468 100.546875-23.511718 138.851562-54.941406zm0 0" fill="#fbbc8d"></path><path d="m116.707031 268.261719-16.410156-15.203125c2.160156 7.820312.367187 16.539062-5.550781 22.929687-5.921875 6.390625-14.480469 8.839844-22.441406 7.285157l16.40625 15.199218c8.34375 7.730469 21.375 7.234375 29.105468-1.109375 7.730469-8.34375 7.230469-21.371093-1.109375-29.101562zm0 0" fill="#fbbc8d"></path><path d="m116.707031 324.433594-16.410156-15.203125c2.160156 7.824219.367187 16.542969-5.550781 22.929687-5.921875 6.390625-14.480469 8.84375-22.441406 7.285156l16.40625 15.203126c8.34375 7.730468 21.375 7.234374 29.105468-1.109376 7.730469-8.34375 7.230469-21.375-1.109375-29.105468zm0 0" fill="#fbbc8d"></path></svg>
                        <h2 className="text-xl my-2 font-bold">Authentic Or CMS</h2>
                        <p className="text-sm">You can pick between a hand coded authentic website using the MERN stack, or a website created with a content management system like WordPress.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShowcaseDescription
