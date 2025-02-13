import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchActorById } from "../../../../../Redux/Features/Movies/actorsSlice";
import { Typography, CircularProgress, Box } from "@mui/material";
import { Link } from "react-router-dom";

const Actors = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { actor, status, error } = useSelector((state) => state.actors);

    useEffect(() => {
        dispatch(fetchActorById(id));
    }, [dispatch, id]);

    if (status === "loading") return <CircularProgress sx={{ display: "block", margin: "auto" }} />;
    if (status === "failed") return <Typography color="error">Error: {error}</Typography>;
    if (!actor) return <Typography color="error">No actor data found.</Typography>;

    return (
        <Box sx={{ padding: "20px", textAlign: "center" }}>
            <Typography variant="h4">{actor.name}</Typography>
            <Typography variant="body1">{actor.biography || "No biography available."}</Typography>

            {actor.movie_credits && actor.movie_credits.cast && actor.movie_credits.cast.length > 0 ? (
                <>
                    <Typography variant="h5" sx={{ marginTop: "20px" }}>Movies</Typography>
                    <Box sx={{ display: "flex", gap: 2, overflowX: "auto", flexWrap: "nowrap" }}>
                        {actor.movie_credits.cast.map((movie) => (
                            <Box key={movie.id} sx={{ textAlign: "center" }}>
                                <Link to={`/movie/${movie.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                                    <img
                                        src={movie.poster_path ? `https://image.tmdb.org/t/p/w185/${movie.poster_path}` : "/default-movie.png"}
                                        alt={movie.title}
                                        style={{ width: "150px", borderRadius: "8px", cursor: "pointer" }}
                                    />
                                    <Typography variant="body2">{movie.title}</Typography>
                                </Link>
                            </Box>
                        ))}
                    </Box>
                </>
            ) : (
                <Typography variant="body2" sx={{ marginTop: "20px" }}>No movies found for this actor.</Typography>
            )}
        </Box>
    );
};

export default Actors;
