import Comment from "models/menu-templates/comment.model";
import Employee from "models/employee.model";

export default class Task{
    name: string;
    description: string;
    isDone?: boolean;
    dueDate?: Date;
    priority?: number;
    assignedTo?: Employee;
    comments?: Comment[];
}