"use client";

export default function Error({ reset }: { reset: () => void }) {
    return (
        <main className="flex min-h-screen items-center justify-center bg-gray-950 px-6 text-center text-white">
            <div>
                <h1 className="text-3xl font-bold">Something went wrong</h1>

                <p className="mt-3 text-gray-400">
                    We could not load the movies. Please try again.
                </p>

                <button
                    onClick={() => reset()}
                    className="mt-6 rounded-lg bg-blue-600 px-5 py-3 font-medium hover:bg-blue-700"
                >
                    Try Again
                </button>
            </div>
        </main>
    );
}
