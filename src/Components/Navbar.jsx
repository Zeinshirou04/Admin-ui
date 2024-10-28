import ChevronsRight from "../assets/svg/chevrons-right.svg";
import Sidebar from "./Sidebar";
import NotificationBlack from "../assets/svg/notificationBlack.svg"
import SearchSvg from "../assets/svg/search.svg"
import { useState } from "react"

function Navbar({ name = "", setActive }) {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const datetime = new Date();
    const month = datetime.getMonth();
    const date = datetime.getDate();
    const year = datetime.getFullYear();

    const [isSearching, setSearching] = useState(false);

    return (
        <nav className="w-full bg-main h-16 lg:h-20 border-b-2 border-b-gray-5 flex flex-row justify-between p-4 fixed lg:static">
            <div className="order-1 lg:hidden">
                <i class="text-lg fa-solid fa-bars" onClick={() => {
                    setActive((prevState) => ({
                        ...prevState,
                        sidebar: true
                    }))
                }}></i>
            </div>
            <div className="w-full order-2 text-right flex flex-row justify-end text-md lg:text-2xl gap-1 lg:order-1 lg:text-left lg:justify-start lg:items-center">
                <p className="text-gray-3 lg:order-3 lg:!text-sm">
                    {`${months[month]} ${date}, ${year}`}
                </p>
                <img className="h-6 lg:h-7 -scale-x-100 lg:order-2 lg:scale-x-100" src={ChevronsRight} alt="Chevrons Right" />
                <p className="text-primary font-bold lg:order-1 lg:mr-4">
                    Hello, {name}
                </p>
            </div>

            <div className="w-2/5 pl-4 py-4 flex-row items-center gap-12 hidden order-2 lg:flex">
                <div className="h-9">
                    <img className="h-full" src={NotificationBlack} alt="Notification Icon" />
                </div>
                <div className="w-full relative">
                    <input className="w-full text-sm py-3 px-3 rounded-md shadow-lg" placeholder="Search here" type="text" onFocus={() => {
                        setSearching(true)
                    }} onBlur={(e) => {
                        e.target.value != "" ? setSearching(true) : setSearching(false)
                    }} />
                    <img className={"absolute top-2 right-2 h-6 " + (isSearching ? "hidden" : "")} src={SearchSvg} alt="Search icon" />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;