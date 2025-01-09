import { createContext } from 'react';

const NoteContext = createContext({ latestNote: [], actions: {} });

export default NoteContext;
