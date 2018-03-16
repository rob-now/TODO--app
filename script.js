document.addEventListener("DOMContentLoaded", function () {
    const todoForm = document.querySelector("#todo-form");
    const search = document.querySelector("#todoSearch");
    const todoList = document.querySelector("#todoList");

    function addTask(text) {
        console.log("Adding task");
        // to-do element div
        var todoElement = document.createElement("div");
        todoElement.classList.add("todo-element");

        // bar div
        var todoElementBar = document.createElement("div");
        todoElementBar.classList.add("todo-element-bar");

        // heading
        var heading = document.createElement("h4");
        heading.classList.add("todo-element-date");
        // assigning my date format to heading
        heading.innerText = myDateFormat();

        // delete button
        var deleteBtn = document.createElement("button");
        deleteBtn.classList.add("todo-element-delete");
        deleteBtn.title = "Delete task";
        var deleteIcon = document.createElement("i");
        deleteIcon.classList.add("far", "fa-trash-alt", "fa-lg");

        // text div
        var todoText = document.createElement("div");
        todoText.classList.add("todo-element-text");

        // adding elements to DOM
        var todoElementDOM = todoList.appendChild(todoElement);
        // bar area
        var todoElementBarDOM = todoElementDOM.appendChild(todoElementBar);
        todoElementBarDOM.appendChild(heading);
        todoElementBarDOM.appendChild(deleteBtn).appendChild(deleteIcon);
        // text area
        var todoTextDOM = todoElementDOM.appendChild(todoText);
        todoTextDOM.innerText = text;

        // setting up my own date format
        function myDateFormat() {
            const currentDate = new Date();
            var currentYear = currentDate.getFullYear();
            var currentMonth = currentDate.getMonth() + 1;
            var currentDay = currentDate.getDate();
            var currentHour = currentDate.getHours();
            var currentMinute = currentDate.getMinutes();

            if (currentMonth < 10) {
                currentMonth = "0" + currentMonth;
            }
            if (currentDay < 10) {
                currentDay = "0" + currentDay;
            }
            if (currentHour < 10) {
                currentHour = "0" + currentHour;
            }
            if (currentMinute < 10) {
                currentMinute = "0" + currentMinute;
            }
            return currentYear
                + "-"
                + currentMonth
                + "-"
                + currentDay
                + ", "
                + currentHour
                + ":"
                + currentMinute;
        }
    }

    // Event handler for adding tasks to the list
    document.addEventListener("submit", function (e) {
        e.preventDefault();
        const textArea = this.querySelector(".task-area-text");
        if (textArea.value !== "") {
            addTask(textArea.value);
            textArea.value = "";
        }
    });

    // Event handler for removing given task from the list
    todoList.addEventListener("click", function (e) {
        e.target.closest(".todo-element").remove();
    });

    // Search functionality
    search.addEventListener("input", function () {
        const searchValue = this.value;
        const tasks = todoList.querySelectorAll(".todo-element-text");
        [].forEach.call(tasks, function (e) {
            const taskText = e.innerText;
            const closestToDo = e.closest(".todo-element");
            if (taskText.indexOf(searchValue) === -1) {
                closestToDo.classList.add("hidden");
            }
            else {
                closestToDo.classList.remove("hidden");
            }
        });
    });
});





