import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IApiResponse } from './api.type';

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://virtserver.swaggerhub.com/hqms/FDN-WP/0.1',
});

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery,
  endpoints: builder => ({
    getData: builder.query<IApiResponse, void>({
      query: () => '/wp',
    }),
  }),
});

export const { useGetDataQuery } = apiSlice;
export const { resetApiState } = apiSlice.util;
export const { getData } = apiSlice.endpoints;
