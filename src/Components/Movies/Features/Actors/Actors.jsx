import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchActorById } from "../../../../Redux/Features/Actors/actorsSlice";
import { Typography, CircularProgress, Box, Avatar, Divider, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { ActorContainer, ActorInfo, PersonalInfo, BioAndMovies, MovieCard, MoviesContainer } from './ActorsStyles';
import { toggleBiography, selectBiographyExpanded } from "../../../../Redux/Features/Actors/actorsSlice";

const Actors = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { actor, status, error } = useSelector((state) => state.actors);
    const isBiographyExpanded = useSelector((state) => selectBiographyExpanded(state, id));
    // Get the bio disclosure status for a specific actor

    useEffect(() => {
        dispatch(fetchActorById(id));
    }, [dispatch, id]);

    if (status === "loading") return <CircularProgress sx={{ display: "block", margin: "auto" }} />;
    if (status === "failed") return <Typography color="error">Error: {error}</Typography>;
    if (!actor) return <Typography color="error">No actor data found.</Typography>;

    const handleToggleBio = () => {
        dispatch(toggleBiography(id)); // Toggle the biography state in the global Redux state
    };

    return (
        <ActorContainer>
            <Box sx={{ display: "flex", flexDirection: "row", gap: 4 }}>
                {/* Left side: Photo and personal information */}
                <ActorInfo>
                    <img
                        src={actor.profile_path ? `https://image.tmdb.org/t/p/w185/${actor.profile_path}` : "/default-profile.png"}
                        alt={actor.name}
                        style={{
                            width: "300px",
                            height: "auto",
                            marginBottom: "16px",
                            borderRadius: "8px"
                        }}
                    />
                    <PersonalInfo>
                        <Typography variant="h6" sx={{fontWeight: "bold"}}>Personal Info</Typography>
                        <Typography variant="body1">Known For: {actor.known_for_department || "Acting"}</Typography>
                        <Typography variant="body1">Known Credits: {actor.movie_credits?.cast.length || "0"}</Typography>
                        <Typography variant="body1">Gender: {actor.gender === 1 ? "Female" : "Male"}</Typography>
                        <Typography variant="body1">Birthday: {actor.birthday || "Not available"}</Typography>
                        <Typography variant="body1">Place of Birth: {actor.place_of_birth || "Not available"}</Typography>
                    </PersonalInfo>
                </ActorInfo>

                {/* Right side: Biography and movie list */}
                <BioAndMovies>
                    <Typography variant="h4" sx={{ marginTop: 2 }}>{actor.name}</Typography>
                    <Typography variant="h6" sx={{ marginTop: 2 }}>Biography</Typography>
                    <Typography variant="body1" sx={{ marginTop: 2 }}>
                        {isBiographyExpanded ? actor.biography : `${actor.biography?.substring(0, 400)}...`}
                    </Typography>

                    {/* Button to reveal biography */}
                    <Button onClick={handleToggleBio} sx={{ marginTop: 2 }}>
                        {isBiographyExpanded ? "Show less" : "Read more"}
                    </Button>

                    <Divider sx={{ marginTop: 3 }} />
                    <Typography variant="h5" sx={{ marginTop: "20px" }}>Known For</Typography>

                    {actor.movie_credits && actor.movie_credits.cast && actor.movie_credits.cast.length > 0 ? (
                        <MoviesContainer>
                            <Box sx={{ display: "flex", gap: 2, overflowX: "auto", flexWrap: "nowrap" }}>
                                {actor.movie_credits.cast.map((movie) => (
                                    <MovieCard key={movie.id}>
                                        <Link to={`/movie/${movie.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                                            <img
                                                src={movie.poster_path ? `https://image.tmdb.org/t/p/w185/${movie.poster_path}` : "/default-movie.png"}
                                                alt={movie.title}
                                                style={{ width: "150px", borderRadius: "8px", cursor: "pointer" }}
                                            />
                                            <Typography variant="body2">{movie.title}</Typography>
                                        </Link>
                                    </MovieCard>
                                ))}
                            </Box>
                        </MoviesContainer>
                    ) : (
                        <Typography variant="body2" sx={{ marginTop: "20px" }}>No movies found for this actor.</Typography>
                    )}
                </BioAndMovies>
            </Box>
        </ActorContainer>
    );
};

export default Actors;
