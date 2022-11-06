import Employee from "./employee.model";
import Menu from "./menu.model";

export default class Startup{
    name: string;
    description?: string;
    employees: Employee[];
    menus: Menu[];
}