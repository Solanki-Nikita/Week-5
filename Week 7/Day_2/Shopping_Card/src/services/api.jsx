import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

/*
  createApi = Redux Toolkit ka built-in API manager
  fetchBaseQuery = base URL + fetch wrapper
*/

export const api = createApi({
  reducerPath: "api", // store me name

  baseQuery: fetchBaseQuery({
    baseUrl: "https://fakestoreapi.com", // API base URL
  }),

  tagTypes: ["Products", "Cart"], // caching tags

  endpoints: (builder) => ({
    // GET products
    getProducts: builder.query({
      query: () => "/products",
      providesTags: ["Products"],
    }),

    // ADD product (example)
    addProduct: builder.mutation({
      query: (newProduct) => ({
        url: "/products",
        method: "POST",
        body: newProduct,
      }),
      invalidatesTags: ["Products"],
    }),

    // DELETE product
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/products/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Products"],
    }),
  }),
});

// Auto-generated hooks
export const {
  useGetProductsQuery,
  useAddProductMutation,
  useDeleteProductMutation,
} = api;