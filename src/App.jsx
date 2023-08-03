import { FormComponent } from './components/FormComponent/FormComponent';
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import UserListComponent from './components/UserListComponent/UserListComponent';
import { ModalProvider } from './contexts/ModalContext';
import { UserProvider } from './contexts/UserContext';

function App() {

  return (
    <>
      <ModalProvider>
        <UserProvider>
          <HeaderComponent />
          <FormComponent />
          <UserListComponent />
        </UserProvider>
      </ModalProvider>
    </>
  )
}

export default App;
