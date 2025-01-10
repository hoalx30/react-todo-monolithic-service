/**
import constants from './constant';

const initialState = localStorage.getItem('latestNotes') ? JSON.parse(localStorage.getItem('latestNotes')) : [];

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case constants.create: {
			const latest = [...state, action.payload];
			localStorage.setItem('latestNotes', JSON.stringify(latest));
			return latest;
		}
		case constants.do: {
			const latest = state.map((note) => (note.id === action.payload ? { ...note, status: 'Doing' } : note));
			localStorage.setItem('latestNotes', JSON.stringify(latest));
			return latest;
		}
		case constants.cancel: {
			const latest = state.map((note) => (note.id === action.payload ? { ...note, status: 'Cancel' } : note));
			localStorage.setItem('latestNotes', JSON.stringify(latest));
			return latest;
		}
		case constants.finish: {
			const latest = state.map((note) => (note.id === action.payload ? { ...note, status: 'Done' } : note));
			localStorage.setItem('latestNotes', JSON.stringify(latest));
			return latest;
		}
		case constants.remove: {
			const latest = state.filter((note) => note.id !== action.payload);
			localStorage.setItem('latestNotes', JSON.stringify(latest));
			return latest;
		}
		case constants.search: {
			const latest = state.filter((note) => {
				const { textSearch, prioritiesSearch, statusSearch } = action.payload;
				return note.value.toLowerCase().includes(textSearch.toLowerCase()) && prioritiesSearch.includes(note.priority) && statusSearch.includes(note.status);
			});
			return latest;
		}
		default:
			return state;
	}
};
*/

import { createSlice } from '@reduxjs/toolkit';
import thunkAction from './actions';

const initialState = { isLoading: false, latestNote: [] };

const reducer = createSlice({
	initialState,
	name: 'note',
	reducers: {
		create: (state, action) => {
			const latest = [...state.latestNote, action.payload];
			localStorage.setItem('latestNotes', JSON.stringify(latest));
			return latest;
		},
		do: (state, action) => {
			const latest = state.latestNote.map((note) => (note.id === action.payload ? { ...note, status: 'Doing' } : note));
			localStorage.setItem('latestNotes', JSON.stringify(latest));
			return latest;
		},
		cancel: (state, action) => {
			const latest = state.latestNote.map((note) => (note.id === action.payload ? { ...note, status: 'Cancel' } : note));
			localStorage.setItem('latestNotes', JSON.stringify(latest));
			return latest;
		},
		finish: (state, action) => {
			const latest = state.latestNote.map((note) => (note.id === action.payload ? { ...note, status: 'Done' } : note));
			localStorage.setItem('latestNotes', JSON.stringify(latest));
			return latest;
		},
		delete: (state, action) => {
			const latest = state.latestNote.filter((note) => note.id !== action.payload);
			localStorage.setItem('latestNotes', JSON.stringify(latest));
			return latest;
		},
		search: (state, action) => {
			const latest = state.latestNote.filter((note) => {
				const { textSearch, prioritiesSearch, statusSearch } = action.payload;
				return note.value.toLowerCase().includes(textSearch.toLowerCase()) && prioritiesSearch.includes(note.priority) && statusSearch.includes(note.status);
			});
			return latest;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(thunkAction.findAll.pending, (state, action) => {
				state.isLoading = true;
			})
			.addCase(thunkAction.findAll.fulfilled, (state, action) => {
				state.isLoading = false;
				state.latestNote = action.payload;
			})
			.addCase(thunkAction.findAll.rejected, (state, action) => {
				state.isLoading = false;
			})
			.addCase(thunkAction.save.fulfilled, (state, action) => {
				state.isLoading = false;
				state.latestNote.push(action.payload);
			})
			.addCase(thunkAction.done.fulfilled, (state, action) => {
				state.isLoading = false;
				state.latestNote = state.latestNote.map((note) => (note.id === action.payload.id ? { ...note, status: 'Doing' } : note));
			})
			.addCase(thunkAction.finish.fulfilled, (state, action) => {
				state.isLoading = false;
				state.latestNote = state.latestNote.map((note) => (note.id === action.payload.id ? { ...note, status: 'Done' } : note));
			})
			.addCase(thunkAction.cancel.fulfilled, (state, action) => {
				state.isLoading = false;
				state.latestNote = state.latestNote.map((note) => (note.id === action.payload.id ? { ...note, status: 'Cancel' } : note));
			})
			.addCase(thunkAction.remove.fulfilled, (state, action) => {
				state.isLoading = false;
				state.latestNote = state.latestNote.filter((note) => note.id !== action.meta.arg);
			});
	},
});

export default reducer;
