import { Container, Grid } from "@mui/material";
import { HeaderContainer, HeaderTitle, NavList, NavButton } from "./HeaderStyles";

const Header = () => {
    return (
        <HeaderContainer>
            <Container>
                <Grid container justifyContent="space-between" alignItems="center" py={2}>
                    <Grid item>
                        <HeaderTitle variant="h4">Movie Explorer</HeaderTitle>
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
