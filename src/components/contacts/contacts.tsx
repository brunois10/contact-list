import React from 'react'
import * as S from './styles'
import ContactClass from '../../models/Contact'

type Props = ContactClass


const Contacts = ({
  name,
  number,
  email
}: Props) => {


    return (
        <>
        <S.Div>
          <S.Call src='src/img/contact.png' alt='Imagem do contato'></S.Call>
          <S.Card>
              <S.Contact>{name}</S.Contact>
              <S.Info>{number}</S.Info>
              <S.Info>{email}</S.Info>
          </S.Card>
        </S.Div>
        </>
        )
}



export default Contacts
