function Card({children, title = "", className = ""}) {
    return (
        <div className={"w-full grow flex flex-col gap-2 p-4 " + className}>
            {title ? <header className="w-full text-2xl pb-2">
                <h2 className="text-gray-2 font-semibold">
                    {title}
                </h2>
            </header> : ""}
            <div className="w-full h-full p-4 flex flex-col bg-white rounded-md shadow-md shadow-gray-4">
                {children}
            </div>
        </div>
    );
}

export default Card;