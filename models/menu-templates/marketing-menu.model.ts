import MenuBase from "./base-menu.model";

export default class MarketingMenu extends MenuBase {
    detailedMarketingCosts: { name: string, cost: number }[];

    totalMarketingCosts = (): number => {
        return this.detailedMarketingCosts.reduce((acc, cost) => acc + cost.cost, 0);
    };

}