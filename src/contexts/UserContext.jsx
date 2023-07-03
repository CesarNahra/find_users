import { createContext, useState } from 'react';

export const UserContext = createContext({
    user: {
      nickname: '',
      age: '',
      email: '',
      password: '',  
    },
    setUser: () => {},
    userList: [],
    setUserList: () => {}, 
});

export const UserProvider = ({children}) => {
    const [user, setUser] = useState({
        nickname: '',
        age: '',
        email: '',
        password: '',
    });

    const [userList, setUserList] = useState([...[], user]);

    return(
        <UserContext.Provider value={{user, setUser, userList, setUserList}}>
            {children}
        </UserContext.Provider>
    )
}