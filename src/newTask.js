import { myTasks } from "./index.js"
import displayPage from "./displayPage.js"

export function addNewTask() {
    const form = document.createElement("form");
    form.className = "add-task";
    form.method = "get";

    const titleDiv = document.createElement("div");
    titleDiv.id = "title";
    const titleLabel = document.createElement("label");
    titleLabel.textContent = "Title: ";
    const titleInput = document.createElement("input");
    titleInput.type = "text";
    titleInput.required = true;
    titleDiv.appendChild(titleLabel);
    titleDiv.appendChild(titleInput);

    const descriptionDiv = document.createElement("div");
    descriptionDiv.id = "description";
    const descriptionLabel = document.createElement("label");
    descriptionLabel.textContent = "Description: ";
    const descriptionInput = document.createElement("input");
    descriptionInput.type = "text";
    descriptionInput.required = true;
    descriptionDiv.appendChild(descriptionLabel);
    descriptionDiv.appendChild(descriptionInput);

    const priorityDiv = document.createElement("div");
    priorityDiv.id = "priority-div";
    const priorityLabel = document.createElement("label");
    priorityLabel.textContent = "Select priority: ";
    priorityLabel.htmlFor = "priority";
    const prioritySelect = document.createElement("select");
    prioritySelect.id = "priority";
    prioritySelect.required = true;
    const option1 = document.createElement("option");
    option1.value = "Low";
    option1.textContent = "Low";
    const option2 = document.createElement("option");
    option2.value = "Medium";
    option2.textContent = "Medium";
    const option3 = document.createElement("option");
    option3.value = "High";
    option3.textContent = "High";
    prioritySelect.appendChild(option1);
    prioritySelect.appendChild(option2);
    prioritySelect.appendChild(option3);
    priorityDiv.appendChild(priorityLabel);
    priorityDiv.appendChild(prioritySelect);

    const dueDateDiv = document.createElement("div");
    dueDateDiv.id = "due-date";
    const dueDateLabel = document.createElement("span");
    dueDateLabel.textContent = "Due date: ";
    const dueDate = document.createElement("input");
    dueDate.type = "date";
    dueDate.value = "Due date:"
    dueDateDiv.appendChild(dueDateLabel);
    dueDateDiv.appendChild(dueDate);

    const submitDiv = document.createElement("div");
    const submitBtn = document.createElement("input");
    submitBtn.type = "submit";
    submitBtn.id = "submit-button";
    submitBtn.value = "Add";
    submitDiv.appendChild(submitBtn);

    form.appendChild(titleDiv);
    form.appendChild(descriptionDiv);
    form.appendChild(priorityDiv);
    form.appendChild(dueDateDiv);
    form.appendChild(submitDiv);

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const id = crypto.randomUUID();
        const title = titleInput.value;
        const description = descriptionInput.value;
        const dueDateValue = dueDate.value;
        const priority = prioritySelect.value;
        myTasks.push({ id, title, description, dueDate: dueDateValue, priority });
        displayPage(myTasks);
        form.reset();
    });

    displayPage(myTasks);

    return form;
}
