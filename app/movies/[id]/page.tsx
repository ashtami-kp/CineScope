import Link from "next/link";

import { getMovieDetails } from "@/_lib/tmdb";
import FavoriteButton from "@/app/components/FavoriteButton";

type Props = {
    params: Promise<{
        id: string;
        title: string;
    }>;
};

export default async function MovieDetails({ params }: Props) {
    const { id } = await params;
    const movie = await getMovieDetails(id);
    const movieId = Number(movie.id);
    if (!movie) {
        return (
            <main className="min-h-screen bg-gray-950 px-6 py-10 text-white">
                <h1 className="text-3xl font-bold">Movie not found !</h1>
            </main>
        );
    }

    return (
        <main
            className="min-h-screen 
        bg-gray-950 px-6 py-10 text-white"
        >
            <div className="mx-auto max-w-5xl">
                <Link
                    className=" text-sm text-gray-400 hover:text-gray-300"
                    href={`/movies`}
                >
                    ← Back to movies
                </Link>
                <div className="mt-8 grid gap-8 md:grid-cols-[300px_1fr]">
                    <img
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                        className="w-full rounded-xl"
                        width={100}
                        height={100}
                    />

                    <div>
                        <h1 className="text-4xl font-bold">{movie.title}</h1>
                        <p className="mt-3 text-gray-400">
                            {movie.release_date?.slice(0, 4)}
                        </p>
                        <p className="mt-2 text-lg">⭐ {movie.vote_average}</p>
                        <div className="mt-4 flex flex-wrap gap-2">
                            {movie.genres.map((genre) => (
                                <span
                                    key={genre.id}
                                    className="rounded-full bg-gray-800 px-3 py-1 text-sm text-gray-300"
                                >
                                    {genre.name}
                                </span>
                            ))}
                        </div>

                        <p className="mt-6 leading-7 text-gray-300">
                            {movie.overview}
                        </p>
                        <FavoriteButton
                            movie={{
                                id: movieId,
                                title: movie.title,
                                year: movie.release_date?.slice(0, 4) || "N/A",
                                rating: movie.vote_average,
                                image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
                            }}
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}
