import { createGlobalStyle } from 'styled-components'
import colors from './colors'

const GlobalCSS = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, san-serif;
    list-style: none;
    text-decoration: none;
  }

  body {
    background-color: ${colors._secundary};
    color: ${colors._primary};
  }
`

export default GlobalCSS
