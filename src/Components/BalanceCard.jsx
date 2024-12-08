import { Link } from "react-router-dom";

function BalanceCard({
    data = {
        id: 0,
        bankName: "",
        branchName: "",
        accountType: "",
        accountNumber: "",
        balance: 0,
        logo: "",
    }
}) {
    return (
        <div key={data.id} className="p-2">
            <div className="flex justify-between bg-primary text-white p-4 rounded-md">
                <div>
                    Account Type
                    <br />
                    <span className="text-xl font-bold">
                        {data.accountType}
                    </span>
                    <br />
                    {data.accountNumber}
                </div>
                <div className="flex flex-col justify-between">
                    {data.logo != "" && (
                        <img
                            className="ms-auto"
                            src={`/images/${data.logo}`}
                        />
                    )}

                    <div className="flex">
                        <span className="text-xl font-bold">
                            ${data.balance}
                        </span>
                        <div className="bg-white max-w-min rounded-full ps-1 pt-1 ms-4">
                            {/* <Icon.ArrowUpRight /> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BalanceCard;