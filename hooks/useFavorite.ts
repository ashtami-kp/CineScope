"use client";

import { favoriteMovie } from "@/types/tmdb";
import { useEffect, useState } from "react";

export function useFavorite() {
    const [favorites, setFavorites] = useState<favoriteMovie[]>(() => {
        if (typeof window === "undefined") {
            return [];
        }

        const savedFavorites = localStorage.getItem("favorites");
        return savedFavorites ? JSON.parse(savedFavorites) : [];
    });

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);
    const addFavorite = (movie: favoriteMovie) => {
        setFavorites((current) => {
            if (current.some((item) => item.id === movie.id)) {
                return current;
            }
            return [...current, movie];
        });
    };
    const removeFavorite = (id: number) => {
        setFavorites((current) => current.filter((movie) => movie.id !== id));
    };
    const isFavorite = (id: number) => {
        return favorites.some((movie) => movie.id === id);
    };
    return {
        favorites,
        addFavorite,
        removeFavorite,
        isFavorite,
    };
}
