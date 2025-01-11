/**
import { composeWithDevTools } from '@redux-devtools/extension';
import { createStore } from 'redux';
import { reducer } from './reducer';
 
const noteStore = createStore(reducer, composeWithDevTools());
 */

import { configureStore } from '@reduxjs/toolkit';
import { NoteApis, NoteSlice } from '../../pages/note';

const noteStore = configureStore({
	reducer: { latestNote: NoteSlice.reducer, [NoteApis.reducerPath]: NoteApis.reducer },
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(NoteApis.middleware),
});

export default noteStore;
