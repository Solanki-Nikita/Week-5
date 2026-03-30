const form = document.querySelector(".todoform");
const taskInput = document.getElementById("taskInput");
const dateInput = document.getElementById("dateInput");
const completeList = document.getElementById("completeList");
const pendingList = document.getElementById("pendingList");
const statusMsg = document.getElementById("statusMsg");


form.addEventListener("submit", function (e) {
        e.preventDefault();

        const taskText = taskInput.value.trim();
        const taskDate = dateInput.value;

        if(taskText === ""){
            statusMsg.textContent = "Please Enter a Task..";
            return;
        }

        createTask(taskText, taskDate);

        statusMsg.textContent = "Task Added!";
        taskInput.Value= "";
        dateInput.value= "";
});

function createTask(text, date){
    const li = document.createElement("li");
    
 
    li.innerHTML = ` 
    <span>${text} ${date ? "(" + date + ")" : ""}</span>
    <div>
        <button class="completeBtn"> Complete</button>
        <button class="deleteBtn"> Delete </button>
    </div>
    `;


    pendingList.appendChild(li);

    const completeBtn = li.querySelector(".completeBtn");
    const deleteBtn = li.querySelector(".deleteBtn");

    completeBtn.addEventListener("click",function () {
        completeList.appendChild(li);
        completeBtn.remove();
        statusMsg.textContent = "Task Complete";
    });

    deleteBtn.addEventListener("click", function() {
        li.remove();
        statusMsg.textContent = "Task Deleted!"
    });
}