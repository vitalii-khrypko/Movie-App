import { Routes, Route } from "react-router-dom";
import Movies from "../Components/Movies/Movies";
import MoviesItem from "../Components/MoviesItem/MoviesItem";
import ActorDetails from "../Components/Actors/Actors";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/Movie-App" element={<Movies />} />
            <Route path="/movie/:id" element={<MoviesItem />} />
            <Route path="/actor/:id" element={<ActorDetails />} />
        </Routes>
    );
};

export default AppRoutes;