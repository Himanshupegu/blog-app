import { Route, Routes } from 'react-router-dom';
import './App.scss';
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
        <Route
          path='/'
          element={<Layout />}>
          <Route
            path={'/login'}
            element={<LoginPage />}
          />
          <Route
            path='/regisster'
            element={<RegisterPage />}
          />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
