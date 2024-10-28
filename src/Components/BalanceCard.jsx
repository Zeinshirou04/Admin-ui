import MasterCardSvg from "../assets/svg/mastercard-logo.svg";
import ExpandSvg from "../assets/svg/expand-icon.svg";

function BalanceCard({accountType = "", cardType = "", cardNumber = "", balance = 0}) {

    let lastFourNumCard = cardNumber.split("").slice(12, 16);
    let cardNumHashed =  "**** **** **** " + lastFourNumCard[0] + lastFourNumCard[1] + lastFourNumCard[2] + lastFourNumCard[3];

    return (
        <div className="w-full h-full bg-primary rounded-md p-4 flex flex-row gap-2">
            <div className="w-full h-full text-sm">
                <p className="text-white/70">
                    Account Type
                </p>
                <h5 className="font-semibold text-lg text-white">
                    {accountType}
                </h5>
                <p className="text-white/70">
                    {cardNumHashed}
                </p>
            </div>
            <div className="w-full h-full flex flex-col items-end">
                <div className="h-full">
                    <img className="h-full" src={MasterCardSvg} alt="Mastercard Logo" />
                </div>
                <div className="h-full flex flex-row justify-end items-end gap-2 text-lg text-white">
                    <p className="font-semibold leading-none pb-0.5">
                        {"$" + balance}
                    </p>
                    <img src={ExpandSvg} alt="Expand Icon" />
                </div>
            </div>
        </div>
    );
}

export default BalanceCard;