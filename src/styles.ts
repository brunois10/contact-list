import styled, { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
    }
`
export const Main = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
`


export default GlobalStyles