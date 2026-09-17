import { Show, UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav
            className="sticky top-0 z-50 border-b border-gray-800 
        bg-gray-950/95 backdrop-blur"
        >
            <div className="flex justify-between">
                <div className=" max-w-7xl  px-6 py-4">
                    <h2 className=" text-2xl font-bold text-white">
                        Cine<span className="text-blue-500">Scope</span>
                    </h2>
                </div>
                <div className="flex gap-5 font-medium mr-7 mt-7  text-sm text-gray-300 hover:text-white  ">
                    <Show when={"signed-out"}>
                        <Link href={"/sign-in"}>Sign In</Link>

                        <Link href={"/sign-up"}>Sign Up</Link>
                    </Show>
                    <Show when={"signed-in"}>
                        <UserButton />
                    </Show>
                </div>
            </div>
            <div className="flex ml-7 mb-3 font-medium  gap-6 text-sm text-gray-300">
                <Link className="hover:text-white" href="/">
                    Home
                </Link>
                <Link className="hover:text-white" href="/movies">
                    Movies
                </Link>
                <Link className="hover:text-white" href="/favorites">
                    Favorites
                </Link>
                <Link href={"/search"} className=" hover:text-white">
                    Search
                </Link>
            </div>
        </nav>
    );
}
