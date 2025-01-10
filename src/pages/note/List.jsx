import { useSelector } from 'react-redux';
import { selector } from '../../store/note';
import NoteItem from './Item';

const NoteList = () => {
	console.log('Render List');

	/**
	const { latestNote } = useContext(NoteContext);
	*/
	const { isLoading, latestNote } = useSelector(selector.latestNotes);
	return (
		<div>
			<br />
			<strong>List: </strong>
			{isLoading ? <p>Loading...</p> : latestNote?.length === 0 ? <p>No data available</p> : latestNote.map((note) => <NoteItem key={note.id} data={note} />)}
		</div>
	);
};

export default NoteList;
