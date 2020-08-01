import { createGlobalStyle } from "styled-components";
import { colors } from "./Utils/defaultStyles";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
    font-size: 10px;
    background-color: ${colors.lightBlue};
    color: ${colors.fontColor};

    @media(max-width: 768px) {
      font-size: 5px;
    }
  }

  h1 {
    font-size: 2rem;
    line-height: 3rem;
  }

  body, input, button {
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Noto Sans,Ubuntu,Droid Sans,Helvetica Neue,sans-serif;
  }
`;
