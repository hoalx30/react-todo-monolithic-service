import { useMemo, useReducer } from 'react';
import { NoteContext } from './Context';
import { initializer, reducer } from './reducer';

const NoteProvider = ({ children }) => {
	const [latestNote, dispatch] = useReducer(reducer, undefined, initializer);
	const value = useMemo(() => ({ latestNote, dispatch }), [latestNote, dispatch]);
	return <NoteContext.Provider value={value}>{children}</NoteContext.Provider>;
};

export default NoteProvider;
