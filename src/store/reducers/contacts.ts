import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Contact from "../../models/Contact";

type ContactState = {
    itens: Contact[]
}

const initialState: ContactState = {
    itens: [
        {
            id: 1,
            name: 'Bruno Guimarães de Paula',
            number: '21987670200',
            email: 'brunogdepaula@hotmail.com'
        },
        {   id: 2,
            name: 'Fulano da Rocha',
            number: '21969740606',
            email: 'fumirandarocha@hotmail.com'
        },
        {
            id: 3,
            name: 'Kadu Fernandes',
            number: '21976429988',
            email: 'fernandeskaka@hotmail.com'
        },
        {
            id: 4,
            name: 'Lucas Rodrigues',
            number: '21978321264',
            email: 'lukinhadrigues@hotmail.com'
        }
    ]
}


const contactSlice = createSlice({
    name: 'contact',
    initialState,
    reducers: {
        remove: (state, action: PayloadAction<number>) => {
            state.itens = [
            ...state.itens.filter((contact) => contact.id !== action.payload)
            ]
        },
        edit: (state, action: PayloadAction<Contact>) => {
            const indexContact = state.itens.findIndex(
            (c) => c.id === action.payload.id
            )
            if (indexContact >= 0) {
            state.itens[indexContact] = action.payload
            }
        },
        add: (state, action: PayloadAction<Omit<Contact, 'id'>>) => {
            const ContactExists = state.itens.find(
            (contact) =>
                contact.name.toLowerCase() === action.payload.name.toLowerCase()
            )

            if (ContactExists) {
            alert('Já existe um contato com esse nome')
            } else {
            const lastContact = state.itens[state.itens.length - 1]

            const newContact = {
                ...action.payload,
                id: lastContact ? lastContact.id + 1 : 1}
            state.itens.push(newContact)
            }
        }
    }
})



export default contactSlice
