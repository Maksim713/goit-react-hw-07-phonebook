import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://632091ed9f82827dcf2fd3a0.mockapi.io/',
  }),
  tagTypes: 'Contacts',
  endpoints: builder => ({
    getAllContacts: builder.query({
      query: () => `contacts`,
      // providesTags: ['Contacts'],
      providesTags: result =>
        result
          ? result.map(({ id }) => ({ type: 'Contacts', id }))
          : ['Contacts'],
    }),
    addContactItem: builder.mutation({
      query: item => ({
        url: `contacts`,
        method: 'POST',
        body: item,
      }),
      invalidatesTags: ['Contacts'],
    }),
    deleteContactById: builder.mutation({
      query: contactId => ({
        url: `contacts/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const {
  useGetAllContactsQuery,
  useAddContactItemMutation,
  useDeleteContactByIdMutation,
} = contactsApi;
