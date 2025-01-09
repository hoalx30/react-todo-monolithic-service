import { useMemo, useReducer } from 'react';
import { GlobalContext } from './Context';
import { constants, initializer, reducer } from './reducer';

const NoteProvider = ({ children }) => {
	const [globalConfig, dispatch] = useReducer(reducer, undefined, initializer);
	const actions = useMemo(
		() => ({
			// @ts-ignore
			onToggleTheme: () => dispatch({ type: constants.toggleTheme, payload: undefined }),
		}),
		[],
	);
	const value = useMemo(() => ({ globalConfig, actions }), [globalConfig, actions]);
	return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>;
};

export default NoteProvider;
