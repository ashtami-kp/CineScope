export type TMDBMovie = {
    id: number;
    title: string;
    release_date: string;
    vote_average: number;
    poster_path: string | null;
};
export type TMDBResponse = {
    results: TMDBMovie[];
};

export type TMDBMovieDetails = {
    id: string;
    title: string;
    overview: string;
    release_date: string;
    vote_average: number;
    poster_path: string | null;
    backfrop_path: string | null;
    genres: {
        id: number;
        name: string;
    }[];
};

export type favoriteMovie = {
    id:number;
    title:string;
    year:string;
    rating:number;
    image:string;
}

