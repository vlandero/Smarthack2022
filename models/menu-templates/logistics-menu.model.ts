import MenuBase from "./base-menu.model";

export default class LogisticsMenu extends MenuBase {
    detailedLogisticsCosts: { name: string, cost: number }[];
    monthlyLogisticsBudget?: number;
    totalSalesCosts = (): number => {
        return this.detailedLogisticsCosts.reduce((acc, cost) => acc + cost.cost, 0);
    };

}