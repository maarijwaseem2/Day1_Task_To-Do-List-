document.addEventListener('DOMContentLoaded', function () {
    var userEmail = getQueryParam("user");

    displayUserTasks(userEmail);
});
function getQueryParam(name) {
    name = name.replace(/[[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
    var results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
function displayUserTasks(userEmail) {
    var userTasks = JSON.parse(localStorage.getItem('tasks')) || [];

    var userSpecificTasks = userTasks.filter(task => task.email === userEmail);

    var taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    var heading = document.createElement("h1");
    heading.innerText = `Tasks for User: ${userEmail}`;
    taskList.appendChild(heading);

    userSpecificTasks.forEach(task => {
        var taskItem = document.createElement("div");
        taskItem.classList.add("task-item");
        taskItem.innerHTML = `
            <strong>${task.name}</strong><br>
            Category: ${task.category}<br>
            Priority: ${task.priority}<br>
            Details: ${task.details}<br>
            Added on: ${task.timestamp}
        `;
        taskList.appendChild(taskItem);
    });
}
