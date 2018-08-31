const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

loadIventListeners();
//Load all ivent listeners
function loadIventListeners(){
    //DOM load event
    document.addEventListener('DOMContentLoaded', getTasks);

    //add task event
    form.addEventListener("submit" , addTask);
    //Remove task ivent
    taskList.addEventListener('click', removeTask);
    //Clear task event
    clearBtn.addEventListener('click', clearTasks);
    //Filter through the tasks
    filter.addEventListener('keyup', filterTasks);
}

//Get tasks from Local Storage
function getTasks(){
    let tasks;
    if (localStorage.getItem('tasks') === 'null') {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task){
        //Create li elem
        const li = document.createElement('li');
        //Add a class
        li.className = 'collection-item';
        //Create text node and append to li
        li.appendChild(document.createTextNode(task));
        //Create new link el
        const link = document.createElement('a');
        //Add class
        link.className = "delete-item secondary-content";
        //Add icon html
        link.innerHTML = "<i class='fa fa-remove'></i>";
        //Append the link to li
        li.appendChild(link);
        //Append li to ul
        taskList.appendChild(li);
    })
}

//Add tasks
function addTask(el){
    if(taskInput.value === ''){
        alert('add a task');
    }

    //Create li elem
    const li = document.createElement('li');
    //Add a class
    li.className = 'collection-item';
    //Create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));
    //Create new link el
    const link = document.createElement('a');
    //Add class
    link.className = "delete-item secondary-content";
    //Add icon html
    link.innerHTML = "<i class='fa fa-remove'></i>";
    //Append the link to li
    li.appendChild(link);
    //Append li to ul
    taskList.appendChild(li);

    //Store in local storage
    storeTaskInLocalStorage(taskInput.value);


    //Clear input
    taskInput.value = '';

    el.preventDefault();
}

//Store task
function storeTaskInLocalStorage(task){
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function removeTask(el){
    if(el.target.parentElement.classList.contains('delete-item')){
        if(confirm("Do that?")){
            el.target.parentElement.parentElement.remove();

            //Remove from Local Storage
            removeTaskFromLocalStorage(el.target.parentElement.parentElement);
            //instead of id of item (cause i haven`t it)
        }
    }
}

//Remove from Local Storage
function removeTaskFromLocalStorage(taskItem){
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task, index){
        if(taskItem.textContent === task){
            tasks.splice(index, 1);
        }
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

//Clear tasks
function clearTasks(){
    //Slower(minimally) clearing because of innerHTML
    // if (confirm("Do that?")) {
    //     taskList.innerHTML = '';
    // }

    //Faster clearing
    if (confirm("Do that?")) {
        while (taskList.firstChild) {
            taskList.removeChild(taskList.firstChild);
        }
        }
    

    //Clear from Local Storge
    clearTasksFromLocalStorage();
}

//Clear tasks from Local Storage
function clearTasksFromLocalStorage(){
    localStorage.clear();
}

//Filter tasks
function filterTasks(el){
    const text = el.target.value.toLowerCase();
    document.querySelectorAll(".collection-item").forEach(function (task) {
        const item = task.firstChild.textContent;
        if (item.toLowerCase().indexOf(text) != -1) {
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
    });

}
