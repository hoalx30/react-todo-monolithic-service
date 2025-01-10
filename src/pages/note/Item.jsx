import { useDispatch } from 'react-redux';
import actions from './actions';

const NoteItem = ({ data }) => {
	console.log('Render Item');

	/**
	const { dispatch } = useContext(NoteContext);
	*/
	const dispatch = useDispatch();

	const { id, value, status, priority, createdAt } = data;
	// @ts-ignore
	const handleDoNote = () => dispatch(actions.done(id));
	// @ts-ignore
	const handleFinishNote = () => dispatch(actions.finish(id));
	// @ts-ignore
	const handleCancelNote = () => dispatch(actions.cancel(id));
	// @ts-ignore
	const handleDeleteNote = () => dispatch(actions.remove(id));
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
