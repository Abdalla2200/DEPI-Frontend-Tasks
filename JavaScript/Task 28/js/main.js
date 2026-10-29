// Todo list App

const todoForm = document.querySelector("#todoForm");
const todoInput = document.querySelector("#todoInput");
const todoResults = document.querySelector("#todoResults");

todoForm.addEventListener("submit", function (e) {
  e.preventDefault();

  if (todoInput.value.trim() == "") {
    alert("Enter A value");
    return;
  }

  const taskParent = document.createElement("li");
  taskParent.setAttribute("class", "flex items-center justify-between");

  const newTask = document.createElement("p");

  const deleteButton = document.createElement("button");
  deleteButton.setAttribute(
    "class",
    "text-sm rounded-md bg-red-500 hover:bg-red-600 text-white py-2 px-4 cursor-pointer",
  );
  deleteButton.innerHTML = "Delete";

  newTask.innerHTML = todoInput.value;
  taskParent.appendChild(newTask);
  taskParent.appendChild(deleteButton);

  todoResults.appendChild(taskParent);

  todoInput.value = "";

  // Delete Tasks
  deleteButton.addEventListener("click", function (e) {
    e.target.parentElement.remove();
  });
});

// -----------------------------------------------------

// Change Navbar Color on scroll

window.addEventListener("scroll", function () {
  const scrollValue = window.scrollY;
  const navbar = document.querySelector("nav");

  if (scrollValue > 250) {
    navbar.classList.add("bg-gray-600");
  } else {
    navbar.classList.remove("bg-gray-600");
  }
});

// -------------------------------------------------------

// setInterval

let timer = document.querySelector("#timer");
let start = document.querySelector("#start");
let stop = document.querySelector("#stop");
let reset = document.querySelector("#reset");

let interval;

start.addEventListener("click", function () {
  interval = setInterval(function () {
    timer.innerHTML = Number(timer.innerHTML) + 1;
  }, 1000);
});

stop.addEventListener("click", function () {
  clearInterval(interval);
});

reset.addEventListener("click", function () {
  clearInterval(interval);
  timer.innerHTML = 0;
});
