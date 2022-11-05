import MenuBase from "./base-menu.model";

export default class UtilityMenu extends MenuBase {
    detailedUtilityCosts: { name: string, cost: number }[];
    monthlyUtilityBudget?: number;
    totalSalesCosts = (): number => {
        return this.detailedUtilityCosts.reduce((acc, cost) => acc + cost.cost, 0);
    };

}