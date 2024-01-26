import * as S from './styles'

const FilterContact = () => {
    return (
        <>
        <div>
            <h1>Meus contatos</h1>
            <p>+</p>
            <p>add</p>
            <p>apagar</p>
            <S.Search placeholder='Pesquisar contato' />
            <S.Container>
            </S.Container>
        </div>
        </>
    )
}

export default FilterContact