import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Contact from "../../models/Contact";

type ContactState = {
    itens: Contact[];
    filteredItens: Contact[];
};

const initialState: ContactState = {
    itens: [
        {
            id: 1,
            name: 'Bruno Guimarães',
            number: '21987670200',
            email: 'brunogdepaula@hotmail.com'
        },
        {
            id: 2,
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
    ],
    filteredItens: []
};

const contactSlice = createSlice({
    name: 'contact',
    initialState,
    reducers: {
        remove: (state, action: PayloadAction<number>) => {
            state.itens = state.itens.filter((contact) => contact.id !== action.payload);
            state.filteredItens = state.filteredItens.filter((contact) => contact.id !== action.payload);
        },
        edit: (state, action: PayloadAction<Contact>) => {
            const index = state.itens.findIndex((c) => c.id === action.payload.id);
            if (index >= 0) {
                state.itens[index] = action.payload;
                // Atualizar o item correspondente na lista filtrada, se necessário
                const filteredIndex = state.filteredItens.findIndex((c) => c.id === action.payload.id);
                if (filteredIndex >= 0) {
                    state.filteredItens[filteredIndex] = action.payload;
                }
            }
        },
        add: (state, action: PayloadAction<Omit<Contact, 'id'>>) => {
            const contactExists = state.itens.find(
                (contact) =>
                    contact.name.toLowerCase() === action.payload.name.toLowerCase()
            );

            if (contactExists) {
                alert('Já existe um contato com esse nome');
            } else {
                const lastContact = state.itens[state.itens.length - 1];
                const newContact = {
                    ...action.payload,
                    id: lastContact ? lastContact.id + 1 : 1
                };
                state.itens.push(newContact);
                state.filteredItens.push(newContact); // Adicionar à lista filtrada também
            }
        },
        filterList: (state, action: PayloadAction<string>) => {
            const searchTerm = action.payload.trim().toLowerCase();
            if (searchTerm === '') {
                // Se o termo de pesquisa estiver vazio, restaurar a lista original
                state.filteredItens = state.itens.slice();
            } else {
                state.filteredItens = state.itens.filter((contact) =>
                    contact.name.toLowerCase().includes(searchTerm)
                );
            }
        },
    }
});

export const { remove, edit, add, filterList } = contactSlice.actions;
export default contactSlice.reducer;
