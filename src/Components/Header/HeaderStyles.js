import { styled } from "@mui/material/styles";
import { Typography, Button } from "@mui/material";

export const HeaderContainer = styled("header")({
    backgroundColor: "#032541",  // темно-синій
});

export const HeaderTitle = styled(Typography)({
    color: "white",
    fontWeight: "bold",
});

export const NavList = styled("ul")({
    listStyleType: "none",
    display: "flex",
    gap: "20px",
    padding: 0,
});

export const NavButton = styled(Button)({
    color: "#fff",
});
