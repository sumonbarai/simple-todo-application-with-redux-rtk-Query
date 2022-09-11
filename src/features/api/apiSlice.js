import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:9000",
    // baseUrl: "https://pacific-mountain-56378.herokuapp.com/",
  }),
  tagTypes: ["todos"],
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => `/todos`,
      providesTags: ["todos"],
    }),
    addTodo: builder.mutation({
      query: (data) => ({
        url: `/todos`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["todos"],
    }),
    EditColor: builder.mutation({
      query: ({ id, color }) => ({
        url: `/todos/${id}`,
        method: "PATCH",
        body: { color },
      }),
      invalidatesTags: ["todos"],
    }),
    EditInput: builder.mutation({
      query: ({ id, text }) => ({
        url: `/todos/${id}`,
        method: "PATCH",
        body: { text },
      }),
      invalidatesTags: ["todos"],
    }),

    completedTask: builder.mutation({
      query: ({ id, completed }) => ({
        url: `/todos/${id}`,
        method: "PATCH",
        body: { completed: !completed },
      }),
      invalidatesTags: ["todos"],
    }),
    deleteTodo: builder.mutation({
      query: (id) => ({
        url: `/todos/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["todos"],
    }),
  }),
});

export const {
  useGetTodosQuery,
  useAddTodoMutation,
  useEditColorMutation,
  useDeleteTodoMutation,
  useCompletedTaskMutation,
  useEditInputMutation,
} = apiSlice;
