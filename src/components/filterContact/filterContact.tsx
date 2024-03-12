import React, { FormEvent, useState } from 'react'
import * as S from './styles'
import { useDispatch } from 'react-redux'
import { add, filterList } from '../../store/reducers/contacts'

  const FilterContact = () => {

    const dispatch = useDispatch()

    const [form, setForm] = useState(false)
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [email, setEmail] = useState('')


    const handleAddContact = () => {
      setForm(true)
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
            </S.Actions>
            </S.Container>
            <S.Search
            type='text'
            placeholder='Pesquisar contato'
            onChange={(event) => dispatch(filterList(event.target.value))}
            />
        </S.Header>
        {form && (
        <form onSubmit={registerContact}>
          <S.DivForm>
            <S.NewContact type="text" placeholder='Nome do contato' value={name} onChange={(evento) => setName(evento.target.value)} />
            <S.NewContact type="number" placeholder='Número do contato' value={number} onChange={(evento) => setNumber(evento.target.value)} />
            <S.NewContact type="email" placeholder='E-mail do contato' value={email} onChange={(evento) => setEmail(evento.target.value)} />
            <S.ButtonSubmit type='submit'>Adicionar contato</S.ButtonSubmit>
          </S.DivForm>
        </form>
    )}
    </>
)}

export default FilterContact
