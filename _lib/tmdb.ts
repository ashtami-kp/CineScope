import type { TMDBMovieDetails, TMDBResponse } from "@/types/tmdb";
import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";

const tmdb = axios.create({
    baseURL: BASE_URL,
    headers: {
        Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}`,
        accept: "application/json",
    },
});

export async function getPopularMovies(): Promise<TMDBResponse> {
    for (let attempt = 1; attempt <= 3; attempt++) {
        try {
            const response = await tmdb.get<TMDBResponse>(`/movie/popular`, {
                params: {
                    language: "en-US",
                    page: 1,
                },
            });
            return response.data;
        } catch (error) {
            console.log(`TMDB attempt ${attempt} failed`);
            if (attempt === 3) {
                throw error;
            }
        }
    }
    throw new Error("Failed to fetch movies!");
}

export async function getMovieDetails(id: string): Promise<TMDBMovieDetails> {
    try {
        const response = await tmdb.get<TMDBMovieDetails>(`/movie/${id}`, {
            params: {
                language: "en-US",
            },
        });
        return response.data;
    } catch (error) {
        throw new Error("Dailed to fetch movie details!");
        console.log(error);
    }
}

export async function searchMovies(query: string): Promise<TMDBResponse> {
    try {
        const response = await tmdb.get(`/search/movie`, {
            params: {
                query: query,
                language: "en-US",
                page: 1,
            },
        });
        return response.data;
    } catch (error) {
        throw new Error("Failed to search movies");
        console.log(error);
    }
}
