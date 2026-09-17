
import MovieCard from "../components/MovieCard";
import { getPopularMovies } from "@/_lib/tmdb";

export default async function MoviesPage() {
    const data = await getPopularMovies();
    return (
        <main className="min-h-screen bg-gray-950 px-6 py-10">
            <div className="mx-auto mb-8  max-w-7xl">
                
                <h1 className="text-3xl font-bold text-white ">
                    Popular movies
                </h1>
                <p className="mt-2 text-gray-400">
                    Discover popular movies from TMDB
                </p>
            </div>
            <div
                className="mx-auto grid max-w-7xl grid-cols-2 gap-5 
            sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
            >
                {data.results.map((movie) => (
                    <MovieCard
                        key={movie.id}
                        movie={{
                            id: movie.id,
                            title: movie.title,
                            year: movie.release_date?.slice(0, 4) || "N/A",
                            rating: movie.vote_average,
                            image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
                        }}
                    />
                ))}
            </div>
        </main>
    );
}
