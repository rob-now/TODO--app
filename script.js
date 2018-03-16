document.addEventListener("DOMContentLoaded", function () {
    const search = document.querySelector("#todoSearch");
    const todoList = document.querySelector("#todoList");

    // Adding tasks functionality
    function addTask(tt, text) {
        // to-do element div
        var todoElement = document.createElement("div");
        todoElement.classList.add("todo-element");

        // bar div
        var todoElementBar = document.createElement("div");
        todoElementBar.classList.add("todo-element-bar");

        // heading
        var heading = document.createElement("h4");
        heading.classList.add("todo-element-title");
        // assigning title and my date format to heading
        heading.innerHTML = tt + " (" + '<span class="todo-element-date">' + myDateFormat() + ")";

        // delete button
        var deleteBtn = document.createElement("button");
        deleteBtn.classList.add("todo-element-delete");
        deleteBtn.innerHTML = '<i class="far fa-trash-alt fa-lg"></i>';

        // text div
        var todoText = document.createElement("div");
        todoText.classList.add("todo-element-text");
        todoText.innerText = text;

        // Adding elements to DOM
        // bar area (heading + deleteBtn)
        todoElementBar.appendChild(heading);
        todoElementBar.appendChild(deleteBtn);

        // building whole element (bar + text)
        todoElement.appendChild(todoElementBar);
        todoElement.appendChild(todoText);

        // adding element do the list
        todoList.appendChild(todoElement);

        // setting up my own date format
        function myDateFormat() {
            const currentDate = new Date();
            var currentYear = currentDate.getFullYear();
            var currentMonth = currentDate.getMonth() + 1;
            var currentDay = currentDate.getDate();
            var currentHour = currentDate.getHours();
            var currentMinute = currentDate.getMinutes();

            function fixDate(input) {
                if (input < 10) {
                    return "0" + input;
                }
                else {
                    return input;
                }
            }

            return currentYear
                + "-"
                + fixDate(currentMonth)
                + "-"
                + fixDate(currentDay)
                + ", "
                + fixDate(currentHour)
                + ":"
                + fixDate(currentMinute);
        }
    }

    // Event handler for adding tasks to the list
    document.addEventListener("submit", function (e) {
        e.preventDefault();
        const taskTitle = this.querySelector(".task-title");
        const textArea = this.querySelector(".task-area-text");
        if (taskTitle.value !== "" && textArea.value !== "") {
            addTask(taskTitle.value, textArea.value);
            taskTitle.value = "";
            textArea.value = "";
        }
    });

    // Event handler for removing given task from the list
    todoList.addEventListener("click", function (e) {
        if (e.target.closest(".todo-element-delete") !== null) {
            e.target.closest(".todo-element").remove();
        }
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





