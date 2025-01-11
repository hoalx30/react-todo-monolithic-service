import NoteItem from './Item';
import { useFindAllQuery } from './apis';

const NoteList = () => {
	console.log('Render List');

	/**
	const { latestNote } = useContext(NoteContext);

	const { isLoading, latestNote } = useSelector(selector.latestNotes);
	*/
	const { isLoading, data } = useFindAllQuery();
	const latestNote = data?.notes;
	return (
		<div>
			<br />
			<strong>List: </strong>
			{isLoading ? <p>Loading...</p> : latestNote?.length === 0 ? <p>No data available</p> : latestNote.map((note) => <NoteItem key={note.id} data={note} />)}
		</div>
	);
};

export default NoteList;
