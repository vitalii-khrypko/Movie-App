import { Container, Grid } from "@mui/material";
import { FooterContainer, FooterText, FooterNavList, FooterNavButton } from "./FooterStyles";

const Footer = () => {
    return (
        <FooterContainer>
            <Container>
                <Grid container justifyContent="space-between" alignItems="center" py={2}>
                    <Grid item>
                        <FooterText variant="body2">
                            &copy; {new Date().getFullYear()} Movie Explorer. All rights reserved.
                        </FooterText>
                    </Grid>
                    <Grid item>
                        <nav>
                            <FooterNavList>
                                <li><FooterNavButton size="small">Privacy Policy</FooterNavButton></li>
                                <li><FooterNavButton size="small">Terms of Service</FooterNavButton></li>
                                <li><FooterNavButton size="small">Contact</FooterNavButton></li>
                            </FooterNavList>
                        </nav>
                    </Grid>
                </Grid>
            </Container>
        </FooterContainer>
    );
};

export default Footer;
