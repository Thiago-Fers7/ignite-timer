import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;

    @media (max-width: 1080px) {
      font-size: 56.25%;
    }

    @media (max-width: 768px) {
      font-size: 50%;
    }
  }

  :focus {
    outline: none;
    box-shadow: 0 0 0 0.2rem ${({ theme }) => theme.colors.green[500]};
  }

  body {
    background: ${({ theme }) => theme.colors.gray[900]};
    color: ${({ theme }) => theme.colors.white};
  }

  body, button, input, textarea {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1.6rem;
  }

  button {
    cursor: pointer;
  }
`
