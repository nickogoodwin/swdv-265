import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {ICoin} from '../types';

export const coinApi = createApi({
  reducerPath: 'coinApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.coindesk.com/v1/bpi/currentprice.json',
  }),
  endpoints: builder => ({
    getCoin: builder.query<ICoin, string>({
      query: () => '',
    }),
  }),
});

export const {useGetCoinQuery} = coinApi;
