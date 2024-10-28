import GuestLayout from "../../layout/GuestLayout";
import GoogleLogo from "../../assets/svg/Google.svg";
import TextInput from "../../Components/TextInput";
import IconButton from "../../Components/IconButton";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register({ setAuth }) {

    const navigate = useNavigate();

    const [data, setData] = useState({
        name: undefined,
        email: undefined,
        password: undefined,
    });

    return (
        <GuestLayout>
            <div className="w-full h-full text-center flex flex-col justify-center items-center px-4 lg:px-0">
                <div className="w-full lg:w-1/4 p-2">
                    <header className="text-center w-full text-4xl tracking-widest pb-8">
                        <h1 className="text-link font-poppins">
                            <span className="font-bold">FINE</span>bank.
                            <span className="font-bold">IO</span>
                        </h1>
                    </header>
                    <div className="w-full">
                        <header className="text-primary text-center w-full pb-8">
                            <h2 className="font-bold text-2xl">
                                Create An Account
                            </h2>
                        </header>
                        <form className="flex flex-col gap-5 text-left">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="email" className="font-medium">
                                    Name
                                </label>
                                <TextInput
                                    type="text"
                                    name="name"
                                    placeholder="John Doe"
                                    value={data.name}
                                    onChange={(e) =>
                                        setData((prevState) => ({
                                            ...prevState,
                                            name: e.target.value,
                                        }))
                                    }
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="email" className="font-medium">
                                    Email Address
                                </label>
                                <TextInput
                                    type="email"
                                    name="email"
                                    placeholder="hello@example.com"
                                    value={data.email}
                                    onChange={(e) =>
                                        setData((prevState) => ({
                                            ...prevState,
                                            email: e.target.value,
                                        }))
                                    }
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="email" className="font-medium">
                                    Password
                                </label>
                                <TextInput
                                    type="password"
                                    name="password"
                                    placeholder="●●●●●●●●●●●●●●"
                                    value={data.password}
                                    onChange={(e) =>
                                        setData((prevState) => ({
                                            ...prevState,
                                            password: e.target.value,
                                        }))
                                    }
                                />
                            </div>
                            <div className="flex flex-row gap-2">
                                <input
                                    type="checkbox"
                                    name="remember"
                                    className="accent-primary"
                                />
                                <label htmlFor="remember" className="font-light text-sm">
                                    By continuing, you agree to our{" "}
                                    <a href="#" className="text-link">
                                        terms of service.
                                    </a>
                                </label>
                            </div>
                            <input
                                type="submit"
                                value="Register"
                                className="bg-primary text-white py-4 rounded-md hover:cursor-pointer"
                            />
                            <div className="flex flex-row justify-center items-center gap-2">
                                <div className="w-16 h-0.5 bg-hint"></div>
                                <p className="text-xs text-hint">Or Sign Up With</p>
                                <div className="w-16 h-0.5 bg-hint"></div>
                            </div>
                            <IconButton
                                src={GoogleLogo}
                                alt="Google Icon for Sign In with Google"
                                label="Continue with Google"
                            />
                            <div className="w-full">
                                <p className="text-center text-hint text-sm font-medium py-6">
                                    Already have an account?{" "}
                                    <button className="!text-link" onClick={() => {navigate("/login")}}>
                                        Sign in here
                                    </button>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </GuestLayout>
    );
}

export default Register;
