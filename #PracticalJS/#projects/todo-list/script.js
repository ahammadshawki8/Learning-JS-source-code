let mainForm = document.querySelector("form");
let taskField = document.querySelector("#task");
let submitBtn = document.querySelector("button[type = 'submit']");
let taskList = document.querySelector("#taskList");
let allTask = [];

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
    allTask.push({main: newTask, done: false});
    renderTask();
    taskField.value = "";
    submitBtn.disabled = true;
    return false;
}

taskList.addEventListener("click", (e) => {
    if (e.target.tagName = "LI"){
        for (item of allTask) {
            if (item.main === e.target.innerHTML) {
                item.done = !(item.done);
                renderTask();
            }
        }
    }
})


function renderTask() {
    taskList.innerHTML = "";
    for (task of allTask) {
        if (task.done === false) {
            taskList.innerHTML += `<li><button>${task.main}</button></li>`
        } else {
            taskList.innerHTML += `<li><button><span style="text-decoration: line-through;">${task.main}</span></button></li>`
        }
}
}