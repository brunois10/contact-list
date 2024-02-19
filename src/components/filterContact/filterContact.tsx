import * as S from './styles'

const FilterContact = () => {
    return (
        <>
        <S.Header>
            <S.Container>
            <S.Title>Meus contatos</S.Title>
            <S.Actions>
                <img src="src/img/add.png" alt="" />
                <img src="src/img/pencil.png" alt="" />
                <img src="src/img/trash.png" alt="" />
            </S.Actions>
            </S.Container>
            <S.Search placeholder='Pesquisar contato' />
        </S.Header>
        </>
    )
}

export default FilterContact