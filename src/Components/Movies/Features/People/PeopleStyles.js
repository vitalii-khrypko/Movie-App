import { styled } from "@mui/material/styles";
import { Box, Card, Typography, Button } from "@mui/material";


export const PeopleContainer = styled(Box)({
    backgroundColor: "#fff",  // білий фон
    color: "black",           // чорний текст для контрасту
    minHeight: "100vh",
    padding: "20px",
});

export const PeopleCard = styled(Card)({
    backgroundColor: "#fff",  // світла заливка для картки (білий)
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",  // легка тінь для глибини
    transition: "transform 0.3s, box-shadow 0.3s",  // додано ефект на hover
    '&:hover': {
        transform: "scale(1.05)",  // злегка збільшена картка при наведенні
        boxShadow: "0 6px 15px rgba(0, 0, 0, 0.15)",  // посилена тінь на hover
    },
    cursor: "pointer",
    height: "500px",
    width: "250px",
    position: "relative",
    marginBottom: "15px",
});

export const PeopleTitle = styled(Typography)({
    fontWeight: 600,
    color: "#000000",
});

export const PeopleOverview = styled(Typography)({
    color: "#555",  // більш темний сірий для опису, щоб текст був читабельним
});

export const PeopleFooter = styled(Box)({
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

export const PeopleRating = styled(Typography)({
    fontSize: "14px",
    fontWeight: "bold",
    color: "#ffcc00",
});

export const ScrollableContainer = styled(Box)({
    display: "flex",
    overflowX: "auto",
    gap: "12px",
    padding: "10px 20px",
    scrollSnapType: "x mandatory",
    scrollPadding: "20px",
    WebkitOverflowScrolling: "touch",

    "&::-webkit-scrollbar": {
        height: "15px", // Зробимо трохи товстішим для видимості
    },
    "&::-webkit-scrollbar-track": {
        background: "rgb(232,230,230)", // Трохи затемнений фон
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