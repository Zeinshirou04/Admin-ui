import AuthLayout from "../../../Layout/AuthenticatedLayout";
import Sidebar from "../../../Components/Sidebar";
import Navbar from "../../../Components/Navbar";
import Card from "../../../Components/Card";
import BalanceCard from "../../../Components/BalanceCard";
import CardLabeled from "../../../Components/CardLabeled";
import MasterCardSvg from "../../../assets/svg/mastercard-logo.svg";
import { useState } from "react";

function Balances() {

    const [isActive, setActive] = useState({
        sidebar: false
    })

    let fullName = "Jane Doe";

    try {
        const user = JSON.parse(localStorage.getItem("user"));
        fullName = user.name && user.email.split("@")[0].indexOf(".") > -1 ? user.email.split(".")[0] : user.email.split("@")[0].split(".")[0];
    } catch (error) {
        console.error(error)
    }

    return (
        <AuthLayout>
            <div className="w-full h-full flex flex-row overflow-x-hidden relative lg:static">
                <Sidebar name={fullName} isActive={isActive} setActive={setActive} pageAt="balances" />
                <div className="w-full h-full flex flex-col gap-4">
                    <Navbar name={fullName} setActive={setActive} />
                    <div className="w-full h-full max-h-full">
                        <div className="w-full h-full overflow-y-auto grid grid-flow-row lg:grid-cols-3">
                            <div className="w-full h-16 lg:hidden"></div>
                            <div className="w-full flex flex-col col-span-3">
                                <header className="w-full text-2xl px-4 py-4">
                                    <h2 className="text-gray-2 font-semibold">
                                        Expenses Breakdown
                                    </h2>
                                </header>
                                <div className="w-full grid grid-cols-3">

                                    <CardLabeled labelOne="Credit Card" labelTwo="Master Card" labelTwoImg={MasterCardSvg}>
                                        <div className="flex flex-col gap-4 py-4 px-4">
                                            <div className="flex flex-col gap-1">
                                                <header className="w-full">
                                                    <h4 className="text-2xl font-bold">
                                                        1234 5678 1234 5***
                                                    </h4>
                                                </header>
                                                <p className="text-hint">
                                                    Account Number
                                                </p>
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <header className="w-full">
                                                    <h4 className="text-2xl font-bold">
                                                        $25000
                                                    </h4>
                                                </header>
                                                <p className="text-hint">
                                                    Total amount
                                                </p>
                                            </div>
                                            <div className="flex flex-row justify-between">

                                                <p className="text-link text-lg">
                                                    Remove
                                                </p>
                                                <button className="bg-primary py-2 px-4 rounded-md flex flex-row items-center gap-2">
                                                    <p className="text-white">Details</p>
                                                    <p className="text-white">{">"}</p>
                                                </button>
                                            </div>
                                        </div>
                                    </CardLabeled>
                                    <CardLabeled labelOne="Credit Card" labelTwo="Master Card" labelTwoImg={MasterCardSvg}>
                                        <div className="flex flex-col gap-4 py-4 px-4">
                                            <div className="flex flex-col gap-1">
                                                <header className="w-full">
                                                    <h4 className="text-2xl font-bold">
                                                        1234 5678 1234 5***
                                                    </h4>
                                                </header>
                                                <p className="text-hint">
                                                    Account Number
                                                </p>
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <header className="w-full">
                                                    <h4 className="text-2xl font-bold">
                                                        $25000
                                                    </h4>
                                                </header>
                                                <p className="text-hint">
                                                    Total amount
                                                </p>
                                            </div>
                                            <div className="flex flex-row justify-between">

                                                <p className="text-link text-lg">
                                                    Remove
                                                </p>
                                                <button className="bg-primary py-2 px-4 rounded-md flex flex-row items-center gap-2">
                                                    <p className="text-white">Details</p>
                                                    <p className="text-white">{">"}</p>
                                                </button>
                                            </div>
                                        </div>
                                    </CardLabeled>
                                    <CardLabeled labelOne="Credit Card" labelTwo="Master Card" labelTwoImg={MasterCardSvg}>
                                        <div className="flex flex-col gap-4 py-4 px-4">
                                            <div className="flex flex-col gap-1">
                                                <header className="w-full">
                                                    <h4 className="text-2xl font-bold">
                                                        1234 5678 1234 5***
                                                    </h4>
                                                </header>
                                                <p className="text-hint">
                                                    Account Number
                                                </p>
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <header className="w-full">
                                                    <h4 className="text-2xl font-bold">
                                                        $25000
                                                    </h4>
                                                </header>
                                                <p className="text-hint">
                                                    Total amount
                                                </p>
                                            </div>
                                            <div className="flex flex-row justify-between">

                                                <p className="text-link text-lg">
                                                    Remove
                                                </p>
                                                <button className="bg-primary py-2 px-4 rounded-md flex flex-row items-center gap-2">
                                                    <p className="text-white">Details</p>
                                                    <p className="text-white">{">"}</p>
                                                </button>
                                            </div>
                                        </div>
                                    </CardLabeled>
                                </div>
                                <div className="w-full grid grid-cols-3">

                                    <CardLabeled labelOne="Credit Card" labelTwo="Master Card" labelTwoImg={MasterCardSvg}>
                                        <div className="flex flex-col gap-4 py-4 px-4">
                                            <div className="flex flex-col gap-1">
                                                <header className="w-full">
                                                    <h4 className="text-2xl font-bold">
                                                        1234 5678 1234 5***
                                                    </h4>
                                                </header>
                                                <p className="text-hint">
                                                    Account Number
                                                </p>
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <header className="w-full">
                                                    <h4 className="text-2xl font-bold">
                                                        $25000
                                                    </h4>
                                                </header>
                                                <p className="text-hint">
                                                    Total amount
                                                </p>
                                            </div>
                                            <div className="flex flex-row justify-between">

                                                <p className="text-link text-lg">
                                                    Remove
                                                </p>
                                                <button className="bg-primary py-2 px-4 rounded-md flex flex-row items-center gap-2">
                                                    <p className="text-white">Details</p>
                                                    <p className="text-white">{">"}</p>
                                                </button>
                                            </div>
                                        </div>
                                    </CardLabeled>
                                    <CardLabeled labelOne="Credit Card" labelTwo="Master Card" labelTwoImg={MasterCardSvg}>
                                        <div className="flex flex-col gap-4 py-4 px-4">
                                            <div className="flex flex-col gap-1">
                                                <header className="w-full">
                                                    <h4 className="text-2xl font-bold">
                                                        1234 5678 1234 5***
                                                    </h4>
                                                </header>
                                                <p className="text-hint">
                                                    Account Number
                                                </p>
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <header className="w-full">
                                                    <h4 className="text-2xl font-bold">
                                                        $25000
                                                    </h4>
                                                </header>
                                                <p className="text-hint">
                                                    Total amount
                                                </p>
                                            </div>
                                            <div className="flex flex-row justify-between">

                                                <p className="text-link text-lg">
                                                    Remove
                                                </p>
                                                <button className="bg-primary py-2 px-4 rounded-md flex flex-row items-center gap-2">
                                                    <p className="text-white">Details</p>
                                                    <p className="text-white">{">"}</p>
                                                </button>
                                            </div>
                                        </div>
                                    </CardLabeled>
                                    <CardLabeled labelOne="Credit Card" labelTwo="Master Card" labelTwoImg={MasterCardSvg}>
                                        <div className="flex flex-col gap-4 py-4 px-4">
                                            <div className="flex flex-col gap-1">
                                                <header className="w-full">
                                                    <h4 className="text-2xl font-bold">
                                                        1234 5678 1234 5***
                                                    </h4>
                                                </header>
                                                <p className="text-hint">
                                                    Account Number
                                                </p>
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <header className="w-full">
                                                    <h4 className="text-2xl font-bold">
                                                        $25000
                                                    </h4>
                                                </header>
                                                <p className="text-hint">
                                                    Total amount
                                                </p>
                                            </div>
                                            <div className="flex flex-row justify-between">

                                                <p className="text-link text-lg">
                                                    Remove
                                                </p>
                                                <button className="bg-primary py-2 px-4 rounded-md flex flex-row items-center gap-2">
                                                    <p className="text-white">Details</p>
                                                    <p className="text-white">{">"}</p>
                                                </button>
                                            </div>
                                        </div>
                                    </CardLabeled>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthLayout>
    );
}

export default Balances;