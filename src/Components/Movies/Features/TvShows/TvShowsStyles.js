import { styled } from "@mui/material/styles";
import {Button, Typography} from "@mui/material";

export const TvTitle = styled(Typography)({
    fontWeight: 600,
    color: "#000000",
    marginTop: "30px"
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