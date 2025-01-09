import { useContext } from 'react';
import NoteContext from './Context';
import NoteItem from './Item';

const NoteList = () => {
	console.log('Render List');

	const { latestNote } = useContext(NoteContext);
	return (
		<div>
			<br />
			<strong>List: </strong>
			{latestNote?.length ? latestNote.map((note) => <NoteItem key={note.id} data={note} />) : <p>No data available</p>}
		</div>
	);
};

export default NoteList;
