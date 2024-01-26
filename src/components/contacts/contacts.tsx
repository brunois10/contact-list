import * as S from './styles'

const Contacts = () => {
    return (
        <S.Card>
            <S.Contact>Bruno Guimarães de Paula</S.Contact>
            <S.Status>Favoritos</S.Status>
            <S.Phone>(21)987670200</S.Phone>
            <S.Phone>brunogdepaula@hotmail.com</S.Phone>
            <div>
                <S.EditButton >Editar</S.EditButton >
                <S.DeleteButton >Excluir</S.DeleteButton >
            </div>
        </S.Card>
        )
}

    

export default Contacts