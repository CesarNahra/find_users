import { FormComponent } from './components/FormComponent/FormComponent';
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import UserListComponent from './components/UserListComponent/UserListComponent';
import { UserProvider } from './contexts/UserContext';

function App() {

  return (
    <>
      <UserProvider>
        <HeaderComponent/>
        <FormComponent/>
        <UserListComponent/>
      </UserProvider>
    </>
  )
}

export default App;
