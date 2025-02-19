import { useEffect, useRef } from "react";
import {useDispatch, useSelector} from "react-redux";
import Movies from "./Features/Movies/Movies";
import TvShows from "./Features/TvShows/TvShows";
import People from "./Features/People/People";
import {resetMovies} from "../../Redux/Features/Movies/moviesSlice";
import {resetTvShows} from "../../Redux/Features/TvShows/tvShowsSlice";

const Main = () => {
    const section = useSelector((state) => state.scroll.section);
    const moviesRef = useRef(null);
    const tvShowsRef = useRef(null);
    const peopleRef = useRef(null);

    useEffect(() => {
        if (section === "movies" && moviesRef.current) {
            moviesRef.current.scrollIntoView({ behavior: "smooth" });
        } else if (section === "tvshows" && tvShowsRef.current) {
            tvShowsRef.current.scrollIntoView({ behavior: "smooth" });
        } else if (section === "people" && peopleRef.current) {
            peopleRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [section]);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(resetMovies()); // Reset the state of movies when going to the main page
    }, [dispatch]);

    useEffect(() => {
        dispatch(resetTvShows()); // Reset the state of movies when going to the main page
    }, [dispatch]);

    return (
        <>
            <div ref={moviesRef}>
                <Movies/>
            </div>
            <div ref={tvShowsRef}>
                <TvShows/>
            </div>
            <div ref={peopleRef}>
                <People/>
            </div>
        </>
    );
};

export default Main;
