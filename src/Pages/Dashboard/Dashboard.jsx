import { useState } from "react";

import AuthLayout from "../../Layout/AuthenticatedLayout";
import Navbar from "../../Components/Navbar";
import Sidebar from "../../Components/Sidebar";
import BalanceCard from "../../Components/BalanceCard";
import CardLabeled from "../../Components/CardLabeled";
import Card from "../../Components/Card";
import BillItem from "../../Components/BillItem";
import ExpensesItem from "../../Components/ExpensesItem";
import TransactionItem from "../../Components/TransactionItem";

import bills from "../../Data/bills";
import expensesBreakdowns from "../../Data/Expenses";
import transactions from "../../Data/transaction";

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

    const billCard = bills.map((bill) => <BillItem data={bill} />);
    const expensesCard = expensesBreakdowns.map((expensesBreakdown) => <ExpensesItem data={expensesBreakdown} />)
    const transactionCard = transactions.map((transaction) => {
        if(transaction.id <= 5) {
            return <TransactionItem data={transaction} />;
        }
    })

    return (
        <AuthLayout>
            <div className="w-full h-full flex flex-row overflow-x-hidden relative lg:static">
                <Sidebar name={fullName} isActive={isActive} setActive={setActive} pageAt="overview" />
                <div className="w-full h-full flex flex-col gap-2">
                    <Navbar name={fullName} setActive={setActive} />
                    <div className="w-full h-full max-h-full overflow-y-auto">
                        <div className="w-full h-full overflow-y-auto grid grid-flow-row lg:grid-cols-3">
                            <div className="w-full h-16 lg:hidden"></div>
                            <CardLabeled title="Total balance" labelOne="$240,399" labelTwo="All Accounts">
                                <BalanceCard accountType="Credit Card" cardNumber="1234567890123456" balance={25000} />
                            </CardLabeled>
                            <CardLabeled title="Goals" labelOne="$20,000" labelTwo="May, 2023">
                            </CardLabeled>
                            <Card title="Upcoming Bill">
                                {billCard}
                            </Card>
                            <Card title="Recent Transaction" className="row-span-2">
                                {transactionCard}
                            </Card>
                            <Card title="Statistics" className="col-span-2">

                            </Card>
                            <Card title="Expenses Breakdown" className="col-span-2">
                                <div className="grid grid-cols-3 grid-rows-2">
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
