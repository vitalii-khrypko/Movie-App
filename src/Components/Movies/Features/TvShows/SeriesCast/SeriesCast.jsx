import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSeriesActorById } from "../../../../../Redux/Features/TvShows/seriesCastSlice";
import { Typography, CircularProgress, Box } from "@mui/material";
import { Link } from "react-router-dom";

const SeriesCast = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { actor, status, error } = useSelector((state) => state.seriesCast);

    useEffect(() => {
        dispatch(fetchSeriesActorById(id));
    }, [dispatch, id]);

    if (status === "loading") return <CircularProgress sx={{ display: "block", margin: "auto" }} />;
    if (status === "failed") return <Typography color="error">Error: {error}</Typography>;
    if (!actor) return <Typography color="error">No actor data found.</Typography>;

    return (
        <Box sx={{ padding: "20px", textAlign: "center" }}>
            <Typography variant="h4">{actor.name}</Typography>
            <Typography variant="body1">{actor.biography || "No biography available."}</Typography>

            {actor.tv_credits && actor.tv_credits.cast && actor.tv_credits.cast.length > 0 ? (
                <>
                    <Typography variant="h5" sx={{ marginTop: "20px" }}>TV Shows</Typography>
                    <Box sx={{ display: "flex", gap: 2, overflowX: "auto", flexWrap: "nowrap" }}>
                        {actor.tv_credits.cast.map((show) => (
                            <Box key={show.id} sx={{ textAlign: "center" }}>
                                <Link to={`/tvShow/${show.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                                    <img
                                        src={show.poster_path ? `https://image.tmdb.org/t/p/w185/${show.poster_path}` : "/default-tv.png"}
                                        alt={show.name}
                                        style={{ width: "150px", borderRadius: "8px", cursor: "pointer" }}
                                    />
                                    <Typography variant="body2">{show.name}</Typography>
                                </Link>
                            </Box>
                        ))}
                    </Box>
                </>
            ) : (
                <Typography variant="body2" sx={{ marginTop: "20px" }}>No TV shows found for this actor.</Typography>
            )}
        </Box>
    );
};

export default SeriesCast;