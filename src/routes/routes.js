import { Routes, Route } from "react-router-dom";
import Movies from "../Components/Movies/Movies";
import MoviesItem from "../Components/MoviesItem/MoviesItem";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/Movie-App" element={<Movies />} />
            <Route path="/movie/:id" element={<MoviesItem />} />
        </Routes>
    );
};

export default AppRoutes;
