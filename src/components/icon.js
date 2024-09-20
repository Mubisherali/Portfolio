import * as React from "react";

export const GithubIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <path fill="none" d="M0 0h512v512H0z" />
    <path
      fill="currentColor"
      d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 0 0 3.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 0 1-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0 0 25.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 0 1 5-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 0 1 112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 0 1 5 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 0 0 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32Z"
    />
  </svg>
);

export const TwitterIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 256 209"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <path fill="none" d="M0 0h256v209H0z" />
    <path
      fill="#55acee"
      d="M256 25.45a105.04 105.04 0 0 1-30.166 8.27c10.845-6.5 19.172-16.793 23.093-29.057a105.183 105.183 0 0 1-33.351 12.745C205.995 7.201 192.346.822 177.239.822c-29.006 0-52.523 23.516-52.523 52.52 0 4.117.465 8.125 1.36 11.97-43.65-2.191-82.35-23.1-108.255-54.876-4.52 7.757-7.11 16.78-7.11 26.404 0 18.222 9.273 34.297 23.365 43.716a52.312 52.312 0 0 1-23.79-6.57c-.003.22-.003.44-.003.661 0 25.447 18.104 46.675 42.13 51.5a52.592 52.592 0 0 1-23.718.9c6.683 20.866 26.08 36.05 49.062 36.475-17.975 14.086-40.622 22.483-65.228 22.483-4.24 0-8.42-.249-12.529-.734 23.243 14.902 50.85 23.597 80.51 23.597 96.607 0 149.434-80.031 149.434-149.435 0-2.278-.05-4.543-.152-6.795A106.748 106.748 0 0 0 256 25.45"
    />
  </svg>
);
// #0A66C2
export const LinkedInIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 256 256"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <path fill="none" d="M0 0h256v256H0z" />
    <g fill="none">
      <rect width={256} height={256} fill="#fff" rx={60} />
      <rect width={256} height={256} fill="#0A66C2" rx={60} />
      <path
        fill="#fff"
        d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82 19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4ZM38 59.627c0 11.865 9.767 21.627 21.632 21.627 11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38 47.762 38 38 47.763 38 59.627Zm6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4Z"
      />
    </g>
  </svg>
);

export const UpworkIcon = ({ className, ...rest }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 256 256"
      {...rest}
      className={`w-full h-auto ${className}`}
    >
      <path fill="none" d="M0 0h256v256H0z" />
      <path
        fill="#6FDA44"
        d="M128.001 0C57.307 0 0 57.311 0 128.001c0 70.686 57.307 128 128.001 128 70.69 0 127.999-57.314 127.999-128C256 57.311 198.691 0 128.001 0Zm61.558 149.879c-8.216 6.676-18.699 10.709-31.243 10.709-14.283 0-26.445-5.363-33.228-14.542-.182.283-.368.569-.553.858-7.519 11.772-15.329 22.91-26.775 29.458-5.615 3.253-11.986 5.026-19.296 5.026-14.938 0-26.969-5.563-36.072-15.593C38.771 153.673 32 135.508 32 113.38v-8.205h20.125v8.205c0 14.666 3.975 25.826 12.371 33.022 5.137 4.388 11.271 6.558 18.396 6.558 4.697 0 8.695-1.105 12.102-3.294 6.326-4.06 10.751-10.73 14.95-17.567-8.852-10.652-16.148-22.655-16.148-40.388 0-24.473 17.365-39.052 40.87-39.052 22.878 0 40.872 14.579 40.872 39.052 0 18.288-7.182 32.165-14.67 40.596-.032.038-.064.078-.096.115 4.198 6.888 9.671 12.537 18.762 12.537 10.523 0 16.768-4.963 21.944-10.091V113.38H192v36.499h-.441Z"
      />
    </svg>
  );
  
export const FiverrIcon = ({ className, ...rest }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 256 256"
      {...rest}
      className={`w-full h-auto ${className}`}
    >
      <path fill="none" d="M0 0h256v256H0z" />
      <path
        fill="#00b22d"
        d="M128.001 0C57.307 0 0 57.311 0 128.001c0 70.686 57.307 128 128.001 128 70.69 0 127.999-57.314 127.999-128C256 57.311 198.691 0 128.001 0Zm39.878 172.64h-20.39v-.28c-.523 7.074-7.936 14.207-19.852 14.207-12.59 0-22.782-9.236-22.782-25.622V105.1h-9.68v-16.38h9.68V77.13c0-9.68 4.118-24.318 23.35-24.318h14.82v16.38h-9.68c-5.622 0-6.9 2.478-6.9 6.9v11.59h16.92v16.38h-16.92v54.428c0 6.34 4.118 9.118 8.96 9.118 4.842 0 9.68-2.78 9.68-8.96v-28.908h20.39v28.908h.12Zm-84.394-32.89c4.046 0 7.06 3.284 7.06 7.328s-3.014 7.34-7.06 7.34-7.06-3.296-7.06-7.34 3.014-7.328 7.06-7.328Zm-7.35 20.338h14.7v33.073h-14.7v-33.073Zm76.73-53.718h-14.7v-33.073h14.7v33.073Zm-28.55 0h-14.7v-33.073h14.7v33.073Zm-76.73 53.718h14.7v33.073h-14.7v-33.073Zm119.88 0h14.7v33.073h-14.7v-33.073Zm0 53.718h14.7v33.073h-14.7v-33.073Zm-38.56-32.838h14.7v33.073h-14.7v-33.073Z"
      />
    </svg>
  );
  

// export const SunIcon = ({ className, ...rest }) => (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       {...rest}
//       className={`w-full h-auto ${className}`}
//     >
//       <g
//         fill="none"
//         stroke="currentColor"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         strokeWidth="2"
//       >
//         <g strokeDasharray="2">
//           <path d="M12 21v1M21 12h1M12 3v-1M3 12h-1">
//             <animate
//               fill="freeze"
//               attributeName="stroke-dashoffset"
//               dur="0.2s"
//               values="4;2"
//             />
//           </path>
//           <path d="M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5">
//             <animate
//               fill="freeze"
//               attributeName="stroke-dashoffset"
//               begin="0.2s"
//               dur="0.2s"
//               values="4;2"
//             />
//           </path>
//         </g>
//         <path
//           fill="currentColor"
//           d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"
//           opacity="0"
//         >
//           <set attributeName="opacity" begin="0.5s" to="1" />
//         </path>
//       </g>
//       <g fill="currentColor" fillOpacity="0">
//         <path d="m15.22 6.03l2.53-1.94L14.56 4L13.5 1l-1.06 3l-3.19.09l2.53 1.94l-.91 3.06l2.63-1.81l2.63 1.81z">
//           <animate
//             fill="freeze"
//             attributeName="fill-opacity"
//             begin="0.6s;lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+6s"
//             dur="0.4s"
//             values="0;1"
//           />
//           <animate
//             fill="freeze"
//             attributeName="fill-opacity"
//             begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.2s"
//             dur="0.4s"
//             values="1;0"
//           />
//         </path>
//         <path d="M13.61 5.25L15.25 4l-2.06-.05L12.5 2l-.69 1.95L9.75 4l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
//           <animate
//             fill="freeze"
//             attributeName="fill-opacity"
//             begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3s"
//             dur="0.4s"
//             values="0;1"
//           />
//           <animate
//             fill="freeze"
//             attributeName="fill-opacity"
//             begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.2s"
//             dur="0.4s"
//             values="1;0"
//           />
//         </path>
//         <path d="M19.61 12.25L21.25 11l-2.06-.05L18.5 9l-.69 1.95l-2.06.05l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
//           <animate
//             fill="freeze"
//             attributeName="fill-opacity"
//             begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+0.4s"
//             dur="0.4s"
//             values="0;1"
//           />
//           <animate
//             fill="freeze"
//             attributeName="fill-opacity"
//             begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.8s"
//             dur="0.4s"
//             values="1;0"
//           />
//         </path>
//         <path d="m20.828 9.731l1.876-1.439l-2.366-.067L19.552 6l-.786 2.225l-2.366.067l1.876 1.439L17.601 12l1.951-1.342L21.503 12z">
//           <animate
//             fill="freeze"
//             attributeName="fill-opacity"
//             begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3.4s"
//             dur="0.4s"
//             values="0;1"
//           />
//           <animate
//             fill="freeze"
//             attributeName="fill-opacity"
//             begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.6s"
//             dur="0.4s"
//             values="1;0"
//           />
//         </path>
//       </g>
//       <mask id="lineMdSunnyFilledLoopToMoonFilledLoopTransition1">
//         <circle cx="12" cy="12" r="12" fill="#fff" />
//         <circle cx="22" cy="2" r="3" fill="#fff">
//           <animate
//             fill="freeze"
//             attributeName="cx"
//             begin="0.1s"
//             dur="0.4s"
//             values="22;18"
//           />
//           <animate
//             fill="freeze"
//             attributeName="cy"
//             begin="0.1s"
//             dur="0.4s"
//             values="2;6"
//           />
//           <animate
//             fill="freeze"
//             attributeName="r"
//             begin="0.1s"
//             dur="0.4s"
//             values="3;12"
//           />
//         </circle>
//         <circle cx="22" cy="2" r="1">
//           <animate
//             fill="freeze"
//             attributeName="cx"
//             begin="0.1s"
//             dur="0.4s"
//             values="22;18"
//           />
//           <animate
//             fill="freeze"
//             attributeName="cy"
//             begin="0.1s"
//             dur="0.4s"
//             values="2;6"
//           />
//           <animate
//             fill="freeze"
//             attributeName="r"
//             begin="0.1s"
//             dur="0.4s"
//             values="1;10"
//           />
//         </circle>
//       </mask>
//       <circle
//         cx="12"
//         cy="12"
//         r="6"
//         fill="currentColor"
//         mask="url(#lineMdSunnyFilledLoopToMoonFilledLoopTransition1)"
//       >
//         <set attributeName="opacity" begin="0.5s" to="0" />
//         <animate
//           fill="freeze"
//           attributeName="r"
//           begin="0.1s"
//           dur="0.4s"
//           values="6;10"
//         />
//       </circle>
//     </svg>
//   );
  

export const MoonIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <rect x="0" y="0" width="24" height="24" fill="rgba(255, 255, 255, 0)" />
    <g
      fill="none"
      stroke="currentColor"
      strokeDasharray="2"
      strokeDashoffset="2"
      strokeLinecap="round"
      strokeWidth="2"
    >
      <path d="M0 0">
        <animate
          fill="freeze"
          attributeName="d"
          begin="1.2s"
          dur="0.2s"
          values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"
        />
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="1.2s"
          dur="0.2s"
          values="2;0"
        />
      </path>
      <path d="M0 0">
        <animate
          fill="freeze"
          attributeName="d"
          begin="1.5s"
          dur="0.2s"
          values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"
        />
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="1.5s"
          dur="1.2s"
          values="2;0"
        />
      </path>
      <animateTransform
        attributeName="transform"
        dur="30s"
        repeatCount="indefinite"
        type="rotate"
        values="0 12 12;360 12 12"
      />
    </g>
    <g fill="currentColor">
      <path d="M15.22 6.03L17.75 4.09L14.56 4L13.5 1L12.44 4L9.25 4.09L11.78 6.03L10.87 9.09L13.5 7.28L16.13 9.09L15.22 6.03Z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M19.61 12.25L21.25 11L19.19 10.95L18.5 9L17.81 10.95L15.75 11L17.39 12.25L16.8 14.23L18.5 13.06L20.2 14.23L19.61 12.25Z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="0.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
    </g>
    <g
      fill="currentColor"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z" />
      <set attributeName="opacity" begin="0.6s" to="0" />
    </g>
    <mask id="lineMdMoonFilledToSunnyFilledLoopTransition0">
      <circle cx="12" cy="12" r="12" fill="#fff" />
      <circle cx="18" cy="6" r="12" fill="#fff">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.6s"
          dur="0.4s"
          values="18;22"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.6s"
          dur="0.4s"
          values="6;2"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.6s"
          dur="0.4s"
          values="12;3"
        />
      </circle>
      <circle cx="18" cy="6" r="10">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.6s"
          dur="0.4s"
          values="18;22"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.6s"
          dur="0.4s"
          values="6;2"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.6s"
          dur="0.4s"
          values="10;1"
        />
      </circle>
    </mask>
    <circle
      cx="12"
      cy="12"
      r="10"
      fill="currentColor"
      mask="url(#lineMdMoonFilledToSunnyFilledLoopTransition0)"
      opacity="0"
    >
      <set attributeName="opacity" begin="0.6s" to="1" />
      <animate
        fill="freeze"
        attributeName="r"
        begin="0.6s"
        dur="0.4s"
        values="10;6"
      />
    </circle>
  </svg>
);

export const CircularText = ({ className, ...rest }) => (

<svg version="1.1" viewBox="0 0 2000 2000" width="1280" height="1280" 
{...rest}
className={`w-full h-auto ${className}`}
 xmlns="http://www.w3.org/2000/svg">
<path transform="translate(908,336)" d="m0 0 35 2 7 23 10 35 7 31 6 19 2 1 1-6 5-12 11-31 13-31 7-18 3-8h15l17 1 3 5 10 35 7 30 10 34 2 6 4-8 9-27 6-14 13-33 7-22 2-2 33 1 2 1-10 25-13 37-14 34-9 27-11 26-3 4-36-2-3-7-14-47-6-25-6-24v-2h-2l-3 9-8 19-7 21-15 36-7 15-1 1h-21l-15-1-3-5-8-26-7-29-17-58-8-33-1-6z"/>
<path transform="translate(1600,730)" d="m0 0h5l7 21 7 25 9 28 3 14v21l-4 17-8 15-7 11-11 8-14 8-12 5-12 3-7 1-16-1-16-5-10-6-13-10-9-9-8-14-10-26-11-33-5-20-2-6 5-3 33-11 25-7 47-16 28-8zm-17 43-31 10-28 8-29 10-1 2 12 34 10 19 6 5 15 7 10 2 12-1 18-6 8-5 7-9 6-12 2-7v-12l-6-23-6-18-1-4z"/>
<path transform="translate(1351,431)" d="m0 0 5 1 15 11 9 7-6 9-8 9-9 14-11 12 5 1 13 2 12 5 9 7 7 6 8 11 5 11 2 6v20l-5 15-7 11-13 16-9 6-10 4-10 2h-17l-17-4-9-6-12-11-7-10-4-10v-4h-2l-2 6-2 3-5-2-12-9-6-5-4-4 7-11 7-10 8-9 7-10 8-11 14-18 11-15 8-11 10-12 9-14zm-13 88-8 3-9 6-6 7-4 8-2 8v8l4 12 5 7 10 6 4 1h15l10-5 8-9 7-13 1-11-3-10-7-9-7-6-9-3z"/>
<path transform="translate(1273,1369)" d="m0 0h3l19 37 12 19 8 15 7 14 11 18 10 20 10 18v3l-14 7-12 8-3-1-6-10-2 7-4 9-5 5-10 7-10 6-11 4-7 1h-14l-11-3-8-4-12-9-7-6-8-16-5-12-2-10v-11l4-15 8-14 9-10 10-7 11-4 5-1h21l-8-16-14-26-3-5v-2l16-8zm-14 90-12 5-7 8-3 10v12l4 13 8 9 12 7 4 1h9l9-3 9-7 5-6 3-8v-12l-5-12-7-10-6-5-7-2z"/>
<path transform="translate(448,901)" d="m0 0h11l13 3 10 6 6 5 7 11 6 15 2 10v22l-3 17-5 17-12 25-6-1-21-12 1-4 3-5 7-16 4-12 2-14v-11l-3-12-4-5-5-2-9 1-5 4-5 11-4 14-5 17-7 16-8 11-9 7-11 4h-16l-13-4-10-7-7-8-7-15-3-10-1-8v-17l2-14 6-20 9-16 3-1 19 9 5 2-2 6-7 16-4 14-1 14 2 12 3 5v2l5 2 3 1h8l6-4 8-19 6-19 6-18 7-11 14-11z"/>
<path transform="translate(687,458)" d="m0 0h2l-4 38-4 27-1 4 16 4 43 11 23 7v3l-9 7-14 9-7 7-10-2-28-8-18-4h-4l-3 16v6l12 15 5 9-5 5-13 8-8 7-4-2-6-8-8-10-10-16-10-12-13-19-10-13-8-10-12-18-10-12-8-12 2-4 13-8 8-6 2-2h4l7 10 8 9 10 15 8 11 14 18 5 9 2-4 12-59 3-5 10-9z"/>
<path transform="translate(745,1432)" d="m0 0 6 2 16 9 9 6-1 5-9 13-8 15-10 14-10 17-12 19-9 13-8 15-8 11-7 11-5-2-8-6-28-17-11-7-13-9-13-7-11-8-11-7 2-4 9-13 4-7 5 2 11 7 18 11 16 10 11 8 7 4h3l8-16 8-11 3-4-1-4-10-6-10-7-13-7-14-10-10-6-1-3 10-15 5-8 5 2 6 5 16 10 17 10 12 8 2 2 4-1 8-12 7-10 10-18z"/>
<path transform="translate(1390,1338)" d="m0 0 16 1 11 4 11 7 7 6 9 12 6 12 3 10v18l-4 13-7 14-8 10-8 8-11 7-10 4-12 3h-19l-16-5-9-5-9-8-10-15-4-9-3-14v-8l3-15 11-21 3-4h2l1-3 17-13 12-6 7-2zm-7 32-10 3-6 4-7 8-3 8-1 4v8l4 11 6 9 8 7 9 4 8 1 10-2 9-5 7-10 3-8v-14l-7-14-7-7-12-6z"/>
<path transform="translate(1131,1481)" d="m0 0h19l14 3 12 5 8 6 7 10 8 14 4 14v20l-4 11-8 14-9 10-11 7-17 7-13 2h-11l-14-3-14-8-12-10-7-14-6-18 1-4 20-6 32-7 30-8h3l-1-5-4-5-10-4-4-1h-16l-11 3-9 5-8 9-6-1-11-9-5-3 1-4 7-11 9-8 13-6 16-4zm34 64-51 14v4l5 6 9 6 6 2h11l11-4 8-7 5-9 1-4v-8z"/>
<path transform="translate(1504,1176)" d="m0 0 14 1 14 4 16 9 8 8 6 10 5 13 2 10v12l-3 14-6 16-7 9-10 9-10 7-11 4-5 1h-19l-13-4-13-7 1-5 8-16 12-27 15-29 1-5-16 2-8 4-7 8-7 15-2 9 2 14-23 8-4-1-4-14v-10l4-16 5-12 16-24 6-5 16-8 9-3zm25 42-3 5-11 22-5 14-6 10 1 3 8 1 12-3 11-8 4-9 1-6v-11l-4-11-3-5z"/>
<path transform="translate(1204,417)" d="m0 0h15l14 3 14 7 11 8 8 8 7 12 4 12 1 5v12l-5 19-5 9-2 1-22-10-30-13-23-8-7-3 2 13 3 8 4 5 9 6 14 4h17l5-1 4 9 6 15-4 3-10 3h-20l-22-6-11-6-10-8-8-8-7-12-5-15-1-11 3-16 8-18 6-8 13-10 14-7zm8 27-10 4-8 7-3 4 10 4 17 7 27 12h1l1-12-4-10-6-8-7-5-11-3z"/>
<path transform="translate(1551,919)" d="m0 0h20l13 4 9 5 12 9 5 5 4 7 6 15 2 9v20l-4 16-8 15-9 9-14 7-15 4-6 1h-12l-1-1-1-7-2-65v-16l-9 3-5 4-5 9-3 12v9l3 12 3 6 5 7-2 4-14 14-5 2-4-5-9-16-4-11-2-12v-14l2-13 5-13 8-14 7-7 14-9 10-4zm19 35v17l1 37 1 5 7-1 9-7 6-10 2-7v-9l-3-10-4-6-7-6-7-3z"/>
<path transform="translate(483,686)" d="m0 0h11l11 2 16 8 26 14 20 9 9 6-1 5-9 15-3 8-5-1-8-4 4 12v8l-3 12-6 11-10 14-7 6-10 3-6 1-15-2-8-4-6-7-5-10-2-8 1-12 5-15 8-19 6-11-1-4-4-1h-9l-8 4-7 8-4 8-3 14-1 18h-26l-1-1v-18l4-18 4-13 5-9 8-10 11-12 9-5zm32 49-13 28-1 7 4 8 8 4 6-1 6-4 4-5 4-8 1-3v-12l-3-7-4-4-7-3z"/>
<path transform="translate(591,1298)" d="m0 0h4l6 8 8 7 6 6-1 4-7 8 9 1 12 4 8 4 7 7 10 14 5 11 1 6v9l-4 12-5 9-11 12-8 9h-2v2l-13 10-7 8-8 8-10 8-5-1-22-22 4-4 10-8 7-7 7-8 8-6 10-9 7-10 4-8v-9l-5-10-7-6-8-3h-11l-12 6-9 7-4 2-2 4-12 12-9 7-11 12-4-2-9-10-11-12 2-4 10-11 9-7 15-15 8-7 12-12 11-9z"/>
<path transform="translate(569,567)" d="m0 0h9l8 2 1 3-5 26-1 1-15 1-8 4-7 6-6 9-2 8 1 10 5 10 6 7 9 6 6 2h15l9-3 7-6 6-10 1-4v-19l15-6 12-3 2 2 2 10v17l-4 15-8 11-9 10-6 7-16 8-12 4-5 1h-15l-12-3-14-7-10-9-7-8-6-11-3-14v-16l2-12 8-16 10-13 8-7 9-6 11-5z"/>
<path transform="translate(1618,1060)" d="m0 0h3l-1 8-5 24-1 2-23 5-52 10-7 1v2l17 12 18 13 10 6 13 10 10 7-1 10-4 19-3 3-10-7-11-7-13-10-10-6-10-7-15-11-21-14-15-11 1-9 5-24 3-2 85-18z"/>
<path transform="translate(414,801)" d="m0 0 23 6 2 4-6 25 15 4 28 8 4 1h8l5-3 4-7v-15l18-2 7-1 2 3 1 6v11l-3 14-8 16-7 8-10 5-4 1h-17l-16-4-35-10h-3l-4 15-4 1-20-4-2-1 1-9 2-10-25-6-2-1 1-6 7-25 2-3 28 7 7-27z"/>
<path transform="translate(1416,1277)" d="m0 0 4 1 9 6 10 7 16 12 13 10 10 6 15 12 16 10 14 11 22 15 6 5-2 5-9 11-7 12-4-1-36-25-13-10-10-6-10-8-8-6-15-10-13-10-16-11-10-7 1-4 7-10 8-11z"/>
<path transform="translate(565,1252)" d="m0 0 4 2 14 21 2 4-1 4-15 8-16 11-22 14-16 10-14 9-14 8-15 10-16 10-9 5h-2l-7-11-7-13-2-3v-3l9-5 15-10 14-9 11-6 17-12 15-9 21-13 13-9 18-10z"/>
<path transform="translate(539,1200)" d="m0 0 4 4 8 16 5 9-2 4-23 10-16 8-21 10-11 5-19 9-15 8-23 10-15 8h-4l-12-23-3-5 1-4 28-12 29-15 23-10 25-13 30-13z"/>
<path transform="translate(1051,1497)" d="m0 0h5l1 1 4 86 1 31-1 1-26 2h-5l-1-1-1-11h-2l-1 2h-2v2l-10 6-11 4-9 2h-5l-1-1-1-18v-14h9l11-2 8-4 5-6 3-7 1-5v-19l-2-47z"/>
<path transform="translate(895,1487)" d="m0 0h8l9 3 6 7 3 7v11l-4 8-5 5-5 3h-14l-7-4-6-9-2-6 1-8 5-10 6-5z"/>
</svg>
);

export const LinkArrow = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-5m-7 1L20 4m-5 0h5v5"
    />
  </svg>
);

