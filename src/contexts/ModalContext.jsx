import { createContext, useState } from "react";
import PropTypes from 'prop-types';


export const ModalContext = createContext(
    {
        showModal: false,
        setShowModal: () => {},
        usuario: {},
        setUsuario: () => {},
    }
);

export const ModalProvider = ({children}) => {
    const [showModal, setShowModal] = useState(false);
    const [usuario, setUsuario] = useState();

    return(
        <ModalContext.Provider value={{showModal, setShowModal, usuario, setUsuario}}>
            {children}
        </ModalContext.Provider>
    );
}

ModalProvider.propTypes = {
    children: PropTypes.node,
}