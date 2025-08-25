// 


    // Load tasks from localStorage when page loads
    window.onload = function () {
      let savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
      savedTasks.forEach(task => addTaskToDOM(task));
    };

    document.querySelector('#push').onclick = function () {
      let taskInput = document.querySelector('#newtask input');
      if (taskInput.value.length == 0) {
        alert("Please Enter a Task");
      } else {
        let task = taskInput.value;

        // Save to localStorage
        let savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
        savedTasks.push(task);
        localStorage.setItem("tasks", JSON.stringify(savedTasks));

        // Add task in DOM
        addTaskToDOM(task);
        taskInput.value = "";
      }
    };

    function addTaskToDOM(task) {
      let taskDiv = document.createElement("div");
      taskDiv.classList.add("task");

      taskDiv.innerHTML = `
        <span id="taskname">${task}</span>
        <button class="delete">Delete</button>
      `;

      document.querySelector('#tasks').appendChild(taskDiv);

      // Delete button functionality
      taskDiv.querySelector(".delete").onclick = function () {
        taskDiv.remove();

        // Remove from localStorage
        let savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
        savedTasks = savedTasks.filter(t => t !== task);
        localStorage.setItem("tasks", JSON.stringify(savedTasks));
      };
    }