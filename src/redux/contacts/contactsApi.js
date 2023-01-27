import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      } else {
        headers.delete('authorization');
      }

      return headers;
    },
  }),
  tagTypes: ['contacts'],
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => ({
        url: '/contacts',
        method: 'get',
      }),
      providesTags: ['contacts'],
    }),

    addContact: builder.mutation({
      query: values => ({
        url: '/contacts',
        method: 'POST',
        body: values,
      }),
      invalidatesTags: ['contacts'],
    }),

    deleteContact: builder.mutation({
      query: id => ({
        url: `/contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['contacts'],
    }),

    updateContact: builder.mutation({
      query: contact => ({
        url: `/contacts/${contact.id}`,
        method: 'PATCH',
        body: {
          name: contact.name,
          number: contact.number,
        },
      }),
      invalidatesTags: ['contacts'],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
  useUpdateContactMutation,
} = contactsApi;
