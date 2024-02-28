import React, { FormEvent, useState } from 'react'
import * as S from './styles'
import { useDispatch } from 'react-redux'
import { add } from '../../store/reducers/contacts'

  const FilterContact = () => {
    const dispatch = useDispatch()

    const [form, setForm] = useState(false)
    const [editing, setEditing] = useState(false)

    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [email, setEmail] = useState('')

    const handleAddContact = () => {
      setForm(true)
    }

    const handleEditContact = () => {
      setEditing(true)
  }


    const registerContact = (evento: FormEvent) => {
      evento.preventDefault()

          dispatch(
            add({
              name,
              number,
              email
            })
          )
          setForm(false)
        }



    return (
        <>
        <S.Header>
            <S.Container>
            <S.Title>Meus contatos</S.Title>
            <S.Actions>
                <img src="src/img/add.png" alt="" onClick={handleAddContact}/>
                <img src="src/img/pencil.png" alt="" onClick={handleEditContact} />
                <img src="src/img/trash.png" alt="" />
            </S.Actions>
            </S.Container>
            <S.Search placeholder='Pesquisar contato' />
        </S.Header>
        {form && (
        <form onSubmit={registerContact}>
          <input type="text" value={name} onChange={(evento) => setName(evento.target.value)} />
          <input type="number" value={number} onChange={(evento) => setNumber(evento.target.value)} />
          <input type="email" value={email} onChange={(evento) => setEmail(evento.target.value)} />
          <button type='submit'>Adicionar contato</button>
        </form>
    )}
    </>
)}

export default FilterContact
