import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTvShows, setCategory } from "../../../../Redux/Features/TvShows/tvShowsSlice";
import { useNavigate } from "react-router-dom";
import { Grid, CardMedia, CardContent, CircularProgress, Box } from "@mui/material";
import { CategoryButton, TvTitle, TvShowsContainer, TvOverview, TvCard} from "./TvShowsStyles";

const TvShows = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { tvShows, status, error, category } = useSelector((state) => state.tvShows);

    useEffect(() => {
        dispatch(fetchTvShows(category));
    }, [dispatch, category]);

    const handleCategoryChange = (newCategory) => {
        dispatch(setCategory(newCategory));
    };

    return (
        <TvShowsContainer>
            <TvTitle variant="h4" align="left" mb={4}>
                TV Shows
                <CategoryButton onClick={() => handleCategoryChange("popular")} active={category === "popular"}>
                    Popular
                </CategoryButton>
                <CategoryButton onClick={() => handleCategoryChange("airing_today")} active={category === "airing_today"}>
                    Airing Today
                </CategoryButton>
                <CategoryButton onClick={() => handleCategoryChange("on_the_air")} active={category === "on_the_air"}>
                    On TV
                </CategoryButton>
                <CategoryButton onClick={() => handleCategoryChange("top_rated")} active={category === "top_rated"}>
                    Top Rated
                </CategoryButton>
            </TvTitle>
            {status === "loading" && <CircularProgress color="primary" sx={{ display: "block", margin: "auto" }} />}
            {status === "failed" && <TvOverview align="center" color="error">Error: {error}</TvOverview>}
            <Box sx={{ display: "flex", overflowX: "auto", gap: "16px", paddingBottom: "20px" }}>
                {tvShows.map((tvShow) => (
                    <Grid item key={tvShow.id} xs={12} sm={6} md={4} lg={3}>
                        <TvCard onClick={() => navigate(`/tv/${tvShow.id}`)}>
                            <CardMedia
                                component="img"
                                height="350"
                                image={`https://image.tmdb.org/t/p/w500/${tvShow.poster_path}`}
                                alt={tvShow.name}
                            />
                            <CardContent sx={{ textAlign: "center" }}>
                                <TvTitle variant="h6">{tvShow.name}</TvTitle>
                            </CardContent>
                        </TvCard>
                    </Grid>
                ))}
            </Box>
        </TvShowsContainer>
    )
}

export default TvShows;