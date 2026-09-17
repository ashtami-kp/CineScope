"use client";

import { useFavorite } from "@/hooks/useFavorite";
import { useSyncExternalStore } from "react";

export type Props = {
    movie: {
        id: number;
        title: string;
        year: string;
        rating: number;
        image: string;
    };
};

export default function FavoriteButton({ movie }: Props) {
    const mounted = useSyncExternalStore(
        () => () => {},
        () => true,
        () => false,
    );
    const { addFavorite, removeFavorite, isFavorite } = useFavorite();
    if (!mounted) {
        return null;
    }
    const favorite = isFavorite(movie.id);
    const handleClick = () => {
        if (favorite) {
            removeFavorite(movie.id);
        } else {
            addFavorite(movie);
        }
    };
    return (
        <button
            onClick={handleClick}
            className="mt-8 rounded-lg bg-blue-600 px-5 py-3 font-medium transition hover:bg-blue-700"
        >
            {favorite ? "❤️ Remove from favorites" : "🩶 Add to favorites"}
        </button>
    );
}
