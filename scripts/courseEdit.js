let course = {};
let questionEdit = {};
let axiosClass = {};

function initLoad() {
  const divLoad = document.createElement("div");
  divLoad.className = "load";
  document.body.appendChild(divLoad);
}

function removeLoad() {
  const divLoad = document.querySelector(".load");
  divLoad.classList.add("remove-load");
  setTimeout(() => {
    if (divLoad) {
      divLoad.parentNode.removeChild(divLoad);
    }
  }, 510);
}

function initCourseInfo(title, src) {
  const divCourse = document.getElementsByClassName("course-info")[0];
  divCourse.innerHTML = "";

  const titleCourse = document.createElement("h1");
  titleCourse.id = "titleCourse";
  titleCourse.textContent = title;

  const image = document.createElement("img");
  image.src = src;
  image.alt = "";
  image.id = "picture";

  const btnUpdate = document.createElement("button");
  btnUpdate.classList.add("updateQuestion");
  btnUpdate.textContent = "Atualizar Curso";
  btnUpdate.setAttribute("onclick", "updateCourse()");

  const btnDelete = document.createElement("button");
  btnDelete.classList.add("delete");
  btnDelete.textContent = "Deletar";
  btnDelete.setAttribute("onclick", "deleteCourse()");

  const buttonsDiv = document.createElement("div");
  buttonsDiv.classList.add("buttons-course");
  buttonsDiv.appendChild(btnUpdate);
  buttonsDiv.appendChild(btnDelete);

  divCourse.appendChild(titleCourse);
  divCourse.appendChild(image);
  divCourse.appendChild(buttonsDiv);
}

async function init() {
  initLoad();
  await setTimeout(async () => {
    axiosClass = new Course();
    const courseStorage = JSON.parse(sessionStorage.getItem("course"));
    await axiosClass.init(courseStorage.id).then(() => {
      course = axiosClass.getCourseObject();
    });
    initCourseInfo(course.name, "../assets/noImage.svg");
    createListQuestions(course.questions);
    removeLoad();
  }, 0);
}

async function updateCourse() {
  for (const questions of course.questions) {
    for (const choice of questions.choices) {
      if (choice.choice.id.toString().search("temp") !== -1) {
        choice.choice.id = null;
      }
      if (choice.justifyChoice.id.toString().search("temp") !== -1) {
        choice.justifyChoice.id = null;
      }
    }
  }
  initLoad();
  const result = await axiosClass.update(course);
  removeLoad();
  alert(result.text);
  init();
}

function deleteCourse() {}

function createListQuestions(questions) {
  const questionsHTML = document.getElementsByClassName("questions")[0];
  questionsHTML.innerHTML = "";
  let areas = ``;
  let cont = 1;
  var sortedQuestions = [...questions].sort(
    (a, b) => a.question.position - b.question.position
  );

  for (const question of sortedQuestions) {
    if (question.deleted !== true) {
      createCount(question.question.position, questionsHTML, cont);
      const questionDiv = document.createElement("div");
      questionDiv.classList.add("question");
      questionDiv.setAttribute("grid", `q${cont}`);
      questionDiv.setAttribute("identifier", `${question.question.id}`);
      questionDiv.style.gridArea = `q${cont}`;
      createQuestionTitle(question.question.title, questionDiv);

      const choicesSpan = document.createElement("span");
      choicesSpan.classList.add("choices");

      for (const choice of question.choices) {
        createChoice(choice, choicesSpan);
      }

      questionDiv.appendChild(choicesSpan);
      createButtons(questionDiv, question);

      questionsHTML.appendChild(questionDiv);

      areas += `"c${cont} q${cont}"`;

      cont++;
    }
  }
  questionsHTML.style.gridTemplateAreas = areas;
}

function createCount(position, questionsHTML, cont) {
  const count = document.createElement("div");
  count.classList.add("count");
  count.setAttribute("grid", `c${cont}`);
  count.style.gridArea = `c${cont}`;

  const text = document.createElement("span");
  text.innerHTML = position;

  count.appendChild(generateCaretSVG("carret-up", 180, cont));
  count.appendChild(text);
  if (course.questions.length == cont) {
    const button = generateCaretSVG("carret-down", 0, cont);
    button.id = "last-button";
    count.appendChild(button);
  } else count.appendChild(generateCaretSVG("carret-down", 0, cont));
  questionsHTML.appendChild(count);
}

function createQuestionTitle(title, questionDiv) {
  const questionTitle = document.createElement("span");

  questionTitle.classList.add("question-title");

  const questionTitleH1 = document.createElement("h1");

  questionTitleH1.classList.add("question-title-h1");

  questionTitleH1.textContent = title;

  questionTitle.appendChild(questionTitleH1);

  questionDiv.appendChild(questionTitle);
}

function createChoice(choice, choicesSpan) {
  if (!choice.choice.deleted) {
    const choiceSpan = document.createElement("span");
    choiceSpan.classList.add("choice");
    const titleChoice = document.createElement("span");
    titleChoice.classList.add("title-choice");
    titleChoice.textContent = choice.choice.title;
    choiceSpan.appendChild(titleChoice);

    if (choice.justifyChoice !== undefined) {
      const justifySpan = document.createElement("span");
      justifySpan.classList.add("justify");
      justifySpan.textContent = choice.justifyChoice.title;
      choiceSpan.appendChild(justifySpan);
    }

    choicesSpan.appendChild(choiceSpan);
  }
}

function createButtons(questionDiv, question) {
  const editButton = document.createElement("button");
  editButton.classList.add("edit");

  editButton.innerText = "Editar";
  editButton.setAttribute("onclick", `editQuestion(${question.question.id})`);

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete");

  deleteButton.innerText = "Deletar";
  deleteButton.setAttribute(
    "onclick",
    `deleteQuestion(${question.question.id})`
  );

  questionDiv.appendChild(editButton);
  questionDiv.appendChild(deleteButton);
}

function generateCaretSVG(classname, rotate, cont) {
  let onClickFunction;

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  svg.setAttribute("width", "16");
  svg.setAttribute("height", "16");
  svg.setAttribute("fill", "currentColor");
  svg.setAttribute("class", classname);
  svg.setAttribute("viewBox", "0 0 16 16");
  svg.setAttribute("style", `transform: rotate(${rotate}deg);`);

  if (rotate === 180) {
    svg.onclick = async () => {
      await changeOrder(cont, -1);
    };
  } else {
    svg.onclick = async () => {
      await changeOrder(cont, 1);
    };
  }
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute(
    "d",
    "M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0"
  );

  svg.appendChild(path);

  return svg;
}

async function changeOrder(cont, sum = 1) {
  if (course.questions.length < cont + sum || cont + sum <= 0) {
    return;
  }

  const countElement = document.querySelector(`[grid="c${cont}"]`);

  const questionElement = document.querySelector(`[grid="q${cont}"]`);

  const countElementTo = document.querySelector(`[grid="c${cont + sum}"]`);
  const questionElementTo = document.querySelector(`[grid="q${cont + sum}"]`);

  const idOld = questionElement.getAttribute("identifier");
  const idNew = questionElementTo.getAttribute("identifier");
  for (const question of course.questions) {
    if (question.question.id == idOld) {
      question.question.position = cont + sum;
    }

    if (question.question.id == idNew) {
      question.question.position = cont;
    }
  }
  countElement.setAttribute("grid", `c${cont + sum}`);
  countElement.style.gridArea = `c${cont + sum}`;

  questionElement.setAttribute("grid", `q${cont + sum}`);
  questionElement.style.gridArea = `q${cont + sum}`;

  countElementTo.setAttribute("grid", `c${cont}`);
  countElementTo.style.gridArea = `c${cont}`;

  questionElementTo.setAttribute("grid", `q${cont}`);
  questionElementTo.style.gridArea = `q${cont}`;

  countElement.querySelector("span").innerText = cont + sum;
  countElementTo.querySelector("span").innerText = cont;

  questionElement.classList.remove("update");
  setInterval(() => {
    questionElement.classList.add("update");
  }, 250);

  reloadOnClick(countElementTo.querySelectorAll("svg"), cont);
  reloadOnClick(countElement.querySelectorAll("svg"), cont + sum);
}

function reloadOnClick(svg, cont) {
  svg[0].onclick = async () => {
    await changeOrder(cont, -1);
  };

  svg[1].onclick = async () => {
    await changeOrder(cont, 1);
  };

  if (cont == course.questions.length) {
    const lastButton = document.getElementById("last-button");
    lastButton.id = "";
    svg[1].id = "last-button";
  }
}

function deleteChoice(el) {
  const choice = el.parentNode.parentNode;
  document.getElementsByClassName("newQuestion")[0].removeChild(choice);
  const choiceId = choice
    .getElementsByClassName("title-choice")[0]
    .getAttribute("identifier");
  const justifyId = choice
    .getElementsByClassName("new-justify")[0]
    .getElementsByTagName("input")[0]
    .getAttribute("identifier");

  const choices = [];

  for (const choice of questionEdit.choices) {
    if (choice.choice.id == choiceId) {
      try {
        if (choice.choice.id.search("temp") == -1) {
          choice.choice.deleted = true;
          choices.push(choice);
        }
      } catch (error) {}
    }
  }

  questionEdit.choices = choices;
}

function addNewChoiceToQuestion() {
  // Criação da div principal
  const divNewChoice = document.createElement("div");
  divNewChoice.className = "new-choice";

  // Criação do input de título da escolha
  const inputTitleChoice = document.createElement("input");
  inputTitleChoice.type = "text";
  inputTitleChoice.className = "title-choice";
  inputTitleChoice.placeholder = "Escolha";

  // Criação da div para justificativa
  const divNewJustify = document.createElement("div");
  divNewJustify.className = "new-justify";

  // Criação do input de justificativa
  const inputJustification = document.createElement("input");
  inputJustification.type = "text";
  inputJustification.placeholder = "Justificativa";

  // Criação do span para a opção de ativação
  const spanJustify = document.createElement("span");
  spanJustify.className = "justify-span";

  // Criação da div para os botões
  const divButtons = document.createElement("div");
  divButtons.className = "buttons";

  // Criação do ícone de lixeira
  const svgIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svgIcon.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  svgIcon.setAttribute("width", "16");
  svgIcon.setAttribute("height", "16");
  svgIcon.setAttribute("fill", "currentColor");
  svgIcon.setAttribute("class", "bi bi-trash3-fill");
  svgIcon.setAttribute("viewBox", "0 0 16 16");

  const pathIcon = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  pathIcon.setAttribute(
    "d",
    "M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"
  );
  svgIcon.appendChild(pathIcon);
  svgIcon.setAttribute("onclick", "deleteChoice(this)");

  // Adicionando os elementos criados à div principal
  divNewChoice.appendChild(inputTitleChoice);

  divNewJustify.appendChild(spanJustify);
  divNewJustify.appendChild(inputJustification);
  divNewChoice.appendChild(divNewJustify);

  divButtons.appendChild(svgIcon);
  divNewChoice.appendChild(divButtons);

  // Adicionando a div principal à div newQuestion
  const divNewQuestion = document.querySelector(".newQuestion");
  if (divNewQuestion) {
    divNewQuestion.appendChild(divNewChoice);
  }
}

function editQuestion(idQuestion) {
  for (const quest of course.questions) {
    if (quest.question.id == idQuestion) {
      questionEdit = quest;
      break;
    }
  }

  questionEdit.edit = true;
  createQuestionElement(questionEdit);
}

function getQuestionUpdated() {
  const divNewQuestion = document.querySelector(".newQuestion");

  const title = divNewQuestion.querySelector('input[type="text"]').value;
  divNewQuestion.querySelector('input[type="text"]').value = "";
  const text = divNewQuestion.querySelector("textarea").value;
  divNewQuestion.querySelector("textarea").value = "";
  const choicesDiv = document.getElementsByClassName("new-choice");
  const choices = [];
  let id = 0;
  for (const choice of choicesDiv) {
    id++;
    const choiceHtml = choice.getElementsByClassName("title-choice")[0];
    const justify = choice
      .getElementsByClassName("new-justify")[0]
      .getElementsByTagName("input")[0];

    if (choiceHtml.getAttribute("identifier") === null) {
      choices.push({
        choice: {
          id: `tempIdChoice${id}`,
          title: choiceHtml.value,
        },
        justifyChoice: {
          id: `tempIdJustify${id}`,
          title: justify.value,
        },
      });
    } else {
      choices.push({
        choice: {
          id: choiceHtml.getAttribute("identifier"),
          title: choiceHtml.value,
        },
        justifyChoice: {
          id: justify.getAttribute("identifier"),
          title: justify.value,
        },
      });
    }
  }

  if (questionEdit.question == undefined) {
    let position = 1;
    let size = 0;
    for (const question of course.questions) {
      if (question.question.deleted !== true) {
        size++;
      }
    }

    if (size > 0) {
      position = size + 1;
    }

    const newQuestion = {
      question: {
        id: null,
        title: title,
        text: text,
        position: position,
      },
      new: true,
      choices: choices,
    };
    course.questions.push(newQuestion);
  } else {
    questionEdit.question.title = title;
    questionEdit.question.text = text;
    for (const choice of choices) {
      let finded = false;
      for (const oldChoice of questionEdit.choices) {
        if (choice.choice.id == oldChoice.choice.id) {
          oldChoice.choice.title = choice.choice.title;
          if (oldChoice.justifyChoice == undefined) {
            oldChoice.justifyChoice = undefined;
          } else {
            oldChoice.justifyChoice.title = choice.justifyChoice.title;
          }
          finded = true;
          break;
        }
      }
      if (!finded) {
        questionEdit.choices.push(choice);
      }
    }
  }

  questionEdit = {};

  createQuestionElement();
  createListQuestions(course.questions);
}

function createQuestionElement(questionData) {
  if (!questionData) {
    questionData = {
      question: {
        title: "",
        text: "",
      },
      choices: [
        {
          choice: {
            title: "",
          },
        },
      ],
    };
  }

  // Seleciona a div com a classe "newQuestion"
  var divQuestion = document.querySelector(".newQuestion");
  divQuestion.innerHTML = "";

  // Cria e adiciona o input para o título da pergunta
  var inputTitle = document.createElement("input");
  inputTitle.type = "text";
  inputTitle.placeholder = "Nova Questão";
  inputTitle.value = questionData.question.title;
  divQuestion.appendChild(inputTitle);

  // Cria e adiciona o textarea para o texto da pergunta
  var textareaText = document.createElement("textarea");
  textareaText.placeholder = "Texto";
  textareaText.value = questionData.question.text;
  divQuestion.appendChild(textareaText);

  // Cria a div para os botões da pergunta
  var divButtons = document.createElement("div");
  divButtons.classList.add("buttons-question");
  divQuestion.appendChild(divButtons);

  // Cria e adiciona o botão de atualizar
  var btnUpdate = document.createElement("button");
  btnUpdate.classList.add("updateQuestion");
  btnUpdate.textContent = "Atualizar";
  btnUpdate.setAttribute("onclick", "getQuestionUpdated()");

  divButtons.appendChild(btnUpdate);

  // Cria e adiciona o botão de nova alternativa
  var btnNew = document.createElement("button");
  btnNew.classList.add("new");
  btnNew.textContent = "Nova alternativa";
  btnNew.setAttribute("onclick", "addNewChoiceToQuestion()");
  divButtons.appendChild(btnNew);

  // Cria e adiciona o botão de deletar
  var btnDelete = document.createElement("button");
  btnDelete.classList.add("delete");
  btnDelete.textContent = "Deletar";
  btnDelete.setAttribute("onclick", "createQuestionElement()");
  divButtons.appendChild(btnDelete);

  // Adiciona as novas escolhas
  questionData.choices.forEach(function (choiceData) {
    var choice = choiceData.choice;
    var divChoice = document.createElement("div");
    divChoice.classList.add("new-choice");
    var inputChoice = document.createElement("input");
    inputChoice.classList.add("title-choice");
    inputChoice.type = "text";
    if (choiceData.choice.id !== null) {
      inputChoice.setAttribute("identifier", choiceData.choice.id);
    }
    inputChoice.placeholder = "Escolha";
    inputChoice.value = choice.title;
    divChoice.appendChild(inputChoice);

    var divJustify = document.createElement("div");
    divJustify.classList.add("new-justify");
    var inputJustify = document.createElement("input");
    inputJustify.type = "text";
    inputJustify.placeholder = "Justificativa";
    if (choiceData.justifyChoice !== undefined) {
      inputJustify.value = choiceData.justifyChoice.title;
      inputJustify.setAttribute("identifier", choiceData.justifyChoice.id);
    }
    divJustify.appendChild(inputJustify);
    divChoice.appendChild(divJustify);

    var divButtonsChoice = document.createElement("div");
    divButtonsChoice.classList.add("buttons");
    var svgDelete = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );
    svgDelete.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svgDelete.setAttribute("width", "16");
    svgDelete.setAttribute("height", "16");
    svgDelete.setAttribute("fill", "currentColor");
    svgDelete.setAttribute("class", "bi bi-trash3-fill");
    svgDelete.setAttribute("viewBox", "0 0 16 16");
    svgDelete.addEventListener("click", function () {
      deleteChoice(this);
    });
    var pathDelete = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );
    pathDelete.setAttribute(
      "d",
      "M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"
    );
    svgDelete.appendChild(pathDelete);
    divButtonsChoice.appendChild(svgDelete);
    divChoice.appendChild(divButtonsChoice);
    divQuestion.appendChild(divChoice);
  });
}

function deleteQuestion(idQuestions) {
  for (const question of course.questions) {
    if (question.question.id == idQuestions) {
      question.question = {
        id: idQuestions,

        position: null,
      };
      question.deleted = true;
      break;
    }
  }
  createListQuestions(course.questions);
}
