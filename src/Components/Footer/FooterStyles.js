import { styled } from "@mui/material/styles";
import { Typography, Button, Grid } from "@mui/material";

export const FooterContainer = styled("footer")({
    backgroundColor: "#032541",  // темно-синій
    padding: "20px 0",
    marginTop: "50px",
});

export const FooterText = styled(Typography)({
    color: "white",
});

export const FooterNavList = styled("ul")({
    listStyleType: "none",
    display: "flex",
    gap: "20px",
    padding: 0,
});

export const FooterNavButton = styled(Button)({
    color: "#bbb",
});
