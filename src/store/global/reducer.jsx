const initializer = () => ({ theme: true });
const constants = {
	toggleTheme: 'global:toggle:theme',
};
const reducer = (state, action) => {
	switch (action.type) {
		case constants.toggleTheme: {
			return { ...state, theme: !state.theme };
		}
		default:
			return state;
	}
};

export { constants, initializer, reducer };
