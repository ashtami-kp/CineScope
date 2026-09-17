"use client";
import { useFavorite } from "@/hooks/useFavorite";
import MovieCard from "../components/MovieCard";
import Link from "next/link";


export default function FavoritePage() {
    const { favorites } = useFavorite();
    return (
        <main className="min-h-screen bg-gray-950 px-6 py-10 text-white">
            <div className="mx-auto max-w-7xl">
                <Link className=" text-sm text-gray-400 hover:text-gray-300" href={`/movies`}>← Back to movies</Link>
                <h1 className="mt-7 mb-15 text-3xl font-bold">My Favorites</h1>
                {favorites.length === 0 ? (
                    <p className="mt-30 text-center text-gray-400">
                        No favorites
                    </p>
                ) : (
                    <div className="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                        {favorites.map((movie) => (
                            <MovieCard key={movie.id} movie={movie} />
                        ))}
                    </div>
                )}
            </div>
        </main>
    );
}
