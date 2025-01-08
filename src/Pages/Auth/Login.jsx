import GuestLayout from "../../Layout/GuestLayout";
import GoogleLogo from "../../assets/svg/Google.svg";
import TextInput from "../../Components/TextInput";
import IconButton from "../../Components/IconButton";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { NotifContext } from "../../context/notifContext";
import { PageThemeContext } from "../../context/pageThemeContext";
import { jwtDecode } from "jwt-decode";
import * as motion from "motion/react-client"

function Login() {

    const { setMsg, setOpen, setIsLoading } = useContext(NotifContext);
    const { setIsLoggedIn, setName } = useContext(AuthContext);
    const { dark, setDark } = useContext(PageThemeContext);

    // setOpen(false);

    const { register, handleSubmit, formState: { errors, isValid } } = useForm({
        mode: "onChange"
    });

    const navigate = useNavigate();

    const onFormSubmit = async (data) => {
        setIsLoading(true);
        try {
            const response = await axios.post(
                "https://jwt-auth-eight-neon.vercel.app/login",
                {
                    email: data.email,
                    password: data.password,
                }
            );

            const decoded = jwtDecode(response.data.refreshToken);

            setIsLoading(false);
            setOpen(true);
            setMsg({ severity: "success", desc: "Login Success" });

            // console.log(response);
            setIsLoggedIn(true);
            localStorage.setItem("refreshToken", response.data.refreshToken);
            setName(decoded.name);
            navigate("/");
        } catch (error) {
            setIsLoading(false);
            if (error.response) {
                // console.log(error.response);
                setOpen(true);
                setMsg({ severity: "error", desc: error.response.data.msg });
            }
        }
    };

    return (
        <GuestLayout>
            <div className={"w-full h-full text-center flex flex-col justify-center items-center px-4 lg:px-0 transition-colors ease-in-out " + (!dark ? "" : "bg-slate-600 text-white")}>
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.4,
                        scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                    }}
                    className="w-full lg:w-1/4 p-2">
                    <header className="text-center w-full text-4xl tracking-widest pb-20 animate-bounce">
                        <h1 className="text-link font-poppins">
                            <span className="font-bold">FINE</span>bank.
                            <span className="font-bold">IO</span>
                        </h1>
                    </header>
                    <div className="w-full">
                        <form
                            className="flex flex-col gap-5 text-left"
                            onSubmit={handleSubmit(onFormSubmit)}
                        >
                            <div className="flex flex-col gap-2">
                                <label htmlFor="email" className="font-medium">
                                    Email Address
                                </label>
                                <TextInput
                                    id="email"
                                    type="email"
                                    name="email"
                                    placeholder="hello@example.com"
                                    register={{
                                        ...register("email", {
                                            required: "Email address is required",
                                            pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                message: "Invalid email address format",
                                            }
                                        })
                                    }}
                                />
                                {errors?.email && (
                                    <div id="errEmail" className="text-red-500">{errors.email.message}</div>
                                )}
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="flex flex-row justify-between items-end">
                                    <label htmlFor="password" className="font-medium">
                                        Password
                                    </label>
                                    <button className="text-xs text-link" onClick={() => { navigate("/forgot/password") }}>
                                        Forgot Password?
                                    </button>
                                </div>
                                <TextInput
                                    id="password"
                                    type="password"
                                    name="password"
                                    placeholder="●●●●●●●●●●●●●●"
                                    register={{
                                        ...register("password", {
                                            required: "Password is required",
                                        })
                                    }}
                                />
                                {errors?.password && (
                                    <div id="errPassword" className="text-red-500">{errors.password.message}</div>
                                )}
                            </div>
                            <div className="flex flex-row gap-2">
                                <input
                                    type="checkbox"
                                    name="remember"
                                    className="accent-primary"
                                />
                                <label htmlFor="remember" className="font-light text-sm">
                                    Keep me signed in
                                </label>
                            </div>
                            <input
                                type="submit"
                                value="Login"
                                className={!isValid ? "bg-gray-200 text-gray-400 py-4 rounded-md hover:cursor-pointer" : "bg-primary text-white py-4 rounded-md hover:cursor-pointer zoom-in"}
                                disabled={!isValid ? "disabled" : ""}
                            />
                            <div className="flex flex-row justify-center items-center gap-2">
                                <div className="w-16 h-0.5 bg-hint"></div>
                                <p className="text-xs text-hint">Or Sign In With</p>
                                <div className="w-16 h-0.5 bg-hint"></div>
                            </div>
                            <IconButton
                                src={GoogleLogo}
                                alt="Google Icon for Sign In with Google"
                                label="Continue with Google"
                                className={!dark ? "" : "bg-primary"}
                            />
                            <button
                                className="text-center text-link text-sm font-medium py-6"
                                onClick={() => { navigate("/register") }}
                            >
                                Create an Account
                            </button>
                        </form>
                        <div className="flex gap-3 justify-center">
                            <button onClick={() => {
                                setDark(false);
                            }}>
                                Light
                            </button>
                            <button onClick={() => {
                                setDark(true);
                            }}>
                                Dark
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </GuestLayout>
    );
}

export default Login;
