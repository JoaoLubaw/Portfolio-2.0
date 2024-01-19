import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api-joaolubawaski.fly.dev/api/",
  }),
  endpoints: (builder) => ({
    getProjects: builder.query<Projects, void>({
      query: () => "project",
    }),
  }),
});

export const { useGetProjectsQuery } = api;

export default api;
