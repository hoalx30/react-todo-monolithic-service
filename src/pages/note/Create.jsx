import { nanoid } from 'nanoid';
import { memo, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { NoteSlice } from '.';
export { default as NoteSlice } from './slice';

const NoteCreate = () => {
	console.log('Render Create');
	/**
	const { dispatch } = useContext(NoteContext);
	*/
	const dispatch = useDispatch();

	const [value, setValue] = useState('');
	const [priority, setPriority] = useState('Low');
	const [status, setStatus] = useState('Todo');
	const valueRef = useRef();

	const handleCreateNote = () => {
		/**
		const { actions } = NoteStore;
		dispatch(actions.createNote({ id: nanoid(), value, priority, status, createdAt: Date.now() }));
		*/
		dispatch(NoteSlice.actions.create({ id: nanoid(), value, priority, status, createdAt: Date.now() }));
		setValue('');
		setPriority('Low');
		setStatus('Todo');
		// @ts-ignore
		valueRef.current.focus();
	};
	return (
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
	);
};

export default memo(NoteCreate);
