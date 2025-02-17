import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPeople } from "../../../../Redux/Features/People/peopleSlice";
import { useNavigate } from "react-router-dom";
import { Grid, CardMedia, CardContent, CircularProgress, Box, Typography } from "@mui/material";
import { PeopleContainer, PeopleCard, PeopleTitle, PeopleOverview } from "./PeopleStyles";

const People = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { people, status, error } = useSelector((state) => state.people);

    useEffect(() => {
        dispatch(fetchPeople());
    }, [dispatch]);

    return (
        <PeopleContainer>
            <PeopleTitle variant="h4" align="left" mb={4}>
                Popular Actors
            </PeopleTitle>
            {status === "loading" && <CircularProgress color="primary" sx={{ display: "block", margin: "auto" }} />}
            {status === "failed" && <PeopleOverview align="center" color="error">Error: {error}</PeopleOverview>}
            <Box sx={{ display: "flex", overflowX: "auto", gap: "16px", paddingBottom: "20px" }}>
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
                            </CardContent>
                        </PeopleCard>
                    </Grid>
                ))}
            </Box>
        </PeopleContainer>
    );
};

export default People;