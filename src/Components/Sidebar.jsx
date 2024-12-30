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
import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { ThemeContext } from "../context/themeContext"
import { AuthContext } from "../context/authContext"
import { NotifContext } from "../context/notifContext"
import axios from "axios"

function Sidebar({ isActive, setActive, pageAt = '' }) {

    const themes = [
        { name: "theme-green", bgcolor: "bg-[#299D91]", color: "#299D91" },
        { name: "theme-blue", bgcolor: "bg-[#1E90FF]", color: "#1E90FF" },
        { name: "theme-purple", bgcolor: "bg-[#6A5ACD]", color: "#6A5ACD" },
        { name: "theme-pink", bgcolor: "bg-[#DB7093]", color: "#DB7093" },
        { name: "theme-brown", bgcolor: "bg-[#8B4513]", color: "#8B4513" },
    ];

    const { theme, setTheme } = useContext(ThemeContext);
    const { setIsLoggedIn, setName, name } = useContext(AuthContext);
    const { setMsg, setOpen, setIsLoading } = useContext(NotifContext);
    const navigate = useNavigate();

    setOpen(false);

    const [isSearching, setSearching] = useState(false);

    const refreshToken = localStorage.getItem("refreshToken");

    const handleLogout = async () => {
        setIsLoading(true);
        try {
            await axios.get("https://jwt-auth-eight-neon.vercel.app/logout", {
                headers: {
                    Authorization: `Bearer ${refreshToken}`
                }
            })

            setOpen(true);
            setMsg({ severity: "Success", desc: "Login Success" });
        } catch (error) {
            setIsLoading(false);
            if (error.response) {
                setOpen(true);
                setMsg({ severity: "Error", desc: error.response.data.msg });
            }
        }
        setIsLoggedIn(false);
        setName("");
        setIsLoading(false);

        localStorage.removeItem("refreshToken")
        navigate("/login");
    }

    const handleClickMenu = (route) => {
        navigate(route);
    }

    return (
        <div className={"w-full h-full flex flex-col gap-4 justify-between items-center px-4 pb-12 lg:pt-16 pt-6 absolute bg-black-default z-10 transition-transform duration-200 ease-in-out lg:static lg:-translate-x-0 lg:w-1/5 " + (isActive.sidebar ? "-translate-x-0 " : "-translate-x-full ") + theme.name}>
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
                {/* <Navlink icon={overviewActive} label="Overview" page={pageAt.toLowerCase()} /> */}
                <button className={"px-4 py-3 w-full flex flex-row items-center gap-4 rounded-md hover:font-semibold active:font-semibold focus:font-semibold hover:text-white active:text-white focus:text-white " + (pageAt.toLowerCase() == 'overview' ? 'text-white bg-primary font-semibold hover:bg-primary active:bg-primary focus:bg-primary active:text-white focus:text-white' : ' text-white/70 hover:bg-primary active:bg-primary focus:bg-primary')} onClick={() => {
                    handleClickMenu("/dashboard");
                }}>
                    <div className="h-8">
                        <img className="h-full" src={overviewActive} alt="Overview icon" />
                    </div>
                    <h4 className="text-lg tracking-wide">
                        Overview
                    </h4>
                </button>
                <button className={"px-4 py-3 w-full flex flex-row items-center gap-4 rounded-md hover:font-semibold active:font-semibold focus:font-semibold hover:text-white active:text-white focus:text-white " + (pageAt.toLowerCase() == 'balances' ? 'text-white bg-primary font-semibold hover:bg-primary active:bg-primary focus:bg-primary active:text-white focus:text-white' : ' text-white/70 hover:bg-primary active:bg-primary focus:bg-primary')} onClick={() => {
                    handleClickMenu("/dashboard/balances")
                }}>
                    <div className="h-8">
                        <img className="h-full" src={WalletActive} alt="Overview icon" />
                    </div>
                    <h4 className="text-lg tracking-wide">
                        Balances
                    </h4>
                </button>
                <button className={"px-4 py-3 w-full flex flex-row items-center gap-4 rounded-md hover:font-semibold active:font-semibold focus:font-semibold hover:text-white active:text-white focus:text-white " + (pageAt.toLowerCase() == 'transactions' ? 'text-white bg-primary font-semibold hover:bg-primary active:bg-primary focus:bg-primary active:text-white focus:text-white' : ' text-white/70 hover:bg-primary active:bg-primary focus:bg-primary')}>
                    <div className="h-8">
                        <img className="h-full" src={TransactionsActive} alt="Overview icon" />
                    </div>
                    <h4 className="text-lg tracking-wide">
                        Transactions
                    </h4>
                </button>
                <button className={"px-4 py-3 w-full flex flex-row items-center gap-4 rounded-md hover:font-semibold active:font-semibold focus:font-semibold hover:text-white active:text-white focus:text-white " + (pageAt.toLowerCase() == 'bills' ? 'text-white bg-primary font-semibold hover:bg-primary active:bg-primary focus:bg-primary active:text-white focus:text-white' : ' text-white/70 hover:bg-primary active:bg-primary focus:bg-primary')}>
                    <div className="h-8">
                        <img className="h-full" src={BillsActive} alt="Overview icon" />
                    </div>
                    <h4 className="text-lg tracking-wide">
                        Bills
                    </h4>
                </button>
                <button className={"px-4 py-3 w-full flex flex-row items-center gap-4 rounded-md hover:font-semibold active:font-semibold focus:font-semibold hover:text-white active:text-white focus:text-white " + (pageAt.toLowerCase() == 'expenses' ? 'text-white bg-primary font-semibold hover:bg-primary active:bg-primary focus:bg-primary active:text-white focus:text-white' : ' text-white/70 hover:bg-primary active:bg-primary focus:bg-primary')} onClick={() => {
                    handleClickMenu("/dashboard/expenses");
                }}>
                    <div className="h-8">
                        <img className="h-full" src={ExpensesActive} alt="Overview icon" />
                    </div>
                    <h4 className="text-lg tracking-wide">
                        Expenses
                    </h4>
                </button>
                <button className={"px-4 py-3 w-full flex flex-row items-center gap-4 rounded-md hover:font-semibold active:font-semibold focus:font-semibold hover:text-white active:text-white focus:text-white " + (pageAt.toLowerCase() == 'goals' ? 'text-white bg-primary font-semibold hover:bg-primary active:bg-primary focus:bg-primary active:text-white focus:text-white' : ' text-white/70 hover:bg-primary active:bg-primary focus:bg-primary')}>
                    <div className="h-8">
                        <img className="h-full" src={GoalsActive} alt="Overview icon" />
                    </div>
                    <h4 className="text-lg tracking-wide">
                        Goals
                    </h4>
                </button>
                <button className={"px-4 py-3 w-full flex flex-row items-center gap-4 rounded-md hover:font-semibold active:font-semibold focus:font-semibold hover:text-white active:text-white focus:text-white " + (pageAt.toLowerCase() == 'settings' ? 'text-white bg-primary font-semibold hover:bg-primary active:bg-primary focus:bg-primary active:text-white focus:text-white' : ' text-white/70 hover:bg-primary active:bg-primary focus:bg-primary')}>
                    <div className="h-8">
                        <img className="h-full" src={SettingsActive} alt="Overview icon" />
                    </div>
                    <h4 className="text-lg tracking-wide">
                        Settings
                    </h4>
                </button>
            </div>
            <div className="md:flex md:gap-2 text-white">
                Themes
                {themes.map((t) => (
                    <div
                        key={t.name}
                        className={`${t.bgcolor} md:w-6 h-6 rounded-md cursor-pointer mb-2`}
                        onClick={() => setTheme(t)}
                    ></div>
                ))}
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
            <div className="w-3/4">
                <div className="w-full flex flex-row justify-between pt-6 gap-4">
                    <div className="h-12">
                        <img className="h-full rounded-full" src="/assets/images/profileImg.png" alt="Profile Image" />
                    </div>
                    <div className="grow">
                        <header className="w-full">
                            <h6 className="text-white font-bold">{name}</h6>
                        </header>
                        <p className="text-hint">View Profile</p>
                    </div>
                    <button onClick={handleLogout}>
                        <i class="fa-solid fa-ellipsis-vertical text-hint text-2xl"></i>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;