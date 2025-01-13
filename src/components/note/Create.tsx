import { nanoid } from "@reduxjs/toolkit";
import { memo, useState } from "react";
import { useDispatch } from "react-redux";
import { noteSlices } from "../../features/note";
import { useSaveMutation } from "../../features/note/apis";
import { noteType, priorityType, statusType } from "../../types";

const NoteCreate: React.FC = () => {
  console.log("Render Note Create");

  const [saveNote, { isLoading }] = useSaveMutation();
  const dispatch = useDispatch();

  const [value, setValue] = useState("");
  const [priority, setPriority] = useState<priorityType.Value>("Medium");
  const [status, setStatus] = useState<statusType.Value>("Todo");
  const handleAddNote = async () => {
    const note: noteType.Type = {
      id: nanoid(),
      value,
      priority,
      status,
      createdAt: new Date().toLocaleString(),
    };
    await saveNote(note).unwrap();
    setValue("");
    setPriority("Low");
    setStatus("Todo");
    dispatch(noteSlices.actions.create(note));
  };
  return (
    <div>
      <br />
      <strong>Create:</strong> <br />
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value as priorityType.Value)}
      >
        <option value="Medium">Medium</option>
        <option value="High">High</option>
        <option value="Low">Low</option>
      </select>
      <input type="button" value="Add" onClick={handleAddNote} />
      <br />
      {isLoading ? <div>Loading...</div> : null}
    </div>
  );
};

export default memo(NoteCreate);
