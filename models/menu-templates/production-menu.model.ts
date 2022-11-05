import MenuBase from "./base-menu.model";

export default class ProductionMenu extends MenuBase {
    detailedProductionCosts: { name: string, cost: number }[];
    monthlyProductionBudget: number;
    monthlyProductionCosts = (): number => {
        return this.detailedProductionCosts.reduce((acc, cost) => acc + cost.cost, 0);
    };
    monthlyProductionProfit = (): number => {
        return this.monthlyProductionBudget - this.monthlyProductionCosts();
    };
    monthlyProductionProfitPercentage = (): number => {
        return (this.monthlyProductionProfit() / this.monthlyProductionBudget) * 100;
    };
    monthlyAnticipatedProfit = (secondMonthProfit: number, thirdMonthProfit: number): number => {
        return (this.monthlyProductionProfit() + secondMonthProfit + thirdMonthProfit) / 3;
    };
}