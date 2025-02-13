import { Container, Grid } from "@mui/material";
import { HeaderContainer, HeaderTitle, NavList, NavButton } from "./HeaderStyles";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <HeaderContainer>
            <Container>
                <Grid container justifyContent="space-between" alignItems="center" py={2}>
                    <Grid item>
                        <Link to={`/Movie-App`} style={{ textDecoration: "none", color: "inherit" }}>
                            <HeaderTitle variant="h4">
                                Movie Explorer
                            </HeaderTitle>
                        </Link>
                    </Grid>
                    <Grid item>
                        <nav>
                            <NavList>
                                <li><NavButton>Home</NavButton></li>
                                <li><NavButton>Movies</NavButton></li>
                                <li><NavButton>Favorites</NavButton></li>
                            </NavList>
                        </nav>
                    </Grid>
                </Grid>
            </Container>
        </HeaderContainer>
    );
};

export default Header;
