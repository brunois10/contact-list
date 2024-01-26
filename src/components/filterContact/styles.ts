import styled from "styled-components"

export const Search = styled.input`
    display: inline-block;
    text-align: start;
    padding: 8px;
    background-color: #fff;
    border-radius: 8px;
    font-weight: bold;
    color: #666666;
    border-color: #666666;
    width: 100%;
`

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 16px;
    margin-top: 16px;
`

export const Card = styled.div`
    padding: 8px;
    border: 1px solid blue;
    background-color: #fff;
    color: blue;
    border-radius: 8px;
    cursor: pointer;
`
export const Quantity = styled.span`
    font-weight: bold;
    font-size: 24px;
    display: block;
`
export const State = styled.span`
    font-size: 14px;
`