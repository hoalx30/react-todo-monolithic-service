import { combineReducers } from 'redux';
import { NoteSlice } from '../../pages/note';

const reducer = combineReducers({
	latestNote: NoteSlice.reducer,
});
export { reducer };
