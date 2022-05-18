import { createGlobalStyle } from "styled-components";
import { Colors } from "./Colors";

export const GlobalStyle = createGlobalStyle`
    :root {
        // trabalhar os tamanhos das fontes
    }

    * {
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif;
    }

    html, body {
        width: 100%;
        height: 100%;
    }

    li {
        list-style: none;
    }

    a {
        text-decoration: none;

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