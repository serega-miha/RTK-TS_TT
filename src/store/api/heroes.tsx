
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL, API_KEY, BASE_OFFSET } from '../../constants';
import { IAllHeroes, IHero } from '../../interface';

export const heroesApi = createApi({
    reducerPath: 'heroesApi',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    tagTypes: ['Heroes'],
    endpoints: builder => ({
        getAllHeroes: builder.query<IAllHeroes, void>({
            query: () => `characters?limit=12&offset=${BASE_OFFSET}&apikey=${API_KEY}`,
            providesTags: ['Heroes']
        }),
        getHeroById: builder.query<IHero, number>({
            query: (id) => `characters/${id}?apikey=${API_KEY}`,
            providesTags: ['Heroes']
        }),

    })
});

export const { useGetAllHeroesQuery, useGetHeroByIdQuery } = heroesApi;