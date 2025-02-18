import { styled } from "@mui/material/styles";
import { Box, Card, Typography, Button } from "@mui/material";


export const MoviesContainer = styled(Box)({
    backgroundColor: "#fff",  // білий фон
    color: "black",           // чорний текст для контрасту
    minHeight: "100vh",
    padding: "20px",
});

export const MovieCard = styled(Card)({
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s, box-shadow 0.3s",
    '&:hover': {
        transform: "scale(1.05)",
        boxShadow: "0 6px 15px rgba(0, 0, 0, 0.15)",
    },
    cursor: "pointer",
    height: "500px",
    width: "250px",
    position: "relative", // ДОДАНО, щоб дочірні елементи правильно позиціонувалися
});


export const MovieTitle = styled(Typography)({
    fontWeight: 600,
    color: "#000000",
});

export const MovieOverview = styled(Typography)({
    color: "#555",  // більш темний сірий для опису, щоб текст був читабельним
});

export const CategoryButton = styled(Button, {
    shouldForwardProp: (prop) => prop !== "active"
})(({ active }) => ({
    backgroundColor: active ? "#032541" : "transparent",
    color: active ? "#fff" : "#032541",
    fontWeight: 600,
    textTransform: "uppercase",
    border: `2px solid #032541`,
    borderRadius: "20px",
    padding: "8px 16px",
    marginRight: "10px",
    marginLeft: "10px",
    transition: "all 0.3s ease",
    "&:hover": {
        backgroundColor: "#01b4e4",
        borderColor: "#01b4e4",
        color: "#fff",
    },
}));

export const MovieFooter = styled(Box)({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "8px",
    position: "absolute",
    bottom: "8px",
    left: "0",
    right: "0",
    background: "rgba(255, 255, 255, 0.8)", // Легке затемнення для видимості
});


export const MovieYear = styled(Typography)({
    fontSize: "14px",
    fontWeight: "bold",
    color: "#555",
});

export const MovieRating = styled(Typography)({
    fontSize: "14px",
    fontWeight: "bold",
    color: "#ffcc00",
});