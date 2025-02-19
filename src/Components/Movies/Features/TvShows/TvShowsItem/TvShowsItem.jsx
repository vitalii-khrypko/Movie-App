import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchTvShowById, fetchTvShowCredits, fetchTvShowTrailer } from "../../../../../Redux/Features/TvShows/tvShowsItemSlice";
import {
    Typography,
    CircularProgress,
    Box,
    Card,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions, Button
} from "@mui/material";
import {
    TvDetailsContainer,
    TvContent,
    Poster,
    TvInfo,
    TvTitle,
    TvTagline,
    TvOverview,
    CastContainer,
    ActorCard,
    ActorAvatar,
    ActorName,
    ActorCharacter,
    ScrollableContainer
} from "./TvShowsItemStyles";
import { Link } from "react-router-dom";
import { openTrailerModal, closeTrailerModal } from "../../../../../Redux/trailerModalSlice";

const TvShowsItem = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { tvShow, cast, trailer, status, error } = useSelector((state) => state.tvShowsItem);
    const { isOpen } = useSelector((state) => state.trailerModal);

    const handleClickOpen = () => {
        dispatch(openTrailerModal()); // open modal window
    };

    const handleClose = () => {
        dispatch(closeTrailerModal()); // close modal window
    };

    useEffect(() => {
        dispatch(fetchTvShowById(id));
        dispatch(fetchTvShowCredits(id));
        dispatch(fetchTvShowTrailer(id));
    }, [dispatch, id]);

    if (status === "loading") return <CircularProgress sx={{ display: "block", margin: "auto" }} />;
    if (status === "failed") return <Typography color="error">Error: {error}</Typography>;
    if (!tvShow) return <Typography color="error">No TV Show data found.</Typography>;

    return (
        <>
            <TvDetailsContainer sx={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${tvShow.backdrop_path})` }}>
                <TvContent sx={{ flexDirection: "column", alignItems: "center" }}>
                    <Poster
                        src={`https://image.tmdb.org/t/p/w500/${tvShow.poster_path}`}
                        alt={tvShow.name}
                        sx={{ height: "450px", boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)" }}
                    />
                    <TvInfo sx={{ textAlign: "center", padding: "20px", width: "90%" }}>
                        <TvTitle variant="h4">{tvShow.name}</TvTitle>
                        {tvShow.tagline && <TvTagline variant="h6">"{tvShow.tagline}"</TvTagline>}
                        <Typography variant="h5"><strong>Overview</strong></Typography>
                        <TvOverview variant="body1">{tvShow.overview}</TvOverview>

                        <Box sx={{ display: "flex", justifyContent: "left", marginTop: "10px", gap: 2, flexWrap: "wrap", mb: 2 }}>
                            {tvShow.genres.map((genre) => (
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

                        <Typography variant="body1"><strong>First Air Date:</strong> {tvShow.first_air_date}</Typography>
                        <Typography variant="body1">
                            <strong>Duration:</strong> {tvShow.episode_run_time?.[0] ? `${tvShow.episode_run_time[0]} min` : "N/A"}
                        </Typography>
                        <Typography variant="body1"><strong>Rating:</strong> {tvShow.vote_average.toFixed(1)} / 10 ({tvShow.vote_count} votes)</Typography>
                        <Typography variant="body1"><strong>Origin Country:</strong> {tvShow.origin_country}</Typography>
                        {/* Кнопка Play Trailer */}
                        {trailer && trailer.length > 0 && (
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={handleClickOpen}
                                sx={{ marginTop: "20px" }}
                            >
                                Play Trailer
                            </Button>
                        )}
                    </TvInfo>
                </TvContent>
            </TvDetailsContainer>

            {/* Trailer */}
            <Dialog open={isOpen} onClose={handleClose} maxWidth="md" fullWidth>
                <DialogTitle>Trailer</DialogTitle>
                <DialogContent>
                    {trailer && trailer.length > 0 && (
                        <iframe
                            width="100%"
                            height="500px"
                            src={`https://www.youtube.com/embed/${trailer[0].key}`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="Movie Trailer"
                        />
                    )}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>

            <Typography variant="h5" gutterBottom sx={{ textAlign: "left", mb: 3, margin: "20px", fontWeight: "bold" }}>
                Series Cast
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

export default TvShowsItem;