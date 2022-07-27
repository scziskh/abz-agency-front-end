import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const usersApi = createApi({
  reducerPath: 'calculatorApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://frontend-test-assignment-api.abz.agency' }),
  endpoints: build => ({
    getUsers: build.query({ query: () => '/api/v1/users' }),
  }),
});

export const { useGetUsersQuery } = usersApi;