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
    display: flex;
    justify-content: flex-start;
    font-size: 20px;
    font-weight: bold;
    width: 229px;
`

export const Actions = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 16px;
    cursor: pointer;
`

export const Search = styled.input`
    text-align: start;
    padding: 16px 24px;
    background-color: #24243D;
    border-radius: 6px;
    border: 1px solid #E1E1E6 ;
    color: #E1E1E6;
    width: 350px;
    height: 40px;
    margin-bottom: 40px;
    outline: 0;

    &::placeholder {
        color: #E1E1E6;
    }
`