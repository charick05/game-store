import React from "react";
import './skeleton.scss';

export const SkeletonItem: React.FC = () => {
   return (
      <svg
      className='skeleton_item'
      role="img"
      width="330"
      height="340"
      aria-labelledby="loading-aria"
      viewBox="0 0 360 370"
      preserveAspectRatio="none"
    >
      <title id="loading-aria">Loading...</title>
      <rect
        x="0"
        y="0"
        width="100%"
        height="100%"
        clipPath="url(#clip-path)"
      ></rect>
      <defs>
        <clipPath id="clip-path">
            <rect x="0" y="0" rx="0" ry="0" width="100%" height="200" /> 
            <rect x="0" y="226" rx="11" ry="11" width="241" height="24" />
            <rect x="0" y="266" rx="5" ry="5" width="58" height="19" /> 
            <rect x="74" y="267" rx="5" ry="5" width="130" height="19" /> 
            <rect x="2" y="340" rx="8" ry="8" width="50" height="24" /> 
            <rect x="266" y="335" rx="13" ry="13" width="90" height="30" />
        </clipPath>
        <linearGradient id="fill">
          <stop
            offset="0.599964"
            stopColor="#3d3d43"
            stopOpacity="1"
          >
            <animate
              attributeName="offset"
              values="-2; -2; 1"
              keyTimes="0; 0.25; 1"
              dur="2s"
              repeatCount="indefinite"
            ></animate>
          </stop>
          <stop
            offset="1.59996"
            stopColor="#67656c"
            stopOpacity="1"
          >
            <animate
              attributeName="offset"
              values="-1; -1; 2"
              keyTimes="0; 0.25; 1"
              dur="2s"
              repeatCount="indefinite"
            ></animate>
          </stop>
          <stop
            offset="2.59996"
            stopColor="#3d3d43"
            stopOpacity="1"
          >
            <animate
              attributeName="offset"
              values="0; 0; 3"
              keyTimes="0; 0.25; 1"
              dur="2s"
              repeatCount="indefinite"
            ></animate>
          </stop>
        </linearGradient>
      </defs>
    </svg>
   )
};
export default SkeletonItem;


// import React from "react"
// import ContentLoader from "react-content-loader"

// const MyLoader = (props) => (
//   <ContentLoader 
//     speed={2}
//     width={360}
//     height={370}
//     viewBox="0 0 360 370"
//     backgroundColor="#f3f3f3"
//     foregroundColor="#ecebeb"
//     {...props}
//   >
//     <rect x="0" y="0" rx="0" ry="0" width="360" height="200" /> 
//     <rect x="0" y="226" rx="20" ry="20" width="241" height="24" /> 
//     <rect x="0" y="266" rx="5" ry="5" width="58" height="19" /> 
//     <rect x="74" y="267" rx="5" ry="5" width="130" height="19" /> 
//     <rect x="2" y="340" rx="8" ry="8" width="50" height="24" /> 
//     <rect x="266" y="335" rx="13" ry="13" width="90" height="30" />
//   </ContentLoader>
// )

// export default MyLoader;