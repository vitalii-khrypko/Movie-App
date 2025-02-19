import { Container, Grid } from "@mui/material";
import { HeaderContainer, HeaderTitle, NavList, NavButton } from "./HeaderStyles";
import {Link} from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSection } from "../../Redux/scrollSlice";


const Header = () => {
    const dispatch = useDispatch();

    return (
        <HeaderContainer>
            <Container>
                <Grid container justifyContent="space-between" alignItems="center" py={2}>
                    <Grid item>
                        <Link to={`/Movie-App`} style={{ textDecoration: "none", color: "inherit" }}>
                            <HeaderTitle variant="h6">
                                Movie Explorer
                            </HeaderTitle>
                        </Link>
                    </Grid>
                    <Grid item>
                        <nav>
                            <NavList>
                                <li><NavButton onClick={() => dispatch(setSection("movies"))}>Movies</NavButton></li>
                                <li><NavButton onClick={() => dispatch(setSection("tvshows"))}>TV Shows</NavButton></li>
                                <li><NavButton onClick={() => dispatch(setSection("people"))}>People</NavButton></li>
                            </NavList>
                        </nav>
                    </Grid>
                </Grid>
            </Container>
        </HeaderContainer>
    );
};

export default Header;
