import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchMovieById, fetchMovieCredits } from "../../../../../Redux/Features/Movies/moviesItemSlice";
import {Typography, CircularProgress, Box, Card} from "@mui/material";
import {
    MovieDetailsContainer,
    MovieContent,
    Poster,
    MovieInfo,
    MovieTitle,
    MovieTagline,
    MovieOverview,
    CastContainer,
    ActorAvatar,
    ActorCharacter, ActorCard, ScrollableContainer, ActorName
} from "./MoviesItemStyles";
import { Link } from "react-router-dom";

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
                        sx={{ height: "450px", boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)" }}
                    />
                    <MovieInfo sx={{ textAlign: "center", padding: "20px", width: "90%" }}>
                        <MovieTitle variant="h4">{movie.title}</MovieTitle>
                        {movie.tagline && <MovieTagline variant="h6">"{movie.tagline}"</MovieTagline>}
                        <Typography variant="h5"><strong>Overview</strong></Typography>
                        <MovieOverview variant="body1">{movie.overview}</MovieOverview>

                        <Box sx={{ display: "flex", justifyContent: "left", marginTop: "10px", gap: 2, flexWrap: "wrap", mb: 2 }}>
                            {movie.genres.map((genre) => (
                                <Card
                                    key={genre.id}
                                    sx={{
                                        padding: "8px 16px",
                                        borderRadius: "16px",
                                        backgroundColor: "#f0f0f0",
                                        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                                        textAlign: "center",
                                        fontWeight: "bold",
                                        color: "primary.main",
                                        '&:hover': {
                                            backgroundColor: "primary.main",
                                            color: "white",
                                            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
                                        },
                                    }}
                                >
                                    {genre.name}
                                </Card>
                            ))}
                        </Box>

                        <Typography variant="body1"><strong>Release Date:</strong> {movie.release_date}</Typography>
                        <Typography variant="body1"><strong>Duration:</strong> {movie.runtime} min</Typography>
                        <Typography variant="body1"><strong>Rating:</strong> {movie.vote_average.toFixed(1)} / 10 ({movie.vote_count} votes)</Typography>
                    </MovieInfo>
                </MovieContent>
            </MovieDetailsContainer>

            <Typography variant="h5" gutterBottom sx={{ textAlign: "left", mb: 3, margin: "20px", fontWeight: "bold" }}>
                Top Billed Cast
            </Typography>

            <CastContainer>
                <ScrollableContainer>
                    {cast.map((actor) => (
                        <ActorCard key={actor.id}>
                            <Link to={`/actor/${actor.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                                <ActorAvatar
                                    src={actor.profile_path ? `https://image.tmdb.org/t/p/w185/${actor.profile_path}` : "/default-avatar.png"}
                                    alt={actor.name}
                                />
                                <ActorName variant="body2" sx={{ fontSize: "16px", color: "black" }}>
                                    {actor.name}
                                </ActorName>
                                <ActorCharacter variant="body2" sx={{margin: "20px"}}>
                                    {actor.character}
                                </ActorCharacter>
                            </Link>
                        </ActorCard>
                    ))}
                </ScrollableContainer>
            </CastContainer>

        </>
    );
};

export default MoviesItem;
