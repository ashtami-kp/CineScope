import Link from "next/link";

export default function Home() {
    return (
        <main className="min-h-screen bg-gray-950 text-white">
            <section className="flex min-h-[80vh] items-center justify-center px-6 text-center">
                <div className="max-w-3xl ">
                    <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-400">
                        Welcome to cinescope
                    </p>
                    <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
                        Discover Your Next Favorite Movie
                    </h1>
                    <p className="mx-auto mt-6 max-w-lg text-lg leading-8 text-gray-400">
                        Explore popular movies, Seacrh for your favorites, and
                        keep track of the movies you love.💕
                    </p>
                    <Link
                        href={"/movies"}
                        className="mt-8 inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-700"
                    >
                        Explore
                    </Link>
                </div>
            </section>
        </main>
    );
}
