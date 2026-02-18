import "./style.css";
import displayPage from "./displayPage.js"
import { addNewTask } from "./newTask.js"

// initial page is cards of projects and tasks
// each card has due date, title, description, priority, tag
// projects look like a card but open to multiple cards when clicked

export const myTasks = [
    {
        id: "task-1",
        title: "Buy groceries",
        description: "Milk, eggs, bread, and coffee",
        dueDate: "2026-02-14",
        priority: "High"
    },
    {
        id: "task-2",
        title: "Finish project report",
        description: "Complete the final draft and send to manager",
        dueDate: "2026-02-15",
        priority: "Medium"
    },
    {
        id: "task-3",
        title: "Workout",
        description: "30 minutes of cardio",
        dueDate: "2026-02-13",
        priority: "Low"
    }
];

const projectsButton = document.getElementById("projects-button");
const tasksButton = document.getElementById("tasks-button");
const newTaskButton = document.getElementById("new-task-button");

// projectsButton.addEventListener("click", function () {
//     clear();
//     projectsPage();
// });

// tasksButton.addEventListener("click", function () {
//     clear();
//     tasksPage();
// });

newTaskButton.addEventListener("click", function () {
    addNewTask();
});

displayPage(myTasks);
