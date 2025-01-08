function Navlink({icon, label = "", page = "", onClick = () => {}}) {
    console.log(`the label is ${label} and current page at ${page}`);
    
    return (
        <button id={label.toLowerCase()} className={"px-4 py-3 w-full flex flex-row items-center gap-4 rounded-md hover:font-semibold active:font-semibold focus:font-semibold hover:text-white active:text-white focus:text-white zoom-in " + (page.toLowerCase() == label.toLowerCase() ? 'text-white bg-primary font-semibold hover:bg-primary active:bg-primary focus:bg-primary active:text-white focus:text-white' : ' text-white/70 hover:bg-primary active:bg-primary focus:bg-primary')} onClick={onClick}>
            <div className="h-8">
                <img className="h-full" src={icon} alt={`${label} Icon`} />
            </div>
            <h4 className="text-lg tracking-wide">
                {label}
            </h4>
        </button>
    );
}

export default Navlink;