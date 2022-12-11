import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  body{
    background:${(props) => props.theme.background};
    color:${(props) => props.theme['base-text']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-style: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  header {
    font-style: 'Baloo 2', sans-serif;
    font-weight: 800;
  }

  button {
        cursor: pointer;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

  input[type="number"] {
    -moz-appearance: textfield;
  }

`
