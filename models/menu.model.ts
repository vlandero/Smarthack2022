import ContabilityMenu from "./menu-templates/contability-menu.model";
import HrMenu from "./menu-templates/hr-menu.model";
import TaskManagementMenu from "./menu-templates/task-management-menu.model";

export default class Menu {
    name: 'Hr' | 'TaskManagement' | 'Contability' | 'Marketing' | 'Production' | 'Logistics' | 'CustomerService';
    menu: HrMenu | TaskManagementMenu | ContabilityMenu;
}