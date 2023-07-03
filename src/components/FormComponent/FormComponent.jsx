import './FormComponent.css';
import { useContext, useRef, useState, useEffect } from 'react';
import { UserContext } from '../../contexts/UserContext';

export const FormComponent = () => {

    const [data, setData] = useState({
        nickname: '',
        age: '',
        email: '',
        password: '',
    });

    const [showPassword, setShowPassword] = useState(false);

    const inputRefPassword = useRef();

    const { setUser, userList, setUserList } = useContext(UserContext);

    useEffect(() => {
        inputRefPassword.current.type = inputRefPassword.current.type === 'password' ? 'text' : 'password'
    }, [showPassword])

    const handleInput = (e) => {
        const { value, name } = e.target;
        setData({...data, [name]: value});
    }

    const show = () => {
        setShowPassword(!showPassword);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser(data);
        setUserList([...userList, data]);
    }

    useEffect(() => {
        console.log(userList);
    }, [userList])

    return(
        <>
            <div className="form-wrapper">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="nickname">Nickname: </label>
                        <input type="text" name="nickname" id="nickname" placeholder="Digite o seu nickname" onChange={handleInput} required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="age">Age: </label>
                        <input type="number" name="age" id="age" placeholder="Digite a sua idade" onChange={handleInput} required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email: </label>
                        <input type="email" name="email" id="email" placeholder="Digite o seu email" onChange={handleInput} required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password: </label>
                        <input ref={inputRefPassword} type="password" name="password" id="password" placeholder="Crie a sua senha" onChange={handleInput} required/>
                    </div>
                    <button className='btn-submit' type="submit">Cadastrar</button>
                    <button className='btn-show-password' type='button' onClick={show}>
                        {showPassword ? 'Ocultar Senha' : 'Mostrar Senha'}
                    </button>
                </form>
            </div>
        </>
    );
}