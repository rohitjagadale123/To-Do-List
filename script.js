const newTaskInput = document.getElementById('new-task');
const addTaskButton = document.getElementById('add-button');
const taskList = document.getElementById('task-list');

function addTask() {
  const taskText = newTaskInput.value;
  if (taskText === '') {
    return;
  }

  const task = document.createElement('li');
  task.innerHTML = `
    <div class="task-text">${taskText}</div>
    <div class="task-buttons">
      <button class="delete-button">Delete</button>
    </div>
  `;

  const deleteButton = task.querySelector('.delete-button');
  deleteButton.addEventListener('click', () => {
    task.remove();
  });

  taskList.appendChild(task);
  newTaskInput.value = '';
}

addTaskButton.addEventListener('click', addTask);
newTaskInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    addTask();
  }
});
