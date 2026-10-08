// Get elements from HTML

const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");
const emptyMessage = document.getElementById("emptyMessage");


// Add Task

addTaskBtn.addEventListener("click", function () {

    const taskText = taskInput.value.trim();

    // Check if input is empty

    if (taskText === "") {
        return;
    }


    // Create task

    const task = document.createElement("div");

    task.className = "task";


    // Task HTML

    task.innerHTML = `
        <div class="task-left">

            <input type="checkbox" class="task-checkbox">

            <span>${taskText}</span>

        </div>

        <button class="delete-btn">
            <i class="fa-solid fa-trash"></i>
        </button>
    `;


    // Add task to task list

    taskList.appendChild(task);


    // Clear input

    taskInput.value = "";


    // Update task count

    updateTaskCount();


    // Hide empty message

    emptyMessage.style.display = "none";


    // Delete Task

    const deleteBtn = task.querySelector(".delete-btn");

    deleteBtn.addEventListener("click", function () {

        task.remove();

        updateTaskCount();


        // Show empty message

        if (taskList.children.length === 0) {

            emptyMessage.style.display = "block";

        }

    });


    // Complete Task

    const checkbox = task.querySelector(".task-checkbox");

    checkbox.addEventListener("change", function () {

        task.classList.toggle("completed");

    });

});


// Update Task Count

function updateTaskCount() {

    const count = taskList.children.length;


    if (count === 1) {

        taskCount.textContent = "1 task";

    } else {

        taskCount.textContent = `${count} tasks`;

    }

}
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

});