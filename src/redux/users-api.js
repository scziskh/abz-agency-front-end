import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://frontend-test-assignment-api.abz.agency/api/v1/',
  }),
  endpoints: build => ({
    getUsers: build.query({
      query: ({ count, page }) => `users?count=${count}&page=${page}`,
    }),
    getPositions: build.query({
      query: () => `positions`,
    }),
    getToken: build.query({
      query: () => 'token',
    }),
  }),
});

export const { useGetUsersQuery, useGetPositionsQuery, useGetTokenQuery } =
  usersApi;
