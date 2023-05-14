let tasks = [
  {
    titulo: "Comprar comida para o gato",
    tipo: "urgente",
  },
  {
    titulo: "Limpar o quarto",
    tipo: "urgente",
  },
  {
    titulo: "Consertar Computador",
    tipo: "prioritário",
  },
  {
    titulo: "Guardar dinheiro do lanche",
    tipo: "urgente",
  },
  {
    titulo: "Beber água",
    tipo: "prioritário",
  },
];

const tasksList = document.getElementById("tasks__list");

const addButton = document.querySelector(".add-box__button");

const loadList = () => {
  tasksList.innerHTML = "";

  const urgentes = tasks.filter((task) => task.tipo == "urgente");
  const prioritarios = tasks.filter((task) => task.tipo == "prioritário");
  const normais = tasks.filter((task) => task.tipo == "normal");

  const tasksOrganized = [...urgentes, ...prioritarios, ...normais];

  for (let i = 0; i < tasksOrganized.length; i++) {
    const li = document.createElement("li");

    const div = document.createElement("div");
    div.classList.add("task__infs");

    const ball = document.createElement("div");
    ball.classList.add("task__ball");

    const span = document.createElement("span");
    span.innerText = tasksOrganized[i].titulo;

    div.appendChild(ball);
    div.appendChild(span);

    const button = document.createElement("button");
    button.innerHTML = '<i class="fas fa-trash-alt"></i>';

    li.appendChild(div);
    li.appendChild(button);

    tasksList.appendChild(li);

    li.classList.add("task");

    if (tasksOrganized[i].tipo == "normal") {
      ball.classList.add("normal");
    } else if (tasksOrganized[i].tipo == "prioritário") {
      ball.classList.add("prioritario");
    } else {
      ball.classList.add("urgente");
    }
  }
};

loadList();

addButton.addEventListener("click", () => {
  const titleError = document.getElementById("titleError");

  const typeError = document.getElementById("typeError");

  const inputName = document.getElementById("input-name");

  const selectImportance = document.getElementById("select-importance");

  const titulo = inputName.value;
  const tipo = selectImportance.value;

  if (titulo == "") {
    titleError.innerText = "Campo obrigatório";
  } else {
    titleError.innerText = "";
  }

  if (tipo == "0") {
    typeError.innerText = "Campo obrigatório";
  } else {
    typeError.innerText = "";
  }

  if (titulo != "" && tipo != "0") {
    tasks.push({ titulo, tipo });

    loadList();
  }
});
