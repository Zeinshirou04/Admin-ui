function Navlink(icon, label = "", page = "") {
    return (
        <button className={"px-4 py-3 w-full flex flex-row items-center gap-4 rounded-md hover:font-semibold active:font-semibold focus:font-semibold hover:text-white active:text-white focus:text-white " + (page.toLowerCase() == 'transactions' ? 'text-white bg-primary/90 font-semibold hover:bg-primary active:bg-primary focus:bg-primary active:text-white focus:text-white' : ' text-white/70 hover:bg-primary active:bg-primary focus:bg-primary')}>
            <div className="h-8">
                <img className="h-full" src={icon} alt="Overview icon" />
            </div>
            <h4 className="text-lg tracking-wide">
                {label}
            </h4>
        </button>
    );
}

export default Navlink;