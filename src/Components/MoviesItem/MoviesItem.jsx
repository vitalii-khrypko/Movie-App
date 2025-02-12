import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchMovieById, fetchMovieCredits } from "../../Redux/moviesItemSlice";
import { Typography, CircularProgress, Box, Chip } from "@mui/material";
import {
    MovieDetailsContainer,
    MovieContent,
    Poster,
    MovieInfo,
    MovieTitle,
    MovieTagline,
    MovieOverview,
    CastContainer,
    ActorCard,
    ActorAvatar,
    ActorName,
    ActorCharacter
} from "./MoviesItemStyles";

const MoviesItem = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { movie, cast, status, error } = useSelector((state) => state.movieItem);

    useEffect(() => {
        dispatch(fetchMovieById(id));
        dispatch(fetchMovieCredits(id));
    }, [dispatch, id]);

    if (status === "loading") return <CircularProgress sx={{ display: "block", margin: "auto" }} />;
    if (status === "failed") return <Typography color="error">Error: {error}</Typography>;
    if (!movie) return <Typography color="error">No movie data found.</Typography>;

    return (
        <>
            <MovieDetailsContainer sx={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})` }}>
                <MovieContent sx={{ flexDirection: "column", alignItems: "center" }}>
                    <Poster
                        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                        alt={movie.title}
                        sx={{ width: "250px", height: "375px", boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)" }}
                    />
                    <MovieInfo sx={{ textAlign: "center", padding: "20px", width: "90%" }}>
                        <MovieTitle variant="h4">{movie.title}</MovieTitle>
                        {movie.tagline && <MovieTagline variant="h6">"{movie.tagline}"</MovieTagline>}
                        <MovieOverview variant="body1">{movie.overview}</MovieOverview>

                        <Box sx={{ display: "flex", justifyContent: "center", gap: 1, mb: 2 }}>
                            {movie.genres.map((genre) => (
                                <Chip key={genre.id} label={genre.name} color="primary" />
                            ))}
                        </Box>

                        <Typography variant="body1"><strong>Release Date:</strong> {movie.release_date}</Typography>
                        <Typography variant="body1"><strong>Duration:</strong> {movie.runtime} min</Typography>
                        <Typography variant="body1"><strong>Rating:</strong> {movie.vote_average.toFixed(1)} / 10 ({movie.vote_count} votes)</Typography>
                    </MovieInfo>
                </MovieContent>
            </MovieDetailsContainer>

            {/* Блок для актора поза MovieDetailsContainer */}
            <CastContainer>
                <Typography variant="h5" gutterBottom>Top Billed Cast</Typography>
                <Box sx={{ display: "flex", gap: 2, overflowX: "auto", flexWrap: "nowrap" }}>
                    {cast.map((actor) => (
                        <ActorCard key={actor.id}>
                            <ActorAvatar
                                src={actor.profile_path ? `https://image.tmdb.org/t/p/w185/${actor.profile_path}` : "/default-avatar.png"}
                                alt={actor.name}
                            />
                            <ActorName variant="body2">{actor.name}</ActorName>
                            <ActorCharacter variant="body2">{actor.character}</ActorCharacter>
                        </ActorCard>
                    ))}
                </Box>
            </CastContainer>
        </>
    );
};

export default MoviesItem;
