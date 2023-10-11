import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Post {
  id: string;
  title: string;
  body: string;
}

interface User {
  id: string;
  name: string;
  email: string;
}

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.ir",
  }),
  endpoints(builder) {
    return {
      fetchPosts: builder.query<Post[], void>({
        query() {
          return `/posts`;
        },
      }),
      fetchUsers: builder.query<User[], void>({
        query() {
          return `/users`;
        },
      }),
    };
  },
});

export const { useFetchPostsQuery, useFetchUsersQuery } = apiSlice;
