import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchTvShowById, fetchTvShowCredits } from "../../../../../Redux/Features/TvShows/tvShowsItemSlice";
import { Typography, CircularProgress, Box, Chip } from "@mui/material";
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
    ActorCharacter
} from "./TvShowsItemStyles";
import { Link } from "react-router-dom";

const TvShowsItem = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { tvShow, cast, status, error } = useSelector((state) => state.tvShowsItem);

    useEffect(() => {
        dispatch(fetchTvShowById(id));
        dispatch(fetchTvShowCredits(id));
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
                        sx={{ width: "250px", height: "375px", boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)" }}
                    />
                    <TvInfo sx={{ textAlign: "center", padding: "20px", width: "90%" }}>
                        <TvTitle variant="h4">{tvShow.name}</TvTitle>
                        {tvShow.tagline && <TvTagline variant="h6">"{tvShow.tagline}"</TvTagline>}
                        <TvOverview variant="body1">{tvShow.overview}</TvOverview>

                        <Box sx={{ display: "flex", justifyContent: "center", gap: 1, mb: 2 }}>
                            {tvShow.genres?.map((genre) => (
                                <Chip key={genre.id} label={genre.name} color="primary" />
                            ))}
                        </Box>

                        <Typography variant="body1"><strong>Release Date:</strong> {tvShow.first_air_date}</Typography>
                        <Typography variant="body1">
                            <strong>Duration:</strong> {tvShow.episode_run_time?.[0] ? `${tvShow.episode_run_time[0]} min` : "N/A"}
                        </Typography>
                        <Typography variant="body1"><strong>Rating:</strong> {tvShow.vote_average.toFixed(1)} / 10 ({tvShow.vote_count} votes)</Typography>
                    </TvInfo>
                </TvContent>
            </TvDetailsContainer>

            <CastContainer>
                <Typography variant="h5" gutterBottom>Series Cast</Typography>
                <Box sx={{ display: "flex", gap: 2, overflowX: "auto", flexWrap: "nowrap" }}>
                    {cast.map((actor) => (
                        <ActorCard key={actor.id}>
                            <Link to={`/seriesCast/${actor.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                                <ActorAvatar
                                    src={actor.profile_path ? `https://image.tmdb.org/t/p/w185/${actor.profile_path}` : "/default-avatar.png"}
                                    alt={actor.name}
                                />
                                <ActorName variant="body2">{actor.name}</ActorName>
                                <ActorCharacter variant="body2">{actor.character}</ActorCharacter>
                            </Link>
                        </ActorCard>
                    ))}
                </Box>
            </CastContainer>
        </>
    );
};

export default TvShowsItem;
