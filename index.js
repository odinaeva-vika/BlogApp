const taskForm = document.querySelector("#taskForm");
const taskInput = document.querySelector("#tastInput");
const taskTextarea = document.querySelector("#taskTextarea");
const taskNewsfeed = document.querySelector("#taskNewsfeed");
const taskCheckTitle = document.querySelector("#taskCheckTitle");
const taskCheckText = document.querySelector("#taskCheckText");

const posts = [];

const getInputFromUser = () => taskInput.value;
const getTextareaFromUser = () => taskTextarea.value;

const getFormHandler = (e) => {
  e.preventDefault(); //отменяем обновление страницы

  const title = getInputFromUser();
  const text = getTextareaFromUser();
  const date = new Date().toLocaleDateString();
  const options = { hour: 'numeric', minute: 'numeric' };
  const time = new Date().toLocaleTimeString([], options);
  
toggleValidationWarning();

  if (title.length >= 100 || text.length >= 200) {
    return; // прекращаем выполнение функции и не добавляем пост
  }

  posts.push ({
    title,
    text,
    date,
    time,
  });
  
  clearFromUser();
  showNewsfeedFromUser();
}

const clearFromUser = () => {
  taskInput.value = "";
  taskTextarea.value = "";

  taskInput.focus();
}

const showNewsfeedFromUser = () => {
  taskNewsfeed.innerText = "";

  posts.forEach((post) => {
    const lentaItem = `<div class="lenta-box"> 
            <time class="lenta-box__time">${post.date} ${post.time}</time>
            <h3 class="lenta-box__title">${post.title}</h3>
            <p class="lenta-box__text">${post.text}</p>
          </div>`;
         taskNewsfeed.insertAdjacentHTML("beforeEnd", lentaItem); 
  });    
}

const toggleValidationWarning = () => {

  if (getInputFromUser().length >= 100) {
    taskCheckTitle.classList.add("display");
  } else {
    taskCheckTitle.classList.remove("display");
  }

  if (getTextareaFromUser().length >= 200) {
    taskCheckText.classList.add("display");
  } else {
    taskCheckText.classList.remove("display");
  }
};

taskForm.addEventListener("submit", getFormHandler);