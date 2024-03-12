import React from 'react'
import * as S from './styles'
import ContactClass from '../../models/Contact'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { edit, remove } from '../../store/reducers/contacts'



type Props = ContactClass


const Contacts = ({
  id,
  name,
  number,
  email
}: Props) => {

  const dispatch = useDispatch()
  const [editing, setEditing] = useState(false)


    return (
      <>
        <S.Div>
          <S.Icons>
            <S.Img src='src/img/contact.png' alt='Imagem do contato'/>
            {!editing ? (
            <S.Img src='src/img/pencil.png' alt="" onClick={() => setEditing(true)}/>
            ) : (
              <S.Img src='src/img/rKdUg.png' alt='' onClick={() => {
                dispatch(
                  edit({
                    id,
                    name,
                    number,
                    email
                  })
                  )
                  setEditing(false)
                }}/>
                )}
            <S.Img src="src/img/trash.png" alt="" onClick={() => dispatch(remove(id))} />
          </S.Icons>
          <S.Card>
            <S.Contact disabled={!editing}>{name}</S.Contact>
            <S.Info disabled={!editing}>{number}</S.Info>
            <S.Info disabled={!editing}>{email}</S.Info>
          </S.Card>
        </S.Div>
      </>
    )
  }



export default Contacts
