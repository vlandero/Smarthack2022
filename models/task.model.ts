import Comment from "./comment.model";
import Employee from "./employee.model";

export default class Task{
    name: string;
    description: string;
    isDone?: boolean;
    dueDate?: Date;
    priority?: number;
    assignedTo?: Employee;
    comments?: Comment[];
}