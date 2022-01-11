import { createGlobalStyle, ThemeProvider } from "styled-components";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "tailwindcss/tailwind.css";
config.autoAddCss = false;

const GlobalStyle = createGlobalStyle`

  @import url("https://fonts.googleapis.com/css2?family=Raleway&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Open+Sans&display=swap");
  

  html, 
  body {
    padding: 0;
    margin: 0;
    font-family: "Open Sans", sans-serif;
    font-size: 14px;
    height: 100vh;
    width: 100%;
    overflow-x: hidden;
  }

  ::-webkit-scrollbar {
  width: 0;
  }
  a {
  font-family: "Raleway", sans-serif;
  font-weight: 400;
  letter-spacing: 1.5px;
  text-decoration: none;
  }
  h2 {
    font-family: "Raleway", sans-serif;
    font-weight: 700;
    letter-spacing: 1.5px;
  }
  h3 {
    font-family: "Raleway", sans-serif;
    font-weight: 700;
    letter-spacing: 1.5px;
  }
  h4 {
    font-family: "Raleway", sans-serif;
    font-weight: 400;
    letter-spacing: 1.5px;
    color: rgba(255, 255, 255, 0.7);
    transition: 0.3s ease;
  }
  h4:hover {
    color: #ffff;
  }
  p {
    font-family: "Open Sans", sans-serif;
    font-size: 14px;
    letter-spacing: 0.5px;
    color: rgba(255, 255, 255, 0.7);
  }

  button {
    font-family: "Raleway", sans-serif;
    font-weight: 700;
    transition: 1s ease;
  }
  button:hover {
    index
  }
  .highlight:hover {
    color: hsl(176, 68%, 64%);
    border: 1px solid hsl(176, 68%, 64%);  
    transition: all 0.3s ease-in;  
  }
`;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
