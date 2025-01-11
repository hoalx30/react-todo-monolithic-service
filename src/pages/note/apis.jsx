import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apis = createApi({
	reducerPath: 'notes',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5173/api' }),
	tagTypes: ['notes'],

	endpoints: (builder) => ({
		findAll: builder.query({
			query: () => 'notes',
			providesTags: (result) =>
				result ? [...result.notes.map(({ id }) => ({ type: 'notes', id })), { type: 'notes', id: 'LIST' }] : [{ type: 'notes', id: 'LIST' }],
		}),
		save: builder.mutation({
			query: (data) => ({
				url: 'notes',
				method: 'POST',
				body: data,
			}),
			invalidatesTags: [{ type: 'notes', id: 'LIST' }],
		}),
		done: builder.mutation({
			query: (id) => ({
				url: `notes/${id}`,
				method: 'PATCH',
				body: { status: 'Doing' },
			}),
			invalidatesTags: [{ type: 'notes', id: 'LIST' }],
		}),
		finish: builder.mutation({
			query: (id) => ({
				url: `notes/${id}`,
				method: 'PATCH',
				body: { status: 'Done' },
			}),
			invalidatesTags: [{ type: 'notes', id: 'LIST' }],
		}),
		cancel: builder.mutation({
			query: (id) => ({
				url: `notes/${id}`,
				method: 'PATCH',
				body: { status: 'Cancel' },
			}),
			invalidatesTags: [{ type: 'notes', id: 'LIST' }],
		}),
		remove: builder.mutation({
			query: (id) => ({
				url: `notes/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: [{ type: 'notes', id: 'LIST' }],
		}),
	}),
});

export const { useFindAllQuery, useSaveMutation, useDoneMutation, useFinishMutation, useCancelMutation, useRemoveMutation } = apis;
