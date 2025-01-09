import NoteItem from './Item';

const NoteList = ({ data, event }) => {
	console.log('Render List');

	return (
		<div>
			<br />
			<strong>List: </strong>
			{data?.length ? data.map((note, index) => <NoteItem key={index} data={note} event={event} />) : <p>No data available</p>}
		</div>
	);
};

export default NoteList;
