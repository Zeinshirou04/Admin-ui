import AuthLayout from "../../layout/AuthenticatedLayout";
import Navbar from "../../Components/Navbar";
import Sidebar from "../../Components/Sidebar";
import BalanceCard from "../../Components/BalanceCard";
import CardLabeled from "../../Components/CardLabeled";
import { useState } from "react";

function Dashboard() {

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
                <Sidebar isActive={isActive} setActive={setActive} />
                <div className="w-full h-full flex flex-col gap-4">
                    <Navbar name={fullName} setActive={setActive} />
                    <div className="w-full h-full max-h-full">
                        <div className="w-full h-full overflow-y-auto grid grid-flow-row lg:grid-cols-3">
                            <div className="w-full h-16 lg:hidden"></div>
                            <CardLabeled title="Total balance" labelOne="$240,399" labelTwo="All Accounts">
                                <BalanceCard accountType="Credit Card" cardNumber="1234567890123456" balance={25000} />
                            </CardLabeled>
                            <CardLabeled title="Total balance" labelOne="$240,399" labelTwo="All Accounts">
                                <BalanceCard accountType="Credit Card" cardNumber="1234567890123456" balance={25000} />
                            </CardLabeled>
                            <CardLabeled title="Total balance" labelOne="$240,399" labelTwo="All Accounts">
                                <BalanceCard accountType="Credit Card" cardNumber="1234567890123456" balance={25000} />
                            </CardLabeled>
                            <CardLabeled title="Total balance" labelOne="$240,399" labelTwo="All Accounts" className="lg:row-span-2">
                                <BalanceCard accountType="Credit Card" cardNumber="1234567890123456" balance={25000} />
                            </CardLabeled>
                            <CardLabeled title="Total balance" labelOne="$240,399" labelTwo="All Accounts" className="lg:col-span-2">
                                <BalanceCard accountType="Credit Card" cardNumber="1234567890123456" balance={25000} />
                            </CardLabeled>
                            <CardLabeled title="Total balance" labelOne="$240,399" labelTwo="All Accounts" className="lg:col-span-2">
                                <BalanceCard accountType="Credit Card" cardNumber="1234567890123456" balance={25000} />
                            </CardLabeled>
                        </div>
                    </div>
                </div>
            </div>
        </AuthLayout>
    );
}

export default Dashboard;
