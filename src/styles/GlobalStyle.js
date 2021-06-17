import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body { 
    background: #f5f5f5;
    color: #212121;
  }

  body, input, button, select, textarea {
    font: 400 16px 'Montserrat', sans-serif;
  }

  button {
    cursor: pointer;
  }
`