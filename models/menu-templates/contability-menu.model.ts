import Employee from "../employee.model";
import MenuBase from "./base-menu.model";
import MarketingMenu from "./marketing-menu.model";
import LogisticsMenu from "./logistics-menu.model";
export default class ContabilityMenu extends MenuBase {
    monthlyBudget: number;
    monthlyEquipmentCosts: number;
    monthlyInventoryCosts: number;
    monthlyMarketingCosts: number;
    monthlyRentalCosts: number;
    monthlyUtilityCosts: number;

    fetchSalesCosts = (logisticsMenu: LogisticsMenu): void => { this.monthlyRentalCosts = logisticsMenu.totalSalesCosts(); };
    fetchMarketingCosts = (mMenu: MarketingMenu): void => { this.monthlyMarketingCosts = mMenu.totalMarketingCosts(); };
    monthlySalaries = (employees: Employee[]): number => {
        return employees.reduce((acc, employee) => acc + employee.salary, 0);
    };
    monthlyTotalCosts = (employees: Employee[]): number => {
        return this.monthlyEquipmentCosts + this.monthlyInventoryCosts + this.monthlyMarketingCosts + this.monthlyRentalCosts + this.monthlyUtilityCosts + this.monthlySalaries(employees);
    };
    monthlyProfit = (employees: Employee[]): number => {
        return this.monthlyBudget - this.monthlyTotalCosts(employees);
    };
    monthlyProfitPercentage = (employees: Employee[]): number => {
        return (this.monthlyProfit(employees) / this.monthlyBudget) * 100;
    };
    monthlyAnticipatedProfit = (employees: Employee[], secondMonthProfit: number, thirdMonthProfit: number): number => {
        return (this.monthlyProfit(employees) + secondMonthProfit + thirdMonthProfit) / 3;
    };
}
