import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import Movies from "./Features/Movies/Movies";
import TvShows from "./Features/TvShows/TvShows";

const Main = () => {
    const section = useSelector((state) => state.scroll.section);
    const moviesRef = useRef(null);
    const tvShowsRef = useRef(null);

    useEffect(() => {
        if (section === "movies" && moviesRef.current) {
            moviesRef.current.scrollIntoView({ behavior: "smooth" });
        } else if (section === "tvshows" && tvShowsRef.current) {
            tvShowsRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [section]);

    return (
        <>
            <div ref={moviesRef}>
                <Movies />
            </div>
            <div ref={tvShowsRef}>
                <TvShows />
            </div>
        </>
    );
};

export default Main;
