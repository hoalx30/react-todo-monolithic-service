import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router';
import { About } from './pages/about';
import { Note, NoteProvider } from './pages/note';

function App() {
	return (
		<NoteProvider>
			<BrowserRouter>
				<Routes>
					<Route index path="/note" element={<Note />} />
					<Route path="/about" element={<About />} />
				</Routes>
			</BrowserRouter>
		</NoteProvider>
	);
}

export default App;
