import { useSelector } from 'react-redux';
import { selector } from '../../store/note';
import NoteItem from './Item';

const NoteList = () => {
	console.log('Render List');

	/**
	const { latestNote } = useContext(NoteContext);
	*/
	const latestNote = useSelector(selector.latestNotes);

	return (
		<div>
			<br />
			<strong>List: </strong>
			{latestNote?.length ? latestNote.map((note) => <NoteItem key={note.id} data={note} />) : <p>No data available</p>}
		</div>
	);
};

export default NoteList;
