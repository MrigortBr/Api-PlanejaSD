const app = document.getElementById("app");
let html = "./pages/courses.html";
let idPage = 1;

const pages = {
  1: "./pages/courses.html",
  2: "./pages/about.html",
  3: "./pages/data.html",
};

function createLocalStorage() {
  localStorage.setItem("page", pages[1]);
  localStorage.setItem("idPage", 1);
}

function load() {
  if (localStorage.getItem("page") == undefined) {
    createLocalStorage();
  }

  html = localStorage.getItem("page");
  idPage = localStorage.getItem("idPage");
  update();
}

function updateLocalStorage() {
  localStorage.setItem("page", html);
  localStorage.setItem("idPage", idPage);
  update();
}

load();

function update() {
  app.data = html;
}

function switchPage(idPageRequest) {
  html = pages[idPageRequest];
  idPage = idPageRequest;
  updateLocalStorage();
}
