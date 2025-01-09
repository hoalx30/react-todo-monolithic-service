import { memo, useContext, useState } from 'react';
import NoteContext from './Context';

const NoteFilter = () => {
	console.log('Render Filter');

	const { actions } = useContext(NoteContext);
	const { onSearchNote } = actions;
	const [priorities, setPriorities] = useState([
		{ id: 1, value: 'Low' },
		{ id: 2, value: 'Medium' },
		{ id: 3, value: 'High' },
	]);
	const [status, setStatus] = useState([
		{ id: 1, value: 'Todo' },
		{ id: 2, value: 'Doing' },
		{ id: 3, value: 'Done' },
	]);
	const [textSearch, setTextSearch] = useState('');
	const [prioritiesSearch, setPrioritiesSearch] = useState(priorities.map((v) => v.value));
	const [statusSearch, setStatusSearch] = useState(status.map((v) => v.value));

	const handleSearch = () => onSearchNote(textSearch, prioritiesSearch, statusSearch);
	const handleReset = () => {
		setTextSearch('');
		setPrioritiesSearch(priorities.map((v) => v.value));
		setStatusSearch(status.map((v) => v.value));
	};
	return (
		<div>
			<br />
			<strong>Filter: </strong> <br />
			<i>Text: </i> <br />
			<input type="text" value={textSearch} onChange={(e) => setTextSearch(e.target.value)} /> <br />
			<i>Priorities: </i> <br />
			{priorities.map((priority) => (
				<div key={priority.id}>
					<input
						type="checkbox"
						value={priority.value}
						checked={prioritiesSearch.includes(priority.value)}
						onChange={(e) =>
							setPrioritiesSearch(e.target.checked ? [...prioritiesSearch, priority.value] : prioritiesSearch.filter((v) => v !== priority.value))
						}
					/>
					{priority.value}
				</div>
			))}
			<i>Status: </i> <br />
			{status.map((status) => (
				<div key={status.id}>
					<input
						type="checkbox"
						value={status.value}
						checked={statusSearch.includes(status.value)}
						onChange={(e) => setStatusSearch(e.target.checked ? [...statusSearch, status.value] : statusSearch.filter((v) => v !== status.value))}
					/>
					{status.value}
				</div>
			))}
			<input type="button" value="Search" onClick={handleSearch} />
			<input type="button" value="Reset" onClick={handleReset} />
		</div>
	);
};

export default memo(NoteFilter);
