import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../../Redux/moviesSlice";
import { useNavigate } from "react-router-dom";
import { Grid, CardMedia, CardContent, CircularProgress } from "@mui/material";
import { MoviesContainer, MovieCard, MovieTitle, MovieOverview } from "./MoviesStyles";

const Movies = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { movies, status, error } = useSelector((state) => state.movies);

    useEffect(() => {
        dispatch(fetchMovies());
    }, [dispatch]);

    return (
        <MoviesContainer>
            <MovieTitle variant="h4" align="center" mb={4}>
                Popular Movies
            </MovieTitle>
            {status === "loading" && <CircularProgress color="primary" sx={{ display: "block", margin: "auto" }} />}
            {status === "failed" && <MovieOverview align="center" color="error">Error: {error}</MovieOverview>}
            <Grid container spacing={3} justifyContent="center">
                {movies.map((movie) => (
                    <Grid item key={movie.id} xs={12} sm={6} md={4} lg={3}>
                        <MovieCard onClick={() => navigate(`/movie/${movie.id}`)}>
                            <CardMedia
                                component="img"
                                height="350"
                                image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                alt={movie.title}
                            />
                            <CardContent sx={{ textAlign: "center" }}>
                                <MovieTitle variant="h6">{movie.title}</MovieTitle>
                                <MovieOverview variant="body2">
                                    {movie.overview.slice(0, 100)}...
                                </MovieOverview>
                            </CardContent>
                        </MovieCard>
                    </Grid>
                ))}
            </Grid>
        </MoviesContainer>
    );
};

export default Movies;
