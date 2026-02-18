import { addNewTask } from "./newTask.js";
import clearPage from "./clearPage.js";

export default function displayPage(myTasks) {
    clearPage();
    const container = document.getElementById("container");

    function createDeleteButton(id) {
        const deleteButton = document.createElement("button");
        deleteButton.className = "delete-button";
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => {
            myTasks.splice(myTasks.findIndex((book) => book.id == id), 1);
            (document.getElementById(id)).remove();
        })
        return deleteButton;
    }

    const newTaskButton = document.getElementById("new-task-button");
    newTaskButton.addEventListener("click", () => {
        const form = addNewTask();
        container.insertBefore(form, container.firstChild);
    });

    function displayTasks(myTasks) {
        myTasks.forEach((task) => {
            let entry = document.createElement("div");
            const parent = document.getElementById("container");
            entry.className = "task";
            let title = document.createElement("div");
            title.className = "title";
            title.textContent = task.title;
            let description = document.createElement("div");
            description.className = "description";
            description.textContent = task.description;
            let dueDate = document.createElement("div");
            dueDate.className = "dueDate";
            dueDate.textContent = "Due: " + task.dueDate;
            let priority = document.createElement("div");
            priority.className = "priority";
            priority.textContent = task.priority + " priority";
            entry.id = task.id;
            let infoDiv = document.createElement("div");
            infoDiv.className = "info-div";
            entry.appendChild(title);
            entry.appendChild(description);
            entry.appendChild(dueDate);
            entry.appendChild(infoDiv);
            const deleteButton = createDeleteButton(task.id);
            infoDiv.appendChild(deleteButton);
            infoDiv.appendChild(priority);
            parent.appendChild(entry);
        });
    }
    
    // Display example tasks when page loads
    displayTasks(myTasks);
}