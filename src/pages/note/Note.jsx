import { Fragment, useRef, useState } from 'react';
import NodeCreate from './Create';
import NodeFilter from './Filter';
import NoteList from './List';

const Note = () => {
	const [latestNote, setLatestNote] = useState(localStorage.getItem('latestNotes') ? JSON.parse(localStorage.getItem('latestNotes')) : []);
	const event = useRef({
		onCreateNode: (note) => {
			setLatestNote((pre) => {
				const latesNote = [...pre, note];
				localStorage.setItem('latestNotes', JSON.stringify(latesNote));
				return latesNote;
			});
		},
		onDoNote: (id) =>
			setLatestNote((pre) => {
				const latestNote = pre.map((note) => (note.id === id ? { ...note, status: 'Doing' } : note));
				localStorage.setItem('latestNotes', JSON.stringify(latestNote));
				return latestNote;
			}),
		onCancelNote: (id) =>
			setLatestNote((pre) => {
				const latestNote = pre.map((note) => (note.id === id ? { ...note, status: 'Cancel' } : note));
				localStorage.setItem('latestNotes', JSON.stringify(latestNote));
				return latestNote;
			}),
		onFinishNote: (id) =>
			setLatestNote((pre) => {
				const latestNote = pre.map((note) => (note.id === id ? { ...note, status: 'Done' } : note));
				localStorage.setItem('latestNotes', JSON.stringify(latestNote));
				return latestNote;
			}),
		onDeleteNote: (id) =>
			setLatestNote((pre) => {
				const latestNote = pre.filter((note) => note.id !== id);
				localStorage.setItem('latestNotes', JSON.stringify(latestNote));
				return latestNote;
			}),
		onSearchNote: (textSearch, prioritiesSearch, statusSearch) => {
			setLatestNote((pre) =>
				pre.filter(
					(note) =>
						note.value.toLowerCase().includes(textSearch.toLowerCase()) && prioritiesSearch.includes(note.priority) && statusSearch.includes(note.status),
				),
			);
		},
	});
	return (
		<Fragment>
			<NodeCreate event={event} />
			<NodeFilter event={event} />
			<NoteList data={latestNote} event={event} />
		</Fragment>
	);
};

export default Note;
