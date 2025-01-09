import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
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
			<NavLink to="/about" end>
				About
			</NavLink>
		</Fragment>
	);
};

export default Note;
