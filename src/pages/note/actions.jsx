// Do not need when use React Toolkit Query
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const findAll = createAsyncThunk('note/findAll', async () => (await axios.get('http://localhost:5173/api/notes')).data.notes);
const save = createAsyncThunk('note/save', async (data) => (await axios.post('http://localhost:5173/api/notes', data)).data.notes);
const done = createAsyncThunk('note/do', async (id) => (await axios.patch(`http://localhost:5173/api/notes/${id}`, { status: 'Doing' })).data.notes);
const finish = createAsyncThunk('note/finish', async (id) => (await axios.patch(`http://localhost:5173/api/notes/${id}`, { status: 'Done' })).data.notes);
const cancel = createAsyncThunk('note/cancel', async (id) => (await axios.patch(`http://localhost:5173/api/notes/${id}`, { status: 'Cancel' })).data.notes);
const remove = createAsyncThunk('note/delete', async (id) => (await axios.delete(`http://localhost:5173/api/notes/${id}`)).data.notes);

export default { findAll, save, done, finish, cancel, remove };
