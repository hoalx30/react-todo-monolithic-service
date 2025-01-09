import { useMemo, useReducer } from 'react';
import NoteContext from './Context';
import { constants, initializer, reducer } from './reducer';

const NoteProvider = ({ children }) => {
	const [latestNote, dispatch] = useReducer(reducer, undefined, initializer);
	const actions = {
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
			dispatch({ type: constants.search, payload: { textSearch, prioritiesSearch, statusSearch } }),
	};
	const value = useMemo(() => ({ latestNote, actions }), [latestNote]);
	return <NoteContext.Provider value={value}>{children}</NoteContext.Provider>;
};

export default NoteProvider;
