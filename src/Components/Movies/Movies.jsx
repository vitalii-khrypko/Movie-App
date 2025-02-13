import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, setCategory } from "../../Redux/moviesSlice";
import { useNavigate } from "react-router-dom";
import { Grid, CardMedia, CardContent, CircularProgress, Box } from "@mui/material";
import { MoviesContainer, MovieCard, MovieTitle, MovieOverview, CategoryButton } from "./MoviesStyles";

const Movies = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { movies, status, error, category } = useSelector((state) => state.movies);

    useEffect(() => {
        dispatch(fetchMovies(category));
    }, [dispatch, category]);

    const handleCategoryChange = (newCategory) => {
        dispatch(setCategory(newCategory));
    };

    return (
        <MoviesContainer>
            <MovieTitle variant="h4" align="left" mb={4}>
                Movies
                <CategoryButton onClick={() => handleCategoryChange("now_playing")} active={category === "now_playing"}>
                    Now Playing
                </CategoryButton>
                <CategoryButton onClick={() => handleCategoryChange("popular")} active={category === "popular"}>
                    Popular
                </CategoryButton>
                <CategoryButton onClick={() => handleCategoryChange("top_rated")} active={category === "top_rated"}>
                    Top Rated
                </CategoryButton>
                <CategoryButton onClick={() => handleCategoryChange("upcoming")} active={category === "upcoming"}>
                    Upcoming
                </CategoryButton>
            </MovieTitle>
            {status === "loading" && <CircularProgress color="primary" sx={{ display: "block", margin: "auto" }} />}
            {status === "failed" && <MovieOverview align="center" color="error">Error: {error}</MovieOverview>}
            <Box sx={{ display: "flex", overflowX: "auto", gap: "16px", paddingBottom: "20px" }}>
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
                            </CardContent>
                        </MovieCard>
                    </Grid>
                ))}
            </Box>
        </MoviesContainer>
    );
};

export default Movies;
