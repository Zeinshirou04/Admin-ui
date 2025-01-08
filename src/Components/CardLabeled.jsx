import { useContext } from "react";
import { PageThemeContext } from "../context/pageThemeContext";

function CardLabeled({children, title = "", labelOne = "", labelTwo = "", className = "", labelTwoImg = ""}) {

    const {dark} = useContext(PageThemeContext);
    const id = title.split(" ");
    
    return (
        <div id={id[0].toLowerCase()} className={"w-full h-full flex flex-col gap-2 p-4 " + className}>
            {title ? <header className="w-full text-2xl p-2">
                <h2 className={" font-semibold " + (!dark ? "text-gray-2" : "text-white")}>
                    {title}
                </h2>
            </header> : ""}
            <div className={"w-full h-full px-4 pb-4 flex flex-col bg-white rounded-md " + (!dark && "shadow-md shadow-gray-4")}>
                <header className="w-full flex flex-row justify-between border-b-2 border-b-gray-6 py-4">
                    <div className="w-full">
                        <h3 className="font-bold text-xl">
                            {labelOne}
                        </h3>
                    </div>
                    <div className="w-full flex flex-row justify-end items-center gap-2">
                        <h4 className="text-right text-sm">
                            {labelTwo}
                        </h4>
                        <img src={labelTwoImg} alt="" />
                    </div>
                </header>
                <div className="w-full h-full pt-2">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default CardLabeled;