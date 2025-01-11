import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import NoteCreate from './Create';
import NoteFilter from './Filter';
import NoteList from './List';

const Note = () => {
	/**
	 import { useDispatch } from 'react-redux';
	 import actions from './actions';
	 const dispatch = useDispatch();
	 useEffect(() => {
		 // @ts-ignore
		 dispatch(actions.findAll());
	 }, [dispatch]);
	*/
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
