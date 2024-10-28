import overviewActive from "../assets/svg/overviewActive.svg"
import WalletActive from "../assets/svg/walletActive.svg"
import LogoutInactive from "../assets/svg/logoutInactive.svg"
import NotificationWhite from "../assets/svg/notificationWhite.svg"
import SearchSvg from "../assets/svg/search.svg"
import TransactionsActive from "../assets/svg/transactionActive.svg"
import BillsActive from "../assets/svg/billActive.svg"
import ExpensesActive from "../assets/svg/expensesActive.svg"
import GoalsActive from "../assets/svg/goalActive.svg"
import SettingsActive from "../assets/svg/settingsActive.svg"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Sidebar({ isActive, setActive }) {

    const navigate = useNavigate();

    const [isSearching, setSearching] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem("user")
        navigate("/login");
    }

    return (
        <div className={"w-full h-full flex flex-col gap-4 justify-between items-center px-4 pb-12 lg:pt-16 pt-6 absolute bg-black-default z-10 transition-transform duration-200 ease-in-out lg:static lg:-translate-x-0 lg:w-1/5 " + (isActive.sidebar ? "-translate-x-0" : "-translate-x-full")}>
            <div className="w-full flex flex-row justify-end px-4 lg:hidden">
                <button className="h-6" onClick={() => {
                    setActive((prevState) => ({
                        ...prevState,
                        sidebar: false
                    }))
                }}>
                    <i class="text-white font-bold fa-solid fa-x"></i>
                </button>
            </div>
            <header className="text-3xl">
                <h1 className="text-white font-poppins tracking-wider">
                    <span className="font-bold">FINE</span>bank.
                    <span className="font-bold">IO</span>
                </h1>
            </header>
            <div className="w-3/4 pl-4 py-2 flex flex-row justify-between items-center gap-4 lg:hidden">
                <div className="h-9">
                    <img className="h-full" src={NotificationWhite} alt="Notification Icon" />
                </div>
                <div className="w-full h-9 relative">
                    <input className="w-full text-sm py-2 px-2 rounded-md" placeholder="Search here" type="text" onFocus={() => {
                        setSearching(true)
                    }} onBlur={(e) => {
                        e.target.value != "" ? setSearching(true) : setSearching(false)
                    }} />
                    <img className={"absolute top-1.5 right-2 h-6 " + (isSearching ? "hidden" : "")} src={SearchSvg} alt="Search icon" />
                </div>
            </div>
            <div className="flex flex-col h-full w-3/4 gap-4">
                <button className="px-4 py-3 w-full flex flex-row items-center gap-4 text-white/70 active:bg-primary focus:bg-primary rounded-md active:font-semibold focus:font-semibold active:text-white focus:text-white">
                    <div className="h-8">
                        <img className="h-full" src={overviewActive} alt="Overview icon" />
                    </div>
                    <h4 className="text-lg tracking-wide">
                        Overview
                    </h4>
                </button>
                <button className="px-4 py-3 w-full flex flex-row items-center gap-4 text-white/70 active:bg-primary focus:bg-primary rounded-md active:font-semibold focus:font-semibold active:text-white focus:text-white">
                    <div className="h-8">
                        <img className="h-full" src={WalletActive} alt="Overview icon" />
                    </div>
                    <h4 className="text-lg tracking-wide">
                        Balances
                    </h4>
                </button>
                <button className="px-4 py-3 w-full flex flex-row items-center gap-4 text-white/70 active:bg-primary focus:bg-primary rounded-md active:font-semibold focus:font-semibold active:text-white focus:text-white">
                    <div className="h-8">
                        <img className="h-full" src={TransactionsActive} alt="Overview icon" />
                    </div>
                    <h4 className="text-lg tracking-wide">
                        Transactions
                    </h4>
                </button>
                <button className="px-4 py-3 w-full flex flex-row items-center gap-4 text-white/70 active:bg-primary focus:bg-primary rounded-md active:font-semibold focus:font-semibold active:text-white focus:text-white">
                    <div className="h-8">
                        <img className="h-full" src={BillsActive} alt="Overview icon" />
                    </div>
                    <h4 className="text-lg tracking-wide">
                        Bills
                    </h4>
                </button>
                <button className="px-4 py-3 w-full flex flex-row items-center gap-4 text-white/70 active:bg-primary focus:bg-primary rounded-md active:font-semibold focus:font-semibold active:text-white focus:text-white">
                    <div className="h-8">
                        <img className="h-full" src={ExpensesActive} alt="Overview icon" />
                    </div>
                    <h4 className="text-lg tracking-wide">
                        Expenses
                    </h4>
                </button>
                <button className="px-4 py-3 w-full flex flex-row items-center gap-4 text-white/70 active:bg-primary focus:bg-primary rounded-md active:font-semibold focus:font-semibold active:text-white focus:text-white">
                    <div className="h-8">
                        <img className="h-full" src={GoalsActive} alt="Overview icon" />
                    </div>
                    <h4 className="text-lg tracking-wide">
                        Goals
                    </h4>
                </button>
                <button className="px-4 py-3 w-full flex flex-row items-center gap-4 text-white/70 active:bg-primary focus:bg-primary rounded-md active:font-semibold focus:font-semibold active:text-white focus:text-white">
                    <div className="h-8">
                        <img className="h-full" src={SettingsActive} alt="Overview icon" />
                    </div>
                    <h4 className="text-lg tracking-wide">
                        Settings
                    </h4>
                </button>
            </div>
            <div className="w-3/4">
                <div className="w-full pb-10 border-b-2 border-b-white/10">
                    <button className="w-full flex flex-row items-center gap-3 bg-white/10 px-4 py-3 rounded-md" onClick={handleLogout}>
                        <img className="h-6" src={LogoutInactive} alt="Logout Icon" />
                        <h5 className="text-white leading-none text-md">
                            Logout
                        </h5>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;