import { Icon } from "./Icon";

function ExpensesItem({
    data = {
        id: 0,
        category: "",
        amount: 0,
        percentage: 0,
        icon: <Icon.Others />,
        arrow: <Icon.ArrowDown />,
    }
}) {
    return (
        <div key={data.id} className="flex pb-4 justify-between">
            <div className="flex">
                <div className="bg-special-bg px-3 rounded-lg flex flex-col place-content-center">
                    {data.icon}
                </div>
                <div className="ms-4">
                    <span className="text-gray-02">{data.category}</span>
                    <br />
                    <span className="font-bold text-lg">${data.amount}</span>
                    <div className="flex">
                        <span className="text-gray-02">
                            {data.percentage}%*
                        </span>{" "}
                        {data.arrow}
                    </div>
                </div>
            </div>
            <div className="flex place-content-center flex-col me-8">
                <Icon.ArrowRight />
            </div>
        </div>
    );
}

export default ExpensesItem;