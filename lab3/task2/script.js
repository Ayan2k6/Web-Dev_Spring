// Находим элементы на странице по их ID
let taskInput = document.getElementById("new-task");
let addButton = document.getElementById("add-btn");
let todoList = document.getElementById("todo-list");

// Функция для добавления новой задачи
function addTask() {
    // Получаем текст из поля ввода
    let taskText = taskInput.value;

    // Проверка: если поле пустое, ничего не делаем
    if (taskText === "") {
        alert("Пожалуйста, введите задачу!");
        return;
    }

    // 1. Создаем новый элемент списка (li)
    let li = document.createElement("li");

    // 2. Создаем чекбокс
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    // Добавляем событие: когда меняем чекбокс, текст зачеркивается
    checkbox.addEventListener("change", function() {
        if (checkbox.checked) {
            span.classList.add("done"); // Добавляем класс стиля
        } else {
            span.classList.remove("done"); // Убираем класс
        }
    });

    // 3. Создаем текст задачи (span)
    let span = document.createElement("span");
    span.textContent = taskText;

    // 4. Создаем кнопку удаления
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "🗑"; // Иконка корзины
    deleteBtn.className = "delete-btn";

    // Добавляем событие: при клике удаляем весь элемент li
    deleteBtn.addEventListener("click", function() {
        li.remove();
    });

    // Собираем всё вместе внутри li
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);

    // Добавляем готовый li в наш список (ul)
    todoList.appendChild(li);

    // Очищаем поле ввода
    taskInput.value = "";
}

// Добавляем обработчик события "клик" на кнопку Add
addButton.addEventListener("click", addTask);

// (Дополнительно) Чтобы работало нажатие Enter в поле ввода
taskInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});