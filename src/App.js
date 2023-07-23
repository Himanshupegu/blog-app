import Post from './components/Post';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import './App.css';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';

function App() {
	return (
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
					element={<div><LoginPage/></div>}
				/>
			</Route>
		</Routes>
	);
}

export default App;
