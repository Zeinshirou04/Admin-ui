import { Icon } from "./Icon";

function TransactionItem({
    data = {
        id: 0,
        transactionName: "",
        categoryId: 0,
        shopName: "",
        date: "",
        paymentMethod: "",
        amount: 0,
        type: "",
        icon: <Icon.Shopping />,
    }
}) {
    return (
        <div key={data.id} className="flex justify-between my-6">
            <div className="flex">
                <div className="bg-special-bg px-3 rounded-lg flex flex-col place-content-center">
                    {data.icon}
                </div>
                <div className="ms-4">
                    <span className="text-xl font-bold">
                        {data.transactionName}
                    </span>
                    <br />
                    <span className="text-gray-02">{data.shopName}</span>
                </div>
            </div>
            <div className="text-right">
                <span className="text-xl font-bold text-gray-02">
                    ${data.amount}
                </span>
                <br />
                <span className="text-gray-02">{data.date}</span>
            </div>
        </div>
    );
}

export default TransactionItem;