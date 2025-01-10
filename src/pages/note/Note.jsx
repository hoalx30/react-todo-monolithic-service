import { Fragment, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import actions from './actions';
import NoteCreate from './Create';
import NoteFilter from './Filter';
import NoteList from './List';

const Note = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		// @ts-ignore
		dispatch(actions.findAll());
	}, [dispatch]);
	return (
		<Fragment>
			<NoteCreate />
			<NoteFilter />
			<NoteList />
			<NavLink to="/about" end>
				About
			</NavLink>
		</Fragment>
	);
};

export default Note;
