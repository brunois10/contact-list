import styled from "styled-components";

export const Card = styled.div`
    background-color: #fcfcfc;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 16px;
    margin-bottom: 32px;
    border-radius: 16px;
`
export const Contact = styled.h3`
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 16px;
`
export const Status = styled.span`
    padding: 4px 8px;
    color: #fff;
    font-weight: bold;
    font-size: 12px;
    background-color: green;
    border-radius: 8px;
    margin-right: 16px;
`
export const Phone = styled.textarea`
    color: #8b8b8b;
    font-size: 16px;
    line-height: 16px;
    font-family: 'Roboto Mono', monospace;
    display: block;
    width: 25%;
    margin-bottom: 16px;
    margin-top: 16px;
    resize: none;
    border: none;
    background-color: transparent;
`

export const EditButton = styled.button`
    font-weight: bold;
    font-size: 12px;
    background-color: black;
    color: white;
    padding: 8px 12px;
    border: none;
    cursor: pointer;
    border-radius: 8px;
    margin-right: 8px;
`
export const DeleteButton = styled.button`
    font-weight: bold;
    font-size: 12px;
    background-color: red;
    color: white;
    padding: 8px 12px;
    border: none;
    cursor: pointer;
    border-radius: 8px;
    margin-right: 8px;
`