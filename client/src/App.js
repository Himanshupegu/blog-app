import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/layout/Layout';
import { HomePage, LoginPage, RegisterPage } from './Pages';
import { UserContextProvider } from './userContext';

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route
          path='/'
          element={<Layout />}>
          <Route
            index
            element={<HomePage />}
          />
          <Route
            path={'/login'}
            element={<LoginPage />}
          />
          <Route
            path='/register'
            element={<RegisterPage />}
          />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
