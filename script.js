const inputEl = document.querySelector(".todo__input");
const todoTasksEl = document.querySelectorAll(".todo__task");
const errorMessageEl = document.querySelector(".todo__error-message");
const todoTasksList = document.querySelector(".todo__tasks");

const tasks = [];

inputEl.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();

    const task = inputEl.value;

    if (task === "") {
      alert("You must enter some text into input field!");
      return;
    }

    if (tasks.includes(task)) {
      errorMessageEl.style.display = "block";
      inputEl.value = "";
    } else {
      errorMessageEl.style.display = "none";
      tasks.push(task);
      inputEl.value = "";

      renderToDoTasks(tasks);
    }

    // Ovo je OK za dodavanje, no teže je kasnije raditi s time,
    // bolje je napraviti array samo s vrijednostima

    // let newTask = document.createElement("div");
    // newTask.innerText = inputEl.value; // value je vrijednost input polja
    // newTask.classList.add("todo__task");
    // document.querySelector(".todo__tasks").appendChild(newTask);
  }
  //   console.log(event.target); // ispisuje element unutar kojeg se događa event
});

// Bornina ideja:

function renderToDoTasks(tasks) {
  todoTasksList.innerHTML = ""; // isprazni dosadašnju listu
  tasks.forEach((task, index) => {
    const taskEl = document.createElement("div");
    taskEl.className = "todo__task";
    const paragraphEl = document.createElement("p");
    const deleteEl = document.createElement("a");
    deleteEl.className = "todo__task-delete";
    deleteEl.innerText = "Delete";
    deleteEl.href = "#";

    deleteEl.addEventListener("click", function (event) {
      let currentText = event.target.previousSibling.innerText;
      //   currentText = currentText.substring(currentText.indexOf(" ") + 1);
      tasks.splice(tasks.indexOf(task), 1);
      renderToDoTasks(tasks);
    });

    // todoTaskDelete.addEventListener("click", function (event) {
    //     const taskToDelete = event.target.parentNode;
    //     console.log(taskToDelete.firstChild.innerText);
    //   });

    // taskEl.innerText = index + 1 + ". " + task; // ovo ili iduće:
    paragraphEl.innerText = `${index + 1}. ${task}`; // template literal (backtickovi AltGr+7)
    taskEl.appendChild(paragraphEl);
    taskEl.appendChild(deleteEl);
    todoTasksList.appendChild(taskEl);
  });
}

// Moja ideja (funkcionira, bolja jer ne briše svaki put cijelu listu taskova):

/* function renderToDoTasks(tasks) {
   const taskEl = document.createElement("div");
   taskEl.className = "todo__task";
   const nextIndex = tasks.length - 1;

   if (!nextIndex) {  //ako je ovo prvi task
     todoTasksList.innerHTML = "";  //isprazni dosadašnju listu
   }

   taskEl.innerText = nextIndex + 1 + ". " + tasks[nextIndex];

   todoTasksList.appendChild(taskEl);
 }  */

// Kako postaviti event listener na više elemenata

// todoTasksEl.forEach(function (todoTaskEl) {
//   todoTaskEl.addEventListener("click", (event) => {
//     console.log(event.target.innerText); // ispisuje element unutar kojeg se događa event
//   });
// });
