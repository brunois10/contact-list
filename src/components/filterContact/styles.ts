import styled from "styled-components"

export const Header = styled.header`
    margin: 0;
    padding: 0;
    justify-content: center;
    text-align: center;
    color: #fff;
`

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 40px 40px 20px 40px;
`

export const Title = styled.h3`
    font-size: 20px;
    font-weight: bold;
`

export const Actions = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
`

export const Search = styled.input`
    text-align: start;
    padding: 16px 24px;
    background-color: #24243D;
    border-radius: 5px;
    color: #E1E1E6;
    width: 350px;
    height: 40px;
    margin-bottom: 40px;
`