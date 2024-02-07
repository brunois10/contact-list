import * as S from './styles'

const FilterContact = () => {
    return (
        <>
        <S.Header>
            <S.Container>
            <S.Title>Meus contatos</S.Title>
            <S.Actions>
                <p>+</p>
                <p>Edit</p>
                <p>apagar</p>
            </S.Actions>
            </S.Container>
            <S.Search placeholder='Pesquisar contato' />
        </S.Header>
        </>
    )
}

export default FilterContact