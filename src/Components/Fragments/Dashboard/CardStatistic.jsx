import { expensesStatistics } from "../../../Data/Expenses";
import Card from "../../Card";
import BarsDataset from "../../Elements/BarChart";

const CardStatistic = () => {
    return (
        <Card className="col-span-2" title="Statistics">
            <div className="h-72 px-8 py-6">
                <select name="font-bold text-lg ring-0 focus:outline-none bg-transparent">
                    <option value="">Weekly Comparison</option>
                </select>
                <BarsDataset desc={expensesStatistics} />
            </div>
        </Card>
    )
}

export default CardStatistic