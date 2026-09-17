export default function Loading() {
    return (
        <main className="min-h-screen bg-gray-950 px-6 py-10 text-white">
            <div className="mx-auto max-w-7xl">
                <div className="h-9 w-56 animate-pulse rounded bg-gray-800" />

                <div className="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                    {Array.from({ length: 10 }).map((_, index) => (
                        <div
                            key={index}
                            className="overflow-hidden rounded-xl bg-gray-900"
                        >
                            <div className="aspect-[2/3] animate-pulse bg-gray-800"></div>

                            <div className="p-4">
                                <div className="h-5 animate-pulse rounded bg-gray-800" />
                                <div className="mt-2 h-4 w-16 animate-pulse rounded bg-gray-800" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
