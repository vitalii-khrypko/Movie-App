import { useState, useEffect } from "react";
import "./Movies.css";

const API_KEY = "466a3191920711785d3d0265531db629";
const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

const Movies = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch(API_URL)
            .then((res) => res.json())
            .then((data) => setMovies(data.results))
            .catch((error) => console.error("Error fetching movies:", error));
    }, []);

    return (
        <div className="movies-container">
            <header className="header">
                <h1>Movie Explorer</h1>
            </header>
            <h2 className="movies-title">Popular Movies</h2>
            <div className="movies-grid">
                {movies.map((movie) => (
                    <div key={movie.id} className="movie-card">
                        <img
                            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                            alt={movie.title}
                        />
                        <div className="movie-card-details">
                            <h3>{movie.title}</h3>
                            <p>{movie.overview.slice(0, 100)}...</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Movies;