import { Task } from "./task";

// create a mock list of tasks(will pull from an external source in the future)
export const TASKS: Task[] = [
    {id: 1, content: "Do dishes", dateDue: "1/1/21"},
    {id: 2, content: "Do laundry", dateDue: "1/3/21"},
    {id: 3, content: "Do bed", dateDue: "1/2/21"},
    {id: 4, content: "Clean floor", dateDue: "1/2/21"},
    {id: 5, content: "Clean kitchen", dateDue: "1/1/21"}
]