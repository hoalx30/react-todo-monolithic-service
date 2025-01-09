import axios from 'axios';
import { useEffect, useState } from 'react';

const NodeQuote = () => {
	const [quote, setQuote] = useState('');
	useEffect(() => {
		axios.get('https://quotes-api-self.vercel.app/quote').then((data) => setQuote(data.data.quote));
	}, []);

	return <p>{quote}</p>;
};

export default NodeQuote;
