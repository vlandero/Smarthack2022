import MenuBase from "./base-menu.model";

export default class MarketingMenu extends MenuBase {
    detailedMarketingCosts: { name: string, cost: number }[];
    monthlyMarketingBudget?: number;
    monthlyMarketingCosts = (): number => {
        return this.detailedMarketingCosts.reduce((acc, cost) => acc + cost.cost, 0);
    };

}