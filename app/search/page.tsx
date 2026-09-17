import { searchMovies } from "@/_lib/tmdb";
import MovieCard from "@/app/components/MovieCard";
import SearchMovies from "./SeacrhMovies";

type Props = {
    searchParams: Promise<{ query?: string }>;
};

export default async function SearchPage({ searchParams }: Props) {
    const { query } = await searchParams;
    const data = query ? await searchMovies(query) : null;
    const hasResults = data && data.results.length > 0;

    return (
        <main className="min-h-screen bg-gray-950 px-6 py-10 text-white">
            <div className="mx-auto max-w-7xl ">
                <h1 className="text-3xl font-bold">Search Movies</h1>
                <form className="mt-6 flex gap-3">
                    <SearchMovies />
                    <button
                        type="submit"
                        className="rounded-lg bg-blue-600 px-5 py-3 font-medium hover:bg-blue-700"
                    >
                        Search
                    </button>
                </form>
                {query && (
                    <p className="mt-8 text-gray-400">
                        Search results for :{" "}
                        <span className="text-white">{query}</span>
                    </p>
                )}

                {data && !hasResults && (
                    <p className="mt-10 text-center text-gray-400">
                        No movies found.
                    </p>
                )}
                {data && (
                    <div className="mt-6 grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                        {data.results.map((movie) => (
                            <MovieCard
                                key={movie.id}
                                movie={{
                                    id: movie.id,
                                    title: movie.title,
                                    year:movie.release_date?.slice(0.4) || "N/A",
                                    rating: movie.vote_average,
                                    image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
                                }}
                            />
                        ))}
                    </div>
                )}
            </div>
        </main>
    );
}
