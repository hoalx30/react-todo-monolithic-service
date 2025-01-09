import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { GlobalProvider } from './store/index.jsx';

createRoot(document.getElementById('root')).render(
	// <StrictMode></StrictMode>
	<GlobalProvider>
		<App />,
	</GlobalProvider>,
);
