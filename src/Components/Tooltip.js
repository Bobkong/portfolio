import { styled } from "@mui/material/styles";
import { Zoom } from "@mui/material";
import MTooltip, { tooltipClasses } from '@mui/material/Tooltip';

const Tooltip = styled((({ className, ...props }) => (
    <MTooltip
        TransitionComponent={Zoom}
        enterTouchDelay={0}
        leaveTouchDelay={5000}
        {...props}
        classes={{ popper: className }}
    />
)))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: "#212121",
        color: "#f0f0f0",
        maxWidth: "20rem",
        fontFamily: "instagram-sans",
        fontSize: "1.2rem",
        padding: theme.spacing(1.2, 1.6),
        "& .MuiTooltip-arrow": {
            color: "#212121",
        },
        textAlign: "center"
    },
}));

export default Tooltip;