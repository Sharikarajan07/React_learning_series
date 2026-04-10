import React, { useState, useEffect } from "react";
import { FaUserCircle, FaSearch, FaHome, FaTv, FaFilm } from "react-icons/fa";
import './homepage.css'
import { Link } from "react-router-dom";

export default function Homepage() {
    const [featuredmovie, setfeaturedmovie] = useState(null);
    const [rowmovie, setrowmovie] = useState([]);

    const API_KEY = '2453d7b8671a8ed448f01f254c32b7ba';
    const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original';

    useEffect(() => {
        const fetchmovies = async () => {
            try {
                const response = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`);
                const data = await response.json();

                setfeaturedmovie(data.results[6])
                setrowmovie(data.results.slice(1, 25))``
            } catch (error) {
                console.error("Error fetching movies: ", error)
            }

        }
        fetchmovies()

    }, []);

    if (!featuredmovie) {
        return <div className="loading-screen">Loading data...</div>
    }

    return (
        <div className="homepage-container">
            <aside className="sidebar">
                <div className="sidebar-icon">
                    <FaHome size={28} /> 
                </div>
                <div className="sidebar-icon">
                    <FaSearch size={24} />
                </div>
                <div className="sidebar-icon">
                    <FaTv size={24} />
                </div>
                <Link to="/movies" className="sidebar-icon">
                    <FaFilm size={24} />
                </Link>
                <div className="sidebar-icon">
                    <FaUserCircle size={24} />
                </div>

            </aside>

            <main className="main-content">
                <div
                    className="hero-banner"
                    style={{ backgroundImage: `url(${IMAGE_BASE_URL}${featuredmovie.backdrop_path})` }}
                >
                    <div className="hero-content">
                        <h1>{featuredmovie.title || featuredmovie.name}</h1>
                        <p className="hero-descriptions">{featuredmovie.overview}</p>
                        <div className="hero-buttons">
                            <button className="play-btn">▶ Watch Now</button>
                            <button className="add-btn">+</button>
                        </div>

                    </div>
                </div>

                <div className="movie-row-container">
                    <h3>Trending Now</h3>
                    <div className="movie-row">
                        {rowmovie.map((movie) => (
                            <div key={movie.id} className="movie-card">
                                <img
                                    src={`${IMAGE_BASE_URL}${movie.poster_path}`}
                                    alt={movie.title || movie.name}
                                />
                            </div>
                        ))}
                    </div>
                </div>


            </main>
        </div>
    )

}