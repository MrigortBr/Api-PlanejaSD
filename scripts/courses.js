function init() {
  axios.get("http://localhost:2000/courses").then((response) => {
    createCourses(response.data);
  });
}

init();

function createCourses(data) {
  const body = document.body;

  data.forEach((item) => {
    const divCourse = document.createElement("div");
    divCourse.classList.add("course");

    const image = document.createElement("img");

    if (item.course.image) {
      image.src = `data:image/jpeg;base64,${arrayBufferToBase64(
        item.course.image.data
      )}`;
    } else {
      image.src = "../assets/noImage.svg";
    }
    divCourse.appendChild(image);

    const title = document.createElement("h1");
    title.textContent = item.course.name;
    divCourse.appendChild(title);

    const button = document.createElement("button");

    button.textContent = "Navegar";
    button.onclick = function () {
      createObject(item.course);
    };

    divCourse.appendChild(button);

    body.appendChild(divCourse);
  });

  const footer = document.createElement("footer");
  document.body.appendChild(footer);
}

// Função para converter buffer para base64
function arrayBufferToBase64(buffer) {
  let binary = "";
  const bytes = new Uint8Array(buffer);
  const len = bytes.byteLength;

  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }

  return window.btoa(binary);
}

function createObject(data) {
  document.body.innerHTML = "";
  const object = document.createElement("object");
  object.data = "../pages/courseEdit.html";
  data = JSON.stringify(data);
  sessionStorage.setItem("course", data);
  object.type = "text/html";

  document.body.appendChild(object);
}

createObject("../pages/courseEdit.html");
