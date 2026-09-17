"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchMovies() {
    const [query, setQuery] = useState("");
    const router = useRouter();
    useEffect(() => {
        const timer = setTimeout(() => {
            if (query.trim()) {
                const url = `/search?query=${encodeURIComponent(query)}`;
                router.push(url);
            }
        }, 500);
        return () => clearTimeout(timer);
    }, [query, router]);

    return (
        <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for a movie.."
            className="flex-1 rounded-lg bg-gray-800 px-4 py-3 text-white outline-none"
        />
    );
}
