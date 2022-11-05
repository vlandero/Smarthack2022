import HrMenu from "./menu-templates/hr.model";
import TaskManagementMenu from "./menu-templates/task-management.model";

export default class Menu {
    name: 'Hr' | 'Management'
    menu: HrMenu | TaskManagementMenu;
}