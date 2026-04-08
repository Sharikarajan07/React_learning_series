import React, { useEffect, useState } from "react";
import "./moviespage.css";

export default function Moviespage() {

    const [movies, setmovies] = useState([]);
    const API_KEY = '2453d7b8671a8ed448f01f254c32b7ba';
    const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

    useEffect(() => {
        const fetchmovies = async () => {
            try {
                const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`);
                const data = await res.json()
                setmovies(data.results || []);
            } catch (error) {
                console.error("Error fetching movies:", error);
            }
        };
        fetchmovies();
    }, [])

    return (
        <div className="movies-page">
            <h2 className="movies-title">Popular Movies</h2>
            <div className="movie-grid">
                {movies.map((movie) => (
                    <div className="movie-card">
                        <img
                            src={`${IMAGE_BASE_URL}${movie.poster_path}`}
                            alt={movie.title}
                            className="movie-poster"
                        />
                        <div className="movie-info">
                            <h3 className="movie-name">{movie.title}</h3>
                            <p className="movie-rating">⭐ {movie.vote_average.toFixed(1)}</p>
                            <p className="movie-desc">
                                {movie.overview.length > 120
                                    ? movie.overview.slice(0, 120) + "..."
                                    : movie.overview}
                            </p>
                            <button className="watch-btn">▶ Watch Now</button>
                        </div>
                    </div>



                ))}
            </div>
        </div>
    );
}