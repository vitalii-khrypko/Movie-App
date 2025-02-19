import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const ActorContainer = styled(Box)({
    padding: '20px',
    backgroundColor: '#f4f4f4',
});

export const ActorInfo = styled(Box)({
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
});

export const PersonalInfo = styled(Box)({
    marginTop: '16px',
    textAlign: 'left',
    '& p': {
        margin: '8px 0',
    },
});

export const BioAndMovies = styled(Box)({
    flex: '2',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    textAlign: 'left',
    maxWidth: '100%',
    overflow: 'hidden',
    '& h4': {
        fontWeight: 'bold',
    },
    '& p': {
        wordWrap: 'break-word',
        overflowWrap: 'break-word', // Additional rule for older browsers
    }
});

export const MoviesContainer = styled(Box)({
    display: "flex",
    gap: 2,
    overflowX: "auto", // Allows horizontal scrolling
    flexWrap: "nowrap", // Movies are not wrapped to a new line
    marginTop: "20px",
    width: "100%", // Add width to the container to make scrolling work
    maxWidth: "100%", // We ensure that the container does not go beyond the limits
});


export const MovieCard = styled(Box)({
    textAlign: "center",
    maxWidth: '150px',
    '& img': {
        borderRadius: "8px",
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
        transition: "transform 0.3s ease",
        '&:hover': {
            transform: "scale(1.05)",
        },
    },
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
