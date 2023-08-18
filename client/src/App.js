import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/layout/Layout';
import {
  HomePage,
  LoginPage,
  RegisterPage,
  CreatePostPage,
} from './Pages';
import { UserContextProvider } from './userContext';
import PostPage from './Pages/post/PostPage';
import EditPost from './Pages/edit post/EditPost';

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
          <Route
            path='/create'
            element={<CreatePostPage />}
          />
          <Route
            path='/post/:id'
            element={<PostPage />}
          />
          <Route
            path='/edit/:id'
            element={<EditPost />}
          />

        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
