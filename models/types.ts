import HrMenu from "./menu-templates/hr.model";
import TaskManagementMenu from "./menu-templates/task-management.model";

export type Role = 'admin' | 'employee';
export type Menu = HrMenu | TaskManagementMenu;