import { useState } from "react";
import './HeaderComponent.css';

const HeaderComponent = () => {

    const [name, setName] = useState('');

    
    const handleName = () => {
        const settedName = prompt('Digite o seu nome aqui');
        setName(settedName);
    }

    return(
        <>
            <header className="header-wrapper" onClick={handleName}>
                <h1>Seja bem vindo, {name}</h1>
            </header>
        </>
    );

}

export default HeaderComponent;