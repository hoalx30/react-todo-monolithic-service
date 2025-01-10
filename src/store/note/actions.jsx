// Do not need when use Redux Toolkit
import { constants } from '../../pages/note';

const createNote = (payload) => ({ type: constants.create, payload });
const doNote = (payload) => ({ type: constants.do, payload });
const cancelNote = (payload) => ({ type: constants.cancel, payload });
const finishNote = (payload) => ({ type: constants.finish, payload });
const removeNote = (payload) => ({ type: constants.remove, payload });
const searchNote = (payload) => ({ type: constants.search, payload });

export default { cancelNote, createNote, doNote, finishNote, removeNote, searchNote };
