let mainForm = document.querySelector("form");
let taskField = document.querySelector("#task");
let submitBtn = document.querySelector("button[type = 'submit']");
let taskList = document.querySelector("#taskList");

submitBtn.disabled = true;

taskField.addEventListener("change", () => {
    if (taskField.value.length > 0) {
        submitBtn.disabled = false;
    }

    else {
        submitBtn.disabled = true;
    }
})


mainForm.onsubmit = () => {
    let newTask = taskField.value;
    taskList.innerHTML += `<li><a href = "#">${newTask}</a></li>`;

    taskField.value = "";
    submitBtn.disabled = true;
    return false;
}