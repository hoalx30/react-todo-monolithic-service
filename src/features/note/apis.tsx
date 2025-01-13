import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { noteType } from "../../types";

export const apis = createApi({
  reducerPath: "notes",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5173/api" }),
  tagTypes: ["notes"],
  endpoints: (builder) => ({
    findAll: builder.query<noteType.Type[], void>({
      query: () => "notes",
      // prettier-ignore
      providesTags: (result) => result ?[...result.map(({ id }) => ({ type: 'notes', id }) as const), { type: 'notes', id: 'LIST' }] : [{ type: 'notes', id: 'LIST' }],
    }),
    save: builder.mutation<noteType.Type, Partial<noteType.Type>>({
      query: (data) => ({
        url: "notes",
        method: "POST",
        body: data,
      }),
      // Do not need invalidate tags cause using data from redux store
      // invalidatesTags: [{ type: "notes", id: "LIST" }],
    }),
    done: builder.mutation<noteType.Type, string>({
      query: (id) => ({
        url: `notes/${id}`,
        method: "PATCH",
        body: { status: "Doing" },
      }),
      // Do not need invalidate tags cause using data from redux store
      // invalidatesTags: [{ type: "notes", id: "LIST" }],
    }),
    finish: builder.mutation<noteType.Type, string>({
      query: (id) => ({
        url: `notes/${id}`,
        method: "PATCH",
        body: { status: "Done" },
      }),
      // Do not need invalidate tags cause using data from redux store
      // invalidatesTags: [{ type: "notes", id: "LIST" }],
    }),
    cancel: builder.mutation<noteType.Type, string>({
      query: (id) => ({
        url: `notes/${id}`,
        method: "PATCH",
        body: { status: "Cancel" },
      }),
      // Do not need invalidate tags cause using data from redux store
      // invalidatesTags: [{ type: "notes", id: "LIST" }],
    }),
    remove: builder.mutation<void, string>({
      query: (id) => ({
        url: `notes/${id}`,
        method: "DELETE",
      }),
      // Do not need invalidate tags cause using data from redux store
      // invalidatesTags: [{ type: "notes", id: "LIST" }],
    }),
  }),
});

export const {
  useFindAllQuery,
  useSaveMutation,
  useDoneMutation,
  useFinishMutation,
  useCancelMutation,
  useRemoveMutation,
} = apis;
