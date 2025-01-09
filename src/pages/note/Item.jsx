import { useContext } from 'react';
import NoteContext from './Context';

const NoteItem = ({ data }) => {
	console.log('Render Item');

	const { actions } = useContext(NoteContext);
	const { onDoNote, onFinishNote, onCancelNote, onDeleteNote } = actions;
	const { id, value, status, priority, createdAt } = data;
	const handleDoNote = () => onDoNote(id);
	const handleFinishNote = () => onFinishNote(id);
	const handleCancelNote = () => onCancelNote(id);
	const handleDeleteNote = () => onDeleteNote(id);
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
