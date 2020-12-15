import { createGlobalStyle } from 'styled-components'
import { reset } from 'styled-reset'

const GlobalStyle = createGlobalStyle`
  ${reset}

  html, body, #root {
    height: 100vh;
    width: 100vw;
    font-family: 'Signika', sans-serif;
    font-size: 20px;
    list-style: none;
    overflow-x: hidden;
    scroll-behavior: smooth;
    box-sizing: border-box;
  }

  /* input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type=number] {
    -moz-appearance: textfield;
  } */

  a {
    text-decoration: none;
    color: inherit;

    &:visited {
      color: inherit;
    }
  }

  * {
    scrollbar-width: thin;
    scrollbar-color: #f9f9f9 #b5b5b5;
  }

  *::-webkit-scrollbar {
    width: 10px;
  }

  *::-webkit-scrollbar-track {
    background: #f9f9f9;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #b5b5b5;
    border-radius: 20px;
    border: none;
  }
`

export default GlobalStyle
