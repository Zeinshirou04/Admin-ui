import { goals } from "../../../Data/Goals";
import Card from "../../Card";
import { Icon } from "../../Icon";

const CardGoal = () => {
    return (
        <Card
            title="Goals"
        >
            <div className="p-2">
                <div className="flex justify-between">
                    <div className="flex">
                        <span className="text-2xl font-bold me-4 self-center">
                            ${goals.presentAmount}
                        </span>
                        <div className="p-2 bg-gray-05 rounded-md box-border">
                            <Icon.Edit />
                        </div>
                    </div>
                    <div>Nov, 2023</div>
                </div>
                <div className="border-b-2 my-4"></div>
                <div className="flex justify-between">
                    <div>
                        <div className="flex mt-3 mb-10">
                            <div>
                                <Icon.Award />
                            </div>
                            <div className="ms-2">
                                <span className="text-gray-02">Target Achieved</span>
                                <br />
                                <span className="font-bold text-xl">
                                    ${goals.targetAmount}
                                </span>
                            </div>
                        </div>
                        <div className="flex">
                            <div>
                                <Icon.Target />
                            </div>
                            <div className="ms-2">
                                <span className="text-gray-02">This Month Target</span>
                                <br />
                                <span className="font-bold text-xl">
                                    ${goals.presentAmount}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="ms-4 text-center">
                        Chart
                        <div className="flex justify-between">
                            <span className="text-gray-03">$0</span>
                            <span className="font-bold text-2xl">12K</span>
                            <span className="text-gray-03">$20K</span>
                        </div>
                        <div className="mt-2">Target vs Achievement</div>
                    </div>
                </div>
            </div>
        </Card>
    );
};

export default CardGoal;
