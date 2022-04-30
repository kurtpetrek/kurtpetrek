import React from "react";
import styled from "styled-components/macro";

const size = "40px";

const FooterContainer = styled.div`
  footer {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-around;
    background: #fff;
    padding: 7px;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 2;
  }

  .footer-icon-container {
    width: ${size};
    height: ${size};
    position: relative;
    filter: saturate(30%);
  }

  .footer-icon-frame {
    position: absolute;
    width: calc(${size} * 0.96);
    height: calc(${size} * 0.96);
    border: calc(${size} * 0.05) solid white;
    border-radius: 50%;
    transform: translate(-50%, -50%) rotate(0deg);
    left: 50%;
    top: 50%;
    transition: transform 1s, border-radius 1s;
    animation: footer-icon-frame 5s infinite linear;
  }

  .footer-icon-container:hover .footer-icon-frame {
    transform: translate(-50%, -50%) rotate(360deg);
    border-radius: 0%;
    animation-play-state: paused;
  }

  .footer-icon-container:hover .footer-icon-path {
    animation-play-state: paused;
  }

  @keyframes footer-icon-frame {
    0% {
      border-color: red;
    }
    14.3% {
      border-color: orange;
    }
    28.6% {
      border-color: yellow;
    }
    42.9% {
      border-color: green;
    }
    57.2% {
      border-color: blue;
    }
    71.5% {
      border-color: indigo;
    }
    85.8% {
      border-color: violet;
    }
    100% {
      border-color: red;
    }
  }

  .footer-icon {
    width: calc(${size} * 0.6);
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
  }

  .footer-icon-path {
    fill: green;
    animation: rainbow 5s infinite linear;
  }
  @keyframes rainbow {
    0% {
      fill: red;
    }
    14.3% {
      fill: orange;
    }
    28.6% {
      fill: yellow;
    }
    42.9% {
      fill: green;
    }
    57.2% {
      fill: blue;
    }
    71.5% {
      fill: indigo;
    }
    85.8% {
      fill: violet;
    }
    100% {
      fill: red;
    }
  }

  footer a:nth-child(2) .footer-icon-path,
  footer a:nth-child(2) .footer-icon-frame {
    animation-delay: -3s;
  }

  footer a:nth-child(3) .footer-icon-path,
  footer a:nth-child(3) .footer-icon-frame {
    animation-delay: -2s;
  }

  footer a:nth-child(4) .footer-icon-path,
  footer a:nth-child(4) .footer-icon-frame {
    animation-delay: -1s;
  }
`;

const RainbowFooter = ({ className = "" }) => {
  return (
    <FooterContainer className={className}>
      <footer>
        <a
          href="https://codepen.io/KPCodes"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="footer-icon-container">
            <div className="footer-icon-frame"></div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 89.1 87.6"
              className="footer-icon"
            >
              <defs></defs>
              <path
                className="footer-icon-path"
                d="M44.5,87.6C31.4,78.9,18.8,70.3,6.1,62c-3.9-2.5-6.4-5.3-5.6-10.3c0.4-3,0.5-6.2,0-9.1
      c-1.8-10.4,2.3-16.9,11.5-22C22,15,31.3,8,40.8,1.4c2.4-1.7,4.2-2.1,7-0.2c12,8.3,24.2,16.4,36.5,24.4c3.4,2.2,5,4.7,4.7,9
      c-0.4,5.9-0.4,11.8,0,17.7c0.3,4.3-1.6,6.7-4.9,8.9C71,69.9,57.8,78.7,44.5,87.6z M77.2,57c-0.4-0.8-0.5-1.2-0.8-1.4
      c-11.3-8.3-11.3-8.4-22.9-0.4c-2.1,1.4-5,3.2-5.3,5.2c-0.8,5-0.3,10.2-0.3,16.2C58.5,69.5,67.9,63.3,77.2,57z M48.2,10.3
      c-1,17-1,17,11.6,25.5c1.5,1,3,2,4.8,3.1c4.2-2.9,8.5-5.7,13.2-8.9C67.7,23.3,58.4,17.1,48.2,10.3z M11.2,30.1
      c4.9,3.3,9.2,6.2,12.5,8.4c13.5-4.9,20.9-12.7,16.2-27.5C30.5,17.2,21.1,23.4,11.2,30.1z M11.8,57.1c9.4,6.3,18.8,12.6,28.9,19.3
      c0-5.6,0.1-10.1-0.1-14.6c-0.1-1.4-0.6-3.3-1.6-4.2c-10.4-10-15-10.3-26.5-2C12.3,55.8,12.3,56.3,11.8,57.1z M31.5,43
      C43.9,53.5,46,53.5,57.4,42.9c-4.4-2.9-8.7-5.7-13-8.5C40,37.3,36,40,31.5,43z M8.4,49.9c3.7-2.6,6.4-4.4,9.6-6.7
      c-3.5-2.3-6.3-4.1-9.6-6.3C8.4,41.6,8.4,45.1,8.4,49.9z M80.6,49.7c0-4.6,0-8.1,0-12.6c-3.4,2.2-6.1,4-9.5,6.2
      C74.3,45.5,77,47.3,80.6,49.7z"
              />
            </svg>
          </div>
        </a>

        <a
          href="https://github.com/kurtpetrek"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="footer-icon-container">
            <div className="footer-icon-frame"></div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32.6 36.2"
              className="footer-icon"
            >
              <g className="footer-icon-path">
                <path
                  id="github_4_"
                  d="M23.3,36.2c-4,0-8,0-12,0c0-1.6,0-3.2,0-4.9c-1.3,0-2.3,0.2-3.1,0c-1.5-0.5-3.2-1-4.3-2
      c-1.5-1.5-2.6-3.5-3.9-5.4c2-0.5,3.1,0.7,4.2,2.1c3.4,4.1,6.2,3.8,8.3-1.1c-0.6-0.2-1.1-0.3-1.7-0.5c-5.6-1.2-8.6-3.7-8.5-9.4
      c0-4.8,1.6-9.7,2.6-14.5C4.9,0.3,5,0.3,5.3,0c1.4,0.6,3,1.3,4.6,1.9c0.8,0.3,1.7,0.5,2.6,0.5c2.3,0,4.7-0.5,6.9-0.2
      c2.7,0.3,4.9,0.1,7.3-1.3c2.6-1.5,3.6-0.7,3.6,2.4c0,2.2,0.3,4.1,1.3,6.2c2.9,6.1-0.9,13.3-7.4,14.8c-0.8,0.2-1.6,0.4-2,0.5
      c0.4,1.9,0.8,3.6,0.9,5.3C23.3,32,23.2,34.1,23.3,36.2z"
                />
              </g>
            </svg>
          </div>
        </a>

        <a
          href="https://www.instagram.com/kurtpetrek/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="footer-icon-container">
            <div className="footer-icon-frame"></div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 34.3 33.9"
              className="footer-icon"
            >
              <g className="footer-icon-path">
                <path
                  id="bottom_1_"
                  d="M0.1,12.2c3.3,0,6.2,0,9.5,0c-2.1,5-1.6,9.4,3.2,12.4c3.1,2,7,1.5,10-0.9c3.2-2.6,3.8-6.2,2-11.5
      c3.1,0,6.1,0,9.5,0c0,2.9,0,5.7,0,8.6c0,2,0,4,0,6c-0.2,4.3-2.9,6.9-7.1,7c-6.7,0-13.3,0-20,0c-3.9,0-6.7-2.4-6.9-6.4
      C-0.1,22.5,0.1,17.5,0.1,12.2z"
                />
                <path
                  id="top_1_"
                  d="M0.1,10.9C0,7.3-0.3,4.1,2.9,1.3c0,2.6,0,4.8,0,7c0.3,0,0.6,0.1,1,0.1c1.1-2.5-0.1-5.5,0.7-8
      c0.2,0,0.5,0,0.7,0c0,2.7,0,5.3,0,8c0.4,0,0.8,0,1.2,0.1c0.8-2.6,0.1-5.5,0.9-8.2c0.1,2.7,0.3,5.4,0.4,8.2c0.4,0,0.8,0,1.2-0.1
      c0-2.7,0-5.4,0-8.3c6.9,0,13.3-0.1,19.7,0c2.6,0.1,4.8,2.4,5.3,5.2c0.3,1.7,0.3,3.5,0.4,5.7c-4.5-0.8-9,1.3-13.2-1.6
      c-2.6-1.8-5.7-1.7-8.3,0.1c-1.8,1.2-3.6,1.5-5.6,1.4C5,10.8,2.7,10.9,0.1,10.9z M25.3,5.6c-0.5,2.2,0.3,3.1,2.7,3.1
      c2.4,0,3.2-0.7,3.2-3.1c0-2.5-0.9-3-3.2-3.1C25.6,2.5,24.9,3.4,25.3,5.6z"
                />
                <path
                  id="center_1_"
                  d="M17.1,10.5c3.7,0,6.7,3,6.6,6.7c-0.1,3.6-3,6.5-6.6,6.5c-3.7,0-6.7-2.9-6.7-6.6
      C10.4,13.4,13.4,10.5,17.1,10.5z M22.1,17c-0.1-2.9-2.3-5-5.2-4.9c-2.7,0.1-4.9,2.3-4.8,5c0.1,2.8,2.4,5.1,5.2,4.9
      C20,22,22.2,19.7,22.1,17z"
                />
              </g>
            </svg>
          </div>
        </a>

        <a
          href="https://www.linkedin.com/in/kurtpetrek"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="footer-icon-container">
            <div className="footer-icon-frame"></div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 36 35"
              className="footer-icon"
            >
              <g className="footer-icon-path">
                <path
                  id="right_1_"
                  d="M19.8,11.6c0.1,0.9,0.2,1.7,0.2,2.1c1.8-0.9,3.5-2.2,5.3-2.6c4.3-0.9,7.3,1.2,9,5.2
      c2.4,5.6,1.4,11.4,1.5,17.2c0,0.5-1.2,1.3-1.8,1.3c-1.9,0.2-3.8,0.1-6.1,0.1c0-4,0-7.9,0-11.7c0-0.9,0-1.8-0.2-2.7
      C27.4,18.3,26.3,17,24,17c-2.2,0-3.9,1.7-3.9,4c-0.1,4,0,8-0.1,12c0,0.6-0.1,1.1-0.2,1.8c-2.3,0-4.5,0-7,0c0-7.7,0-15.3,0-23.2
      C15.2,11.6,17.4,11.6,19.8,11.6z"
                />
                <path
                  id="btm-left_1_"
                  d="M8.2,34.8c-2.3,0-4.5,0-6.9,0c0-7.7,0-15.4,0-23.2c2.3,0,4.5,0,6.9,0C8.2,19.3,8.2,27,8.2,34.8z"
                />
                <path
                  id="top-left_1_"
                  d="M0,4.1c1.3-2.2,2.4-4.8,5.7-4c2,0.5,3.1,2,3,4.1c0,1.9-1,3.2-2.8,3.7C2.6,8.9,1.3,6.5,0,4.1z"
                />
              </g>
            </svg>
          </div>
        </a>
      </footer>
    </FooterContainer>
  );
};

export default RainbowFooter;
