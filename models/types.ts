import HrMenu from "./menu-templates/hr-menu.model";
import TaskManagementMenu from "./menu-templates/task-management-menu.model";

export type Role = 'admin' | 'employee';
export type Menu = HrMenu | TaskManagementMenu;