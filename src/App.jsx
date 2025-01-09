import './App.css';

import { Note, NoteProvider } from './pages/note';

function App() {
	return (
		<NoteProvider>
			<Note />
		</NoteProvider>
	);
}

export default App;
