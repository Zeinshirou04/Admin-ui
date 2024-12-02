function BillItem({
    data = {
        id: 0,
        name: "",
        description:
            "",
        logo: "",
        date: "",
        month: "",
        lastCharge: "",
        amount: 0,
    }
}) {
    return (
        <div key={data.id} className="lg:flex justify-between pt-3 pb-3">
            <div className="flex">
                <div className="bg-special-bg me-3 px-4 rounded-lg flex place-content-center flex-col">
                    <span className="text-xs">{data.month}</span>
                    <span className="text-2xl font-bold">{data.date}</span>
                </div>
                <div className="">
                    <img className="h-6" src={`/assets/images/${data.logo}`} />
                    <span className="font-bold">{data.name}</span>
                    <br />
                    <span className="text-xs">Last Charge - {data.lastCharge}</span>
                </div>
            </div>
            <div className="flex place-content-center flex-col">
                <span className="p-2 border rounded-lg font-bold text-center">
                    ${data.amount}
                </span>
            </div>
        </div>
    );
}

export default BillItem;