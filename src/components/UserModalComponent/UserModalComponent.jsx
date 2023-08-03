import { useContext } from "react"
import { ModalContext } from "../../contexts/ModalContext";


export const UserModalComponent = () => {

    const { setShowModal, usuario, setUsuario } = useContext(ModalContext);

    const handleShowModal = () => {
        setShowModal(false);
        setUsuario(null);
    }

    const handleEditUser = () => {
        const editNick = prompt('Qual novo nome você quer?');
        if(editNick !== null) {
            setUsuario((prevUsuario) => ({...prevUsuario, nickname: editNick}))
        }
    }

    return(
        <div className="modal-wrapper">
            <div className="info-wrapper">
                <h2>{usuario.nickname}</h2>
                <p>{usuario.email}</p>
                <button type="button" onClick={handleShowModal}>Close</button>
                <button type="button" onClick={handleEditUser}>Update Data</button>
            </div>
        </div>
    );

}