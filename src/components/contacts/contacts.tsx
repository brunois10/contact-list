import React from 'react'
import * as S from './styles'

const Contacts = () => {
    return (
        <>
        <S.Div>
        <S.Call src='src/img/contact.png' alt='Imagem do contato'></S.Call>
        <S.Card>
            <S.Contact>Bruno Guimarães de Paula</S.Contact>
            <S.Info>(21)987670200</S.Info>
            <S.Info>brunogdepaula@hotmail.com</S.Info>
        </S.Card>
        </S.Div>
        </>
        )
}



export default Contacts
