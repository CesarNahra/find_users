import { useContext, useState } from "react";
import './UserListComponent.css';
import { UserContext } from "../../contexts/UserContext";
import { LikeBtnComponent } from "../LikeBtnComponent/LikeBtnComponent";
import { ModalContext } from "../../contexts/ModalContext";
import { UserModalComponent } from "../UserModalComponent/UserModalComponent";

const UserListComponent = () => {

    const { userList } = useContext(UserContext);
    const { showModal, setShowModal, setUsuario } = useContext(ModalContext);


    const handleShowModal = (usuario) => {
        setUsuario(usuario);
        setShowModal(true)
    }

    return(
        <>
            <form>
                <input type="text" name="search" id="search"  placeholder="Pesquise aqui" list="usuarios"/>
                <datalist id="usuarios">
                    {userList.map(usuario => {
                        return(
                            <option key={usuario.id} value={usuario.nickname}>{usuario.email}</option>
                        )
                    })}
                </datalist>
            </form>
            <ul>
                {userList.map(usuario => {
                    return(
                        <li key={usuario.id}>{usuario.nickname} - {usuario.age}<button className="btn-update-data" type="button" onClick={() => handleShowModal(usuario)}>Atualizar dados</button><LikeBtnComponent/></li>
                    );
                })}
                {showModal && <UserModalComponent/>}
            </ul>
        </>
    );

}

export default UserListComponent;