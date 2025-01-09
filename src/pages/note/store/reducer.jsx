const initializer = () => (localStorage.getItem('latestNotes') ? JSON.parse(localStorage.getItem('latestNotes')) : []);
const constants = {
	create: 'todo:create:note',
	do: 'todo:do:note',
	cancel: 'todo:cancel:note',
	finish: 'todo:finish:note',
	remove: 'todo:remove:note',
	search: 'todo:search:note',
};
const reducer = (state, action) => {
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

export { constants, initializer, reducer };
