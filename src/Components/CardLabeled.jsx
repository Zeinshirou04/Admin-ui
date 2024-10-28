function CardLabeled({children, title = "", labelOne = "", labelTwo = "", className = ""}) {
    return (
        <div className={"w-full h-full flex flex-col gap-2 p-4 " + className}>
            <header className="w-full text-2xl">
                <h2 className="text-gray-2">
                    {title}
                </h2>
            </header>
            <div className="w-full h-full p-4 flex flex-col bg-white rounded-md shadow-md shadow-gray-4">
                <header className="w-full flex flex-row justify-between pb-4 border-b-2 border-b-gray-6">
                    <div className="w-full">
                        <h3 className="font-bold text-xl">
                            {labelOne}
                        </h3>
                    </div>
                    <div className="w-full flex flex-col justify-end">
                        <h4 className="text-right text-sm">
                            {labelTwo}
                        </h4>
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