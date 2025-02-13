import { styled } from "@mui/material/styles";
import { Box, Typography, Avatar } from "@mui/material";

export const MovieDetailsContainer = styled(Box)(({ theme }) => ({
    width: "100%",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "80px 20px",

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
    width: "100%",
    maxWidth: "400px",
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
    gap: "16px",
    justifyContent: "flex-start",
    padding: "20px 0",
    marginTop: "20px",

    [theme.breakpoints.up("md")]: {
        gap: "24px",
    },
}));

// Стиль для кожного актора
export const ActorCard = styled(Box)(({ theme }) => ({
    textAlign: "center",
    width: "120px", // Встановлено фіксовану ширину для карток актора
    boxSizing: "border-box",

    [theme.breakpoints.up("md")]: {
        width: "150px", // Розширюємо на більших екранах
    },
}));

// Стиль для аватарки актора
export const ActorAvatar = styled(Avatar)(({ theme }) => ({
    width: "90px", // Стандартний розмір
    height: "90px",
    margin: "0 auto",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.6)",
    transition: "transform 0.3s ease",

    "&:hover": {
        transform: "scale(1.05)", // Легке збільшення аватарки при наведенні
    },

    [theme.breakpoints.up("md")]: {
        width: "100px", // Трошки більша аватарка на великих екранах
        height: "100px",
    },
}));

// Стиль для тексту під аватаркою
export const ActorName = styled(Typography)(({ theme }) => ({
    fontSize: "1rem",
    fontWeight: "bold",
    marginTop: "8px",
    color: "#fff",
}));

// Стиль для тексту щодо персонажа
export const ActorCharacter = styled(Typography)(({ theme }) => ({
    fontSize: "0.875rem",
    color: "#b0b0b0",
}));

