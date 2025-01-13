import { FC, Fragment } from "react";
import NoteCreate from "./Create";
import NoteFilter from "./Filter";
import NoteList from "./List";

const Note: FC = () => {
  return (
    <Fragment>
      <NoteCreate />
      <NoteFilter />
      <NoteList />
    </Fragment>
  );
};

export default Note;
