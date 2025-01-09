import { Fragment, useReducer, useRef } from 'react';
import NoteCreate from './Create';
import NoteFilter from './Filter';
import NoteList from './List';
import NoteQuote from './Quote';
import { constants, initializer, reducer } from './reducer';

const Note = () => {
	const [latestNote, dispatch] = useReducer(reducer, undefined, initializer);
	const event = useRef({
		// @ts-ignore
		onCreateNode: (note) => dispatch({ type: constants.create, payload: note }),
		// @ts-ignore
		onDoNote: (id) => dispatch({ type: constants.do, payload: id }),
		// @ts-ignore
		onCancelNote: (id) => dispatch({ type: constants.cancel, payload: id }),
		// @ts-ignore
		onFinishNote: (id) => dispatch({ type: constants.finish, payload: id }),
		// @ts-ignore
		onDeleteNote: (id) => dispatch({ type: constants.remove, payload: id }),
		onSearchNote: (textSearch, prioritiesSearch, statusSearch) =>
			// @ts-ignore
			dispatch({ type: 'todo:search:note', payload: { textSearch, prioritiesSearch, statusSearch } }),
	});
	return (
		<Fragment>
			<NoteCreate event={event} />
			<NoteFilter event={event} />
			<NoteList data={latestNote} event={event} />
			<NoteQuote />
		</Fragment>
	);
};

export default Note;
