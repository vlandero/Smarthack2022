import MenuBase from "./base-menu.model";
import MarketingMenu from "./marketing-menu.model";
import LogisticsMenu from "./logistics-menu.model";
import ProductionMenu from "./production-menu.model";
import UtilityMenu from "./utility-menu.model";
export default class ContabilityMenu extends MenuBase {
    monthlyProduction?: ProductionMenu;
    monthlyMarketing?: MarketingMenu;
    monthlyUtility?: UtilityMenu;
    monthlyLogistics?: LogisticsMenu;
    monthlyCosts = (): number => {
        let totalCosts = 0;
        if (this.monthlyProduction) {
            totalCosts += this.monthlyProduction.monthlyProductionCosts();
        }
        if (this.monthlyMarketing) {
            totalCosts += this.monthlyMarketing.monthlyMarketingCosts();
        }
        if (this.monthlyUtility) {
            totalCosts += this.monthlyUtility.totalSalesCosts();
        }
        if (this.monthlyLogistics) {
            totalCosts += this.monthlyLogistics.totalSalesCosts();
        }
        return totalCosts;
    };
    monthlyBudget = (): number => {
        let totalBudget = 0;
        if (this.monthlyProduction) {
            totalBudget += this.monthlyProduction.monthlyProductionBudget;
        }
        if (this.monthlyMarketing) {
            if(this.monthlyMarketing.monthlyMarketingBudget) {
                totalBudget += this.monthlyMarketing.monthlyMarketingBudget;
            }
        }
        if (this.monthlyUtility) {
            if(this.monthlyUtility.monthlyUtilityBudget) {
                totalBudget += this.monthlyUtility.monthlyUtilityBudget;
            }
        }
        if (this.monthlyLogistics) {
            if(this.monthlyLogistics.monthlyLogisticsBudget) {
                totalBudget += this.monthlyLogistics.monthlyLogisticsBudget;
            }
        }
        return totalBudget;
    };
    monthlyProfit = (): number => {
        return this.monthlyBudget() - this.monthlyCosts();
    };
}
