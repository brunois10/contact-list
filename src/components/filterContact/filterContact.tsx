import React, { FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { add, filterList } from '../../store/reducers/contacts';
import * as S from './styles';

const FilterContact = () => {
    const dispatch = useDispatch();

    const [formVisible, setFormVisible] = useState(false);
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    const handleAddContact = () => {
        setFormVisible(true);
    };

    const registerContact = (event: FormEvent) => {
        event.preventDefault();

        dispatch(
            add({
                name,
                number,
                email
            })
        );

        // Limpa os campos do formulário e esconde o formulário após adicionar o contato
        setName('');
        setNumber('');
        setEmail('');
        setFormVisible(false);
    };

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setSearchTerm(value);
        dispatch(filterList(value));
    };

    return (
        <>
            <S.Header>
                <S.Container>
                    <S.Title>Meus contatos</S.Title>
                    <S.Actions>
                        <img src="src/img/add.png" alt="" onClick={handleAddContact} />
                    </S.Actions>
                </S.Container>
                <S.Search
                    type="text"
                    placeholder="Pesquisar contato"
                    value={searchTerm}
                    onChange={handleSearch}
                />
            </S.Header>
            {formVisible && (
                <form onSubmit={registerContact}>
                    <S.DivForm>
                        <S.NewContact
                            type="text"
                            placeholder="Nome do contato"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                        />
                        <S.NewContact
                            type="number"
                            placeholder="Número do contato"
                            value={number}
                            onChange={(event) => setNumber(event.target.value)}
                        />
                        <S.NewContact
                            type="email"
                            placeholder="E-mail do contato"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                        <S.ButtonSubmit type="submit">Adicionar contato</S.ButtonSubmit>
                    </S.DivForm>
                </form>
            )}
        </>
    );
};

export default FilterContact;
