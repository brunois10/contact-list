import { Container } from "./styles"
import Contacts from "../../components/contacts/contacts"
import { useSelector } from "react-redux"
import { RootReducer } from "../../store"
import React from "react"


const ContactList = () => {
  const { itens } = useSelector((state:  RootReducer) => state.contact)


    return (
        <Container>
          {itens.map((c) => (
              <Contacts
              id={c.id}
              name={c.name}
              number={c.number}
              email={c.email}
              />
              ))}
        </Container>
    )
}

export default ContactList
