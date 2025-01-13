import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { noteType, priorityType, statusType } from "../../types";

interface NoteState {
  isLoading: boolean;
  latestNote: noteType.Type[];
}

const initialState: NoteState = {
  isLoading: false,
  latestNote: JSON.parse(localStorage.getItem("latestNotes") ?? "[]"),
};

const reducer = createSlice({
  initialState,
  name: "notes",
  reducers: {
    create: (state, action: PayloadAction<noteType.Type>) => {
      const latest = [...state.latestNote, action.payload];
      localStorage.setItem("latestNotes", JSON.stringify(latest));
      state.latestNote = latest;
    },
    do: (state, action: PayloadAction<string>) => {
      const latest = state.latestNote.map((note) =>
        note.id === action.payload
          ? { ...note, status: "Doing" as statusType.Value }
          : note
      );
      localStorage.setItem("latestNotes", JSON.stringify(latest));
      state.latestNote = latest;
    },
    cancel: (state, action: PayloadAction<string>) => {
      const latest = state.latestNote.map((note) =>
        note.id === action.payload
          ? { ...note, status: "Cancel" as statusType.Value }
          : note
      );
      localStorage.setItem("latestNotes", JSON.stringify(latest));
      state.latestNote = latest;
    },
    finish: (state, action: PayloadAction<string>) => {
      const latest = state.latestNote.map((note) =>
        note.id === action.payload
          ? { ...note, status: "Done" as statusType.Value }
          : note
      );
      localStorage.setItem("latestNotes", JSON.stringify(latest));
      state.latestNote = latest;
    },
    delete: (state, action: PayloadAction<string>) => {
      const latest = state.latestNote.filter(
        (note) => note.id !== action.payload
      );
      localStorage.setItem("latestNotes", JSON.stringify(latest));
      state.latestNote = latest;
    },
    search: (
      state,
      action: PayloadAction<{
        textSearch: string;
        prioritiesSearch: priorityType.Value[];
        statusSearch: statusType.Value[];
      }>
    ) => {
      const { textSearch, prioritiesSearch, statusSearch } = action.payload;
      const latest = state.latestNote.filter(
        (note) =>
          note.value.toLowerCase().includes(textSearch.toLowerCase()) &&
          prioritiesSearch.includes(note.priority) &&
          statusSearch.includes(note.status)
      );
      return { ...state, latestNote: latest };
    },
  },
});

export default reducer;
