import { useCancelMutation, useDoneMutation, useRemoveMutation } from './apis';

const NoteItem = ({ data }) => {
	console.log('Render Item');

	/**
	const { dispatch } = useContext(NoteContext);

	const dispatch = useDispatch();
	// @ts-ignore
	const handleDoNote = () => dispatch(actions.done(id));
	// @ts-ignore
	const handleFinishNote = () => dispatch(actions.finish(id));
	// @ts-ignore
	const handleCancelNote = () => dispatch(actions.cancel(id));
	// @ts-ignore
	const handleDeleteNote = () => dispatch(actions.remove(id));
	*/

	const [doneNote, { isLoading: isDo }] = useDoneMutation();
	const [finishNote, { isLoading: isFinish }] = useDoneMutation();
	const [cancelNote, { isLoading: isLoad }] = useCancelMutation();
	const [removeNote, { isLoading: isRemove }] = useRemoveMutation();

	const isLoading = isDo || isFinish || isLoad || isRemove;

	const { id, value, status, priority, createdAt } = data;
	// @ts-ignore
	const handleDoNote = async () => doneNote(id);
	// @ts-ignore
	const handleFinishNote = async () => finishNote(id);
	// @ts-ignore
	const handleCancelNote = async () => cancelNote(id);
	// @ts-ignore
	const handleDeleteNote = async () => removeNote(id);
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
			{isLoading && <td>Loading...</td>}
		</tr>
	);
};

export default NoteItem;
