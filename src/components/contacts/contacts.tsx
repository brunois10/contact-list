import * as S from './styles'

const Contacts = () => {
    return (
        <S.Card>
            <S.Contact>Bruno</S.Contact>
            <S.Status>Amigo</S.Status>
            <S.Status>Salvo</S.Status>
            <S.Phone></S.Phone>
            <div>
                <S.EditButton >Editar</S.EditButton >
                <S.DeleteButton >Excluir</S.DeleteButton >
            </div>
        </S.Card>
        )
}

    

export default Contacts