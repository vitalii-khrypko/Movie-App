import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPeople, loadMore } from "../../../../Redux/Features/People/peopleSlice";
import { useNavigate } from "react-router-dom";
import { Grid, CardMedia, CardContent, CircularProgress, Typography } from "@mui/material";
import {
    PeopleContainer,
    PeopleCard,
    PeopleTitle,
    PeopleOverview,
    PeopleFooter,
    PeopleRating,
    ScrollableContainer
} from "./PeopleStyles";
import {LoadMoreButton, LoadMoreButtonContainer} from "../Movies/MoviesStyles";

const People = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { people, status, error, page } = useSelector((state) => state.people);

    useEffect(() => {
        dispatch(fetchPeople({page: 1}));
    }, [dispatch]);

    const handleLoadMore = () => {
        dispatch(loadMore());
        dispatch(fetchPeople({ page: page + 1 }));
    };

    return (
        <PeopleContainer>
            <PeopleTitle variant="h4" align="left" mb={4}>
                Popular Actors
            </PeopleTitle>
            {status === "loading" && <CircularProgress color="primary" sx={{ display: "block", margin: "auto" }} />}
            {status === "failed" && <PeopleOverview align="center" color="error">Error: {error}</PeopleOverview>}
            <ScrollableContainer>
                {people.map((person) => (
                    <Grid item key={person.id} xs={12} sm={6} md={4} lg={3}>
                        <PeopleCard onClick={() => navigate(`/actor/${person.id}`)}>
                            <CardMedia
                                component="img"
                                height="350"
                                image={person.profile_path ? `https://image.tmdb.org/t/p/w500/${person.profile_path}` : "/default-avatar.png"}
                                alt={person.name}
                            />
                            <CardContent sx={{ textAlign: "center" }}>
                                <Typography variant="h6">{person.name}</Typography>
                                <PeopleFooter> Popularity:
                                    <PeopleRating>{person.popularity}</PeopleRating>
                                </PeopleFooter>
                            </CardContent>
                        </PeopleCard>
                    </Grid>
                ))}

                <LoadMoreButtonContainer>
                    <LoadMoreButton onClick={handleLoadMore}>more...</LoadMoreButton>
                </LoadMoreButtonContainer>
            </ScrollableContainer>
        </PeopleContainer>
    );
};

export default People;