function addTask() {
    let taskInput = document.getElementById("taskInput"); 
    let taskList = document.getElementById("taskList"); 
    
    if (taskInput.value.trim() === "") {
        alert("Please enter a task!"); 
        return;
    }

    let li = document.createElement("li");
    li.innerHTML = `
        ${taskInput.value} 
        <button onclick="completeTask(this)">❌</button>
    `;

    taskList.appendChild(li);
    taskInput.value = ""; 
}

function handleKeyPress(event) {
    if (event.key === "Enter") {
        addTask();
    }
}

function completeTask(button) {
    let li = button.parentElement;
    li.classList.toggle("completed");
}
