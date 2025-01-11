import { nanoid } from 'nanoid';
import { memo, useRef, useState } from 'react';
import { useSaveMutation } from './apis';

const NoteCreate = () => {
	console.log('Render Create');
	/**
	import { useDispatch } from 'react-redux';
	import actions from './actions';

	const { dispatch } = useContext(NoteContext);

	const dispatch = useDispatch();
	*/

	const [value, setValue] = useState('');
	const [priority, setPriority] = useState('Low');
	const [status, setStatus] = useState('Todo');
	const valueRef = useRef();

	const [saveNote, { isLoading }] = useSaveMutation();

	const handleCreateNote = async () => {
		/**
		const { actions } = NoteStore;
		dispatch(actions.createNote({ id: nanoid(), value, priority, status, createdAt: Date.now() }));
		
		dispatch(NoteSlice.actions.create({ id: nanoid(), value, priority, status, createdAt: Date.now() }));

		// @ts-ignore
		dispatch(actions.save({ id: nanoid(), value, priority, status, createdAt: Date.now() }));
		*/

		await saveNote({ id: nanoid(), value, priority, status, createdAt: Date.now() }).unwrap();
		setValue('');
		setPriority('Low');
		setStatus('Todo');
		// @ts-ignore
		valueRef.current.focus();
	};
	return (
		<div>
			<div>
				<br />
				<strong>Create:</strong> <br />
				<input ref={valueRef} type="text" value={value} onChange={(e) => setValue(e.target.value)} />
				<select value={priority} onChange={(e) => setPriority(e.target.value)}>
					<option value="Medium">Medium</option>
					<option value="High">High</option>
					<option value="Low">Low</option>
				</select>
				<input type="button" value="Add" onClick={handleCreateNote} />
			</div>
			<br />
			{isLoading && <p>Loading...</p>}
		</div>
	);
};

export default memo(NoteCreate);
