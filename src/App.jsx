import './App.css';

import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router';
import mockServer from './mockServer';
import { About } from './pages/about';
import { Note } from './pages/note';
import { noteStore } from './store';

mockServer();

function App() {
	return (
		<Provider store={noteStore}>
			<BrowserRouter>
				<Routes>
					<Route index path="/" element={<Note />} />
					<Route path="/about" element={<About />} />
				</Routes>
			</BrowserRouter>
		</Provider>
	);
}

export default App;
