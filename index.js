const taskForm = document.querySelector("#taskForm");
const taskInput = document.querySelector("#tastInput");
const taskTextarea = document.querySelector("#taskTextarea");
const taskLenta = document.querySelector("#taskLenta");
const taskChekTitle = document.querySelector("#taskChekTitle");
const taskChekText = document.querySelector("#taskChekText");

const posts = [];

const getInputFromUser = () => taskInput.value;
const getTextareaFromUser = () => taskTextarea.value;

const getFormHandler = (e) => {
  e.preventDefault(); //отменяем обновление страницы

  const title = getInputFromUser();
  const text = getTextareaFromUser();
  const date = new Date().toLocaleDateString();
  const time = new Date().toLocaleTimeString().slice(0,-3);
  
  showFromUser();

  if (getInputFromUser().length >= 100 || getTextareaFromUser().length >= 200) {
    return; // прекращаем выполнение функции и не добавляем пост
  }

  posts.push ({
    title,
    text,
    date,
    time,
  });
  
  clearFromUser();
  showLentaFromUser();
}

const clearFromUser = () => {
  taskInput.value = "";
  taskTextarea.value = "";

  taskInput.focus();
}

const showLentaFromUser = () => {
  taskLenta.innerText = "";

  posts.forEach((post) => {
    const lentaItem = `<div class="lenta-box"> 
            <time class="lenta-box__time">${post.date} ${post.time}</time>
            <h3 class="lenta-box__title">${post.title}</h3>
            <p class="lenta-box__text">${post.text}</p>
          </div>`;
         taskLenta.insertAdjacentHTML("beforeEnd", lentaItem); 
  });    
}

const showFromUser = () => {

  if (getInputFromUser().length >= 100) {
    taskChekTitle.classList.add("display");
  } else {
    taskChekTitle.classList.remove("display");
  }

  if (getTextareaFromUser().length >= 200) {
    taskChekText.classList.add("display");
  } else {
    taskChekText.classList.remove("display");
  }
};

taskForm.addEventListener("submit", getFormHandler);