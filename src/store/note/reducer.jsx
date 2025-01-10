// Do not need when use Redux Toolkit
import { combineReducers } from 'redux';
import { NoteSlice } from '../../pages/note';

console.log(NoteSlice);

const reducer = combineReducers({
	latestNote: NoteSlice.reducer,
});
export { reducer };
