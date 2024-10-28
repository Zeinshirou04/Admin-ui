function Card({children, title = ""}) {
    return (
        <div className="w-full h-full flex flex-col gap-2 p-4">
            <header className="w-full text-2xl">
                <h2 className="text-gray-2">
                    {title}
                </h2>
            </header>
            <div className="w-full h-full p-4 flex flex-col bg-white rounded-md shadow-md shadow-gray-4">
                {children}
            </div>
        </div>
    );
}

export default Card;