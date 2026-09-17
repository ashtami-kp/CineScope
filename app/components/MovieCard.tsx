import Link from "next/link";

type Movie = {
    id: number;
    title: string;
    year: string;
    rating: number;
    image: string;
};
type MovieCardProps = {
    movie: Movie;
};
export default function MovieCard({ movie }: MovieCardProps) {
    return (
        <Link href={`/movies/${movie.id}`}>
            <div className="group overflow-hidden rounded-xl bg-gray-900 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl ">
                <div className="realtive aspect-\[2\/3\] overflow-hidden">
                    <img
                        src={movie.image}
                        alt={movie.title}
                        className="h-full w-full object-cover transition
                    duration-500 group-hover:scale-110"
                    />
                </div>
                <div
                    className="absolute right-3 top-3 rounded-md text-white
            bg-black/70 px-2 py-1 text-sm font-semibold backdrop-blur-sm "
                >
                    <p>⭐{movie.rating}</p>
                </div>

                <div className="p-4 ">
                    <h2 className="truncate text-lg font-semibold text-white ">
                        {movie.title}
                    </h2>

                    <p className="mt-1 text-gray-400 text-sm ">{movie.year}</p>
                </div>
            </div>
        </Link>
    );
}
