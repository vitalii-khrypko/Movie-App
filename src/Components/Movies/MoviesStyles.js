import { styled } from "@mui/material/styles";
import { Box, Grid, Card, Typography } from "@mui/material";

export const MoviesContainer = styled(Box)({
    backgroundColor: "#fff",  // білий фон
    color: "black",           // чорний текст для контрасту
    minHeight: "100vh",
    padding: "20px",
});

export const MovieCard = styled(Card)({
    backgroundColor: "#fff",  // світла заливка для картки (білий)
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",  // легка тінь для глибини
    transition: "transform 0.3s, box-shadow 0.3s",  // додано ефект на hover
    '&:hover': {
        transform: "scale(1.05)",  // злегка збільшена картка при наведенні
        boxShadow: "0 6px 15px rgba(0, 0, 0, 0.15)",  // посилена тінь на hover
    },
});

export const MovieTitle = styled(Typography)({
    fontWeight: 600,
    color: "#000000",
});

export const MovieOverview = styled(Typography)({
    color: "#555",  // більш темний сірий для опису, щоб текст був читабельним
});
