import { Fragment } from 'react';
import NoteCreate from './Create';
import NoteFilter from './Filter';
import NoteList from './List';
import NoteQuote from './Quote';

const Note = () => {
	return (
		<Fragment>
			<NoteCreate />
			<NoteFilter />
			<NoteList />
			<NoteQuote />
		</Fragment>
	);
};

export default Note;
