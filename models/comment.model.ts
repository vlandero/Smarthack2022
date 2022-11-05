import Employee from "models/employee.model";
import MenuBase from "./menu-templates/base-menu.model";

export default class Comment extends MenuBase{
    content: string;
    date: Date;
    user: Employee;
}
