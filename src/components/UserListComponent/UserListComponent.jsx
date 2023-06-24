import { useState } from "react";
import './UserListComponent.css';

const UserListComponent = () => {

    const [users, setUsers] = useState(['Matias', 'João', 'Rafael', 'José']);

    const [nickname, setNickname] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const userData = {
        
    }

    const handleAdd = (e) => {
        const addUser = users.push(userData);
        e.preventDefault();
        setUsers(addUser);
    }

    return(
        <div className="form-wrapper">
            <form>
                <input type="text" name="nickname" id="nickname" placeholder="Digite o seu nome de usuário"/>
                <input type="number" name="age" id="age" placeholder="Digite a sua idade"/>
                <input type="email" name="email" id="email" placeholder="Digite o seu email"/>
                <input type="password" name="password" id="password" placeholder="Digite a sua senha"/>
            </form>
            <button type='submit' onClick={handleAdd}>Adicionar usuário</button>
            {users.map((user) => (
                <li key={user.id}>{user.name}</li>
            ))}
        </div>
    );

}

export default UserListComponent;