import { GlobalContext, GlobalProvider } from './global';
import { actions, noteStore } from './note';

const NoteStore = { noteStore, actions };
export { GlobalContext, GlobalProvider, NoteStore };
