import { createGlobalStyle } from "styled-components";
import { Colors } from "./Colors";

export const GlobalStyle = createGlobalStyle`
    :root {
        font-size: 1rem;
    }

    @media (max-width: 1080px) {
        html {
            font-size: 93.75%;
        }
    }
    
    @media (max-width: 720px) {
        html {
            font-size: 87.5%;
        }
    }

    * {
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif;
        font-size: 1rem;
    }

    html, body {
        width: 100%;
        min-height: 100vh;
        height: 100%;
        background-color: ${Colors.color5};
    }

    li {
        list-style: none;
    }

    a {
        text-decoration: none;
        color: inherit;
        
        :visited {
            color: inherit;
        }
    }

    input, button, a {
        :focus-visible {
            outline: ${Colors.blue1} 3px outset;
        }
    }
`;