import { useContext } from "react";
import { PageThemeContext } from "../context/pageThemeContext";

function Card({children, title = "", className = ""}) {

    const {dark} = useContext(PageThemeContext);
    const id = title.split(" ");

    return (
        <div id={id[0].toLowerCase()} className={"w-full grow flex flex-col gap-2 p-4 " + className}>
            {title ? <header className="w-full text-2xl pb-2">
                <h2 className={" font-semibold " + (!dark ? "text-gray-2" : "text-white")}>
                    {title}
                </h2>
            </header> : ""}
            <div className={"w-full h-full flex flex-col bg-white rounded-md " + (!dark && "shadow-md shadow-gray-4")}>
                {children}
            </div>
        </div>
    );
}

export default Card;