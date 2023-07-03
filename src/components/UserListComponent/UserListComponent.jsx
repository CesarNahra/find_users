import { useContext, useEffect, useState } from "react";
import './UserListComponent.css';
import { UserContext } from "../../contexts/UserContext";

const UserListComponent = () => {

    const usuarios = [
        {
            id: 1,
            name: 'rafinha123',
            age: 20,
        },
        {
            id: 2,
            name: 'jaozindopagodi',
            age: 30,
        },
        {
            id: 3,
            name: 'jonhgoleirodointer',
            age: 28,
        },
        {
            id: 4,
            name: 'amebadeouro',
            age: 32,
        }
    ];

    const { user, setUser, userList, setUserList } = useContext(UserContext);

    const [filteredList, setFilteredList] = useState(usuarios);
    const [search, setSearch] = useState('');

    useEffect(() => {
        if(search.length > 2) {
            setFilteredList(usuarios.filter(usuario => usuario.includes(search)));
        }
    }, [search])

    const handleSearch = (e) => {
        e.preventDefault();
        const { value } = e.target;
        setSearch(value);
    }

    return(
        <>
            <form>
                <input type="text" name="search" id="search"  placeholder="Pesquise aqui" onChange={handleSearch}/>
            </form>
            <ul>
                {filteredList.map(usuario => {
                    return(
                        <li key={usuario.id}>{usuario.name} - {usuario.age}<button className="btn-update-data">Atualizar dados</button></li>
                    );
                })}
            </ul>
        </>
    );

}

export default UserListComponent;