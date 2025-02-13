import { CategoryButton, TvTitle } from "./TvShowsStyles";

const TvShows = () => {
    return (
        <TvTitle variant="h4" align="left" mb={4}>
            TV Shows
            <CategoryButton onClick="" active="">
                Popular
            </CategoryButton>
            <CategoryButton onClick="" active="">
                Airing Today
            </CategoryButton>
            <CategoryButton onClick="" active="">
                On TV
            </CategoryButton>
            <CategoryButton onClick="" active="">
                Top Rated
            </CategoryButton>
        </TvTitle>
    )
}

export default TvShows;