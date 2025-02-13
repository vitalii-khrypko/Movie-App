import { Routes, Route } from "react-router-dom";
import Movies from "../Components/Movies/Features/Movies/Movies";
import MoviesItem from "../Components/Movies/Features/Movies/MoviesItem/MoviesItem";
import ActorDetails from "../Components/Movies/Features/Movies/Actors/Actors";

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