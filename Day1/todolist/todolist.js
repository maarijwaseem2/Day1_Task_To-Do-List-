var tasks = [];

// Load tasks from localStorage on page load
document.addEventListener('DOMContentLoaded', function () {
    loadTasksFromLocalStorage();
    displayAndSortTasks();
});

function addTask() {
    var taskNameInput = document.getElementById("taskName");
    var categorySelect = document.getElementById("category");
    var prioritySelect = document.getElementById("priority");
    var taskDetailsTextarea = document.getElementById("taskDetails");

    var taskName = taskNameInput.value.trim();
    var category = categorySelect.value;
    var priority = prioritySelect.value;
    var taskDetails = taskDetailsTextarea.value.trim();

    if (taskName === "") {
        alert("Task name cannot be empty");
        return;
    }
    var sanitizedTaskDetails = sanitizeInput(taskDetails);
    var task = {
        name: taskName,
        category: category,
        priority: priority,
        details: sanitizedTaskDetails,
        timestamp: new Date().toLocaleString()
    };

    tasks.push(task);
    
    saveTasksToLocalStorage();

    displayAndSortTasks();
}

function displayAndSortTasks() {
    tasks.sort((a, b) => {
        var priorityOrder = { high: 3, medium: 2, low: 1 };
        return priorityOrder[b.priority] - priorityOrder[a.priority];
    });
    displayTasks();
}

function displayTasks(filteredTasks = tasks) {
    var taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    filteredTasks.forEach(task => {
        var listItem = document.createElement("li");
        listItem.innerHTML = `
            <strong>${task.name}</strong><br>
            Category: ${task.category}<br>
            Priority: ${task.priority}<br>
            Details: ${task.details}<br>
            Added on: ${task.timestamp}
        `;
        taskList.appendChild(listItem);
    });
}
function searchTasks() {
    var searchInput = document.getElementById("search");
    var searchTerm = searchInput.value.toLowerCase();

    var filteredTasks = tasks.filter(task =>
        task.name.toLowerCase().includes(searchTerm) ||
        task.category.toLowerCase().includes(searchTerm) ||
        task.priority.toLowerCase().includes(searchTerm) ||
        task.details.toLowerCase().includes(searchTerm)
    );

    displayTasks(filteredTasks);
}

function startTimer() {
    var timerContainer = document.getElementById("timerContainer");
    var timerElement = document.getElementById("timer");

    timerContainer.style.display = "block";

    var seconds = 0;
    var timer = setInterval(function () {
        seconds++;
        timerElement.textContent = formatTime(seconds);
    }, 1000);

    setTimeout(function () {
        clearInterval(timer);
        timerContainer.style.display = "none";
    }, 1000);
}

function formatTime(seconds) {
    var minutes = Math.floor(seconds / 60);
    seconds %= 60;

    return `${pad(minutes)}:${pad(seconds)}`;
}

function pad(value) {
    return value < 10 ? `0${value}` : value;
}

function sanitizeInput(input) {
    return input.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function saveTasksToLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasksFromLocalStorage() {
    var storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
        tasks = JSON.parse(storedTasks);
    }
}