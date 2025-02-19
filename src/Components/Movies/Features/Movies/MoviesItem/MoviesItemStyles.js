import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

export const MovieDetailsContainer = styled(Box)(({ theme }) => ({
    width: "100vw",
    minHeight: "60vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "80px 20px",
    marginTop: "30px",
    overflowX: "hidden",
    "&::before": {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.8) 10%, rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0.9) 100%)", // градієнт для кращого вигляду
    },

    [theme.breakpoints.up("md")]: {
        padding: "120px 60px",
    },
}));

export const MovieContent = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    zIndex: 2,
    color: "#fff",
    maxWidth: "1200px",
    width: "100%",
    gap: "20px",

    [theme.breakpoints.up("md")]: {
        flexDirection: "row",
        alignItems: "flex-start",
    },
}));

export const Poster = styled("img")(({ theme }) => ({
    maxWidth: "300px",
    borderRadius: "12px",
    boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.6)",
    transition: "transform 0.3s ease-in-out",

    "&:hover": {
        transform: "scale(1.05)",
    },

    [theme.breakpoints.up("md")]: {
        width: "35%",
    },
}));

export const MovieInfo = styled(Box)(({ theme }) => ({
    padding: "20px",
    maxWidth: "700px",
    textAlign: "center",
    zIndex: 2,

    [theme.breakpoints.up("md")]: {
        textAlign: "left",
        padding: "0 40px",
    },
}));

export const MovieTitle = styled(Typography)({
    fontWeight: "bold",
    fontSize: "2.5rem",
    marginBottom: "15px",
    textTransform: "uppercase",
    letterSpacing: "1px",
});

export const MovieTagline = styled(Typography)({
    fontSize: "1.3rem",
    fontStyle: "italic",
    color: "#b0b0b0",
    marginBottom: "25px",
});

export const MovieOverview = styled(Typography)({
    fontSize: "1.1rem",
    lineHeight: "1.8",
    color: "#ddd",
});

// Стилізуємо контейнер для актора
export const CastContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    overflowX: "auto",
    gap: "20px",
    justifyContent: "flex-start",
    padding: "20px 0",

    [theme.breakpoints.up("md")]: {
        gap: "24px",
    },
}));

// Стиль для кожного актора
export const ActorCard = styled(Box)(({ theme }) => ({
    textAlign: "center",
    width: "180px", // Increased card width
    boxSizing: "border-box",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
    overflow: "hidden",
    transition: "transform 0.3s ease-in-out",
    marginBottom: "15px",

    "&:hover": {
        transform: "scale(1.1)", // Easy zoom on hover
    },

    [theme.breakpoints.up("md")]: {
        width: "220px", // Expanded on larger screens
    },
}));

// Style for actor photo (replace Avatar with img)
export const ActorAvatar = styled("img")(({ theme }) => ({
    width: "120px",
    height: "160px",
    margin: "0 auto",
    objectFit: "cover", // To maintain proportions and avoid deformation
    boxShadow: "0 6px 15px rgba(0, 0, 0, 0.5)",
    transition: "transform 0.3s ease",

    "&:hover": {
        transform: "scale(1.1)", // Easy avatar enlargement on hover
    },

    [theme.breakpoints.up("md")]: {
        width: "130px", // Slightly larger avatar on large screens
        height: "170px", // Higher avatar on big screens
    },
}));



// Стиль для тексту під аватаркою
export const ActorName = styled(Typography)(({ theme }) => ({
    fontSize: "1.1rem", // Збільшено розмір шрифта
    fontWeight: "bold",
    marginTop: "8px",
    color: "#fff",
}));

// Стиль для тексту щодо персонажа
export const ActorCharacter = styled(Typography)(({ theme }) => ({
    fontSize: "1rem", // Збільшено розмір шрифта
    color: "#b0b0b0",
}));

export const ScrollableContainer = styled(Box)({
    display: "flex",
    overflowX: "auto",
    gap: "12px",
    padding: "10px 20px",
    scrollSnapType: "x mandatory",
    scrollPadding: "20px",
    WebkitOverflowScrolling: "touch",

    "&::-webkit-scrollbar": {
        height: "15px", // Let's make it a little thicker for visibility
    },
    "&::-webkit-scrollbar-track": {
        background: "rgb(232,230,230)", // Slightly darkened background
        borderRadius: "10px",
    },
    "&::-webkit-scrollbar-thumb": {
        background: "rgba(174,172,172,0.5)",
        borderRadius: "10px",
    },
    "&::-webkit-scrollbar-thumb:hover": {
        background: "rgba(142,140,140,0.7)",
    },
});