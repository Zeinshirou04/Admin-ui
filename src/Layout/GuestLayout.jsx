import { useContext } from "react";
import { NotifContext } from "../context/notifContext";
import SimpleBackdrop from "../Components/Elements/Backdrop";
import CustomizedSnackbars from "../Components/Elements/SnackBar";

function GuestLayout({ children }) {
    const { msg, setMsg, open, setOpen, isLoading, setIsLoading } = useContext(NotifContext);

    return (
        <main className="bg-main w-svw h-svh tracking-wide font-inter">
            {isLoading && (
                <SimpleBackdrop isLoading={isLoading} setIsLoading={setIsLoading} />
            )}
            {msg && (
                <CustomizedSnackbars severity={msg.severity} message={msg.desc} open={open} setOpen={open} />
            )}
            {children}
        </main>
    );
}

export default GuestLayout;
