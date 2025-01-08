import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

export default function SimpleBackdrop(props) {
    const { isLoading, setIsLoading, className = "" } = props;

    return (
        <Backdrop
            id="loadingScreen"
            className={className}
            sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
            open={isLoading}
        >
            <CircularProgress color="inherit" />
        </Backdrop>
    );
}