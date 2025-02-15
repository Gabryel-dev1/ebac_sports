import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Produto } from '../App'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app'
  }),
  endpoints: (builder) => ({
    getP: builder.query<Produto[], void>({
      query: () => '/api/ebac_sports'
    })
  })
})

export const { useGetPQuery } = api

export default api
