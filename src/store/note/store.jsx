import { composeWithDevTools } from '@redux-devtools/extension';
import { createStore } from 'redux';
import { reducer } from './reducer';

const noteStore = createStore(reducer, composeWithDevTools());

export default noteStore;
