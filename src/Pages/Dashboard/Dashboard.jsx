import { useState, useContext, useEffect } from "react";
import { ThemeContext } from "../../context/themeContext";
import { PageThemeContext } from "../../context/pageThemeContext";
import axios from "axios";

import AuthLayout from "../../Layout/AuthenticatedLayout";
import Navbar from "../../Components/Navbar";
import Sidebar from "../../Components/Sidebar";
import BalanceCard from "../../Components/BalanceCard";
import CardLabeled from "../../Components/CardLabeled";
import Card from "../../Components/Card";
import BillItem from "../../Components/BillItem";
import ExpensesItem from "../../Components/ExpensesItem";
import TransactionItem from "../../Components/TransactionItem";
import Stepper from "../../Components/Elements/Stepper";
import CardStatistic from "../../Components/Fragments/Dashboard/CardStatistic";
import CardGoal from "../../Components/Fragments/Dashboard/CardGoal";

import expensesBreakdowns from "../../Data/Expenses";
import transactions from "../../Data/Transaction";
import accounts from "../../Data/AccountsData";

function Dashboard() {

    const [isActive, setActive] = useState({
        sidebar: false
    })
    const { theme } = useContext(ThemeContext);
    const { dark, setDark } = useContext(PageThemeContext);

    let fullName = "Jane Doe";

    try {
        const user = JSON.parse(localStorage.getItem("user"));
        fullName = user.name && user.email.split("@")[0].indexOf(".") > -1 ? user.email.split(".")[0] : user.email.split("@")[0].split(".")[0];
    } catch (error) {
        console.error(error)
    }

    const [billCard, setBillCard] = useState();

    const getData = async () => {
        try {
            const refreshToken = localStorage.getItem("refreshToken");

            const response = await axios.get(
                "https://jwt-auth-eight-neon.vercel.app/bills",
                {
                    headers: {
                        Authorization: `Bearer ${refreshToken}`,
                    },
                }
            );

            const bills = response.data.data;
            setBillCard(bills.map((bill) => <BillItem data={bill} />));
        } catch (error) {
            if (error.response) {
                if (error.response.status == 401) {
                    setOpen(true);
                    setMsg({
                        severity: "error",
                        desc: "Session Has Expired. Please Login.",
                    });

                    setIsLoggedIn(false);
                    setName("");

                    localStorage.removeItem("refreshToken");
                    navigate("/login");
                } else {
                    console.log(error.response);
                }
            }
        }
    };

    useEffect(() => {
        getData();
    }, []);

    const expensesCard = expensesBreakdowns.map((expensesBreakdown) => <ExpensesItem data={expensesBreakdown} />)
    const transactionCard = transactions.map((transaction) => {
        if (transaction.id <= 5) {
            return <TransactionItem data={transaction} />;
        }
    })
    const balanceCard = accounts.map((account) => <BalanceCard data={account} />)

    return (
        <AuthLayout>
            <div className={`w-full h-full flex flex-row overflow-x-hidden relative lg:static ${theme.name} ${dark && "bg-slate-600"}`}>
                <Sidebar name={fullName} isActive={isActive} setActive={setActive} pageAt="overview" />
                <div className="w-full h-full flex flex-col gap-2">
                    <Navbar setActive={setActive} />
                    <div className="w-full h-full max-h-full overflow-y-auto">
                        <div className="w-full h-full overflow-y-auto grid grid-flow-row lg:grid-cols-3">
                            <div className="w-full h-16 lg:hidden"></div>
                            <CardLabeled title="Total balance" labelOne="$240,399" labelTwo="All Accounts">
                                <div className="h-full flex flex-col">
                                    <Stepper desc={balanceCard} />
                                </div>
                            </CardLabeled>
                            <CardGoal />
                            <Card title="Upcoming Bill">
                                <div className="w-full h-full flex flex-col px-8 py-6">
                                    {billCard}
                                </div>
                            </Card>
                            <Card title="Recent Transaction" className="row-span-2">
                                <div className="w-full h-full flex flex-col px-8 py-6">
                                    {transactionCard}
                                </div>
                            </Card>
                            <CardStatistic />
                            <Card title="Expenses Breakdown" className="col-span-2">
                                <div className="grid grid-cols-3 grid-rows-2 px-8 py-6">
                                    {expensesCard}
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </AuthLayout>
    );
}

export default Dashboard;
