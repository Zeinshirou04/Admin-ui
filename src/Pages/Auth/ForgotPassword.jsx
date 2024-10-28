import GuestLayout from "../../layout/GuestLayout";
import TextInput from "../../Components/TextInput";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ForgotPassword() {

    const navigate = useNavigate();

    const [data, setData] = useState({
        email: undefined,
    });

    return (
        <GuestLayout>
            <div className="w-full h-full text-center flex flex-col justify-center items-center px-4 lg:px-0">
                <div className="w-full lg:w-1/4 p-2">
                    <header className="text-center w-full text-4xl tracking-widest mb-8">
                        <h1 className="text-link font-poppins">
                            <span className="font-bold">FINE</span>bank.
                            <span className="font-bold">IO</span>
                        </h1>
                    </header>
                    <div className="w-full">
                        <header className="text-primary text-center w-full mb-8">
                            <h2 className="font-bold text-2xl mb-2">Forgot Password</h2>
                            <h4 className="w-3/4 text-2x text-hint mx-auto">
                                Enter your email address to get the password reset link.
                            </h4>
                        </header>
                        <form className="flex flex-col gap-5 text-left">
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

                            <input
                                type="submit"
                                value="Password Reset"
                                className="bg-primary text-white py-4 rounded-md hover:cursor-pointer"
                            />

                            <div className="w-full text-center">
                                <button className="text-hint font-semibold" onClick={() => { navigate("/login") }}>
                                    Back to login
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </GuestLayout>
    );
}

export default ForgotPassword;
