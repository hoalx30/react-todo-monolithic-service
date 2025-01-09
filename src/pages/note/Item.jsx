import { useContext } from 'react';
import { constants, NoteContext } from './store';

const NoteItem = ({ data }) => {
	console.log('Render Item');

	const { dispatch } = useContext(NoteContext);
	const { id, value, status, priority, createdAt } = data;
	const handleDoNote = () => dispatch({ type: constants.do, payload: { id } });
	const handleFinishNote = () => dispatch({ type: constants.finish, payload: { id } });
	const handleCancelNote = () => dispatch({ type: constants.cancel, payload: { id } });
	const handleDeleteNote = () => dispatch({ type: constants.remove, payload: { id } });
	return (
		<tr>
			<td style={{ width: '20%' }}>{id}</td>
			<td style={{ width: '10%' }}>{value}</td>
			<td style={{ width: '10%' }}>{status}</td>
			<td style={{ width: '10%' }}>{priority}</td>
			<td style={{ width: '20%' }}>{new Date(createdAt).toLocaleString()}</td>
			<td style={{ width: '30%' }}>
				<input type="button" value="Do" onClick={handleDoNote} />
				<input type="button" value="Finish" onClick={handleFinishNote} />
				<input type="button" value="Cancel" onClick={handleCancelNote} />
				<input type="button" value="Remove" onClick={handleDeleteNote} />
			</td>
		</tr>
	);
};

export default NoteItem;
