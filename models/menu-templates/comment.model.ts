import Employee from "models/employee.model";
import MenuBase from "./menu-base.model";

export default class Comment extends MenuBase{
    content: string;
    date: Date;
    user: Employee;
}
