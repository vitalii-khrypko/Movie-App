import { Routes, Route } from "react-router-dom";
import MoviesItem from "../Components/Movies/Features/Movies/MoviesItem/MoviesItem";
import ActorDetails from "../Components/Movies/Features/Movies/Actors/Actors";
import Main from "../Components/Movies/Main";
import TvShowsItem from "../Components/Movies/Features/TvShows/TvShowsItem/TvShowsItem";
import SeriesCast from "../Components/Movies/Features/TvShows/SeriesCast/SeriesCast";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/Movie-App" element={<Main />} />
            <Route path="/movie/:id" element={<MoviesItem />} />
            <Route path="/actor/:id" element={<ActorDetails />} />
            <Route path="/tvShow/:id" element={<TvShowsItem />} />
            <Route path="/seriesCast/:id" element={<SeriesCast />} />
        </Routes>
    );
};

export default AppRoutes;