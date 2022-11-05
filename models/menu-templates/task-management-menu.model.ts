import MenuBase from "./base-menu.model";
import Task from "../task.model";

export default class TaskManagementMenu extends MenuBase{
    tasks: Task[];
    categories: string[];
}
