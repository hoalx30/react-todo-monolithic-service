import React from "react";
import { useSelector } from "react-redux";
import { noteSelectors } from "../../features/note";
import NoteItem from "./Item";

const NoteList: React.FC = () => {
  console.log("Render List");

  const { latestNote, isLoading } = useSelector(noteSelectors.latestNote);
  return (
    <div>
      <br />
      <strong>List: </strong>
      {isLoading ? (
        <p>Loading...</p>
      ) : latestNote?.length === 0 ? (
        <p>No data available</p>
      ) : (
        latestNote?.map((note) => <NoteItem key={note.id} data={note} />)
      )}
    </div>
  );
};

export default NoteList;
