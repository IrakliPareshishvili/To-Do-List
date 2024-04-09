function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();
    
    if (taskText !== "") {
      let li = document.createElement("li");
      li.textContent = taskText;
      
      let deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.classList.add("delete-btn");
      
      deleteBtn.addEventListener("click", function() {
        li.remove();
      });
      
      li.appendChild(deleteBtn);
      
      document.getElementById("taskList").appendChild(li);
      
      taskInput.value = "";
    }
  }
  