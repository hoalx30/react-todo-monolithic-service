import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../store';

const NoteQuote = () => {
	console.log('Render Quote');

	const { globalConfig, actions } = useContext(GlobalContext);
	const { theme } = globalConfig;
	const { onToggleTheme } = actions;
	const [quote, setQuote] = useState('');
	useEffect(() => {
		axios.get('https://quotes-api-self.vercel.app/quote').then((data) => setQuote(data.data.quote));
	}, []);

	const handleToggleTheme = () => onToggleTheme();
	return (
		<div>
			<p>Theme: {theme ? 'dark' : 'light'}</p>
			<input type="button" value="Toggle Theme" onClick={handleToggleTheme} />
			<p>Quote: {quote}</p>
		</div>
	);
};

export default NoteQuote;
