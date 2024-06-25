import { api } from './index'

export const userApi = api.injectEndpoints({
  endpoints: (build) => ({
    getUsers: build.query({
      query: (params) => ({ 
        url: '/users', 
        params 
      }),
      providesTags:["User"]
    }),
    signIn: build.mutation({
      query: (body)=> ({
        url: "/auth/sign-in",
        method: "POST",
        body
      }),
      invalidatesTags: ["User"]
    }),
    registerUser: build.mutation({
      query: (body)=> ({
        url: "/auth/sign-up",
        method: "POST",
        body
      }),
      invalidatesTags: ["User"]
    }),
  }),
})

export const {
  useGetUsersQuery,
  useRegisterUserMutation,
  useSignInMutation
} = userApi