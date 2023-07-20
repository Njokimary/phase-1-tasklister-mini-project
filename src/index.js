document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('create-task-form');
  const taskList = document.getElementById('tasks');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Get the task description entered by the user
    const taskDescription = document.getElementById('new-task-description').value;

    // Create a new DOM element to display the task
    const taskItem = document.createElement('li');

    // Create a span element to hold the task description
    const taskDescriptionSpan = document.createElement('span');
    taskDescriptionSpan.textContent = taskDescription;

    // Create a delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
      taskItem.remove();
    });

    // Create an edit button
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', () => {
      const newTaskDescription = prompt('Edit task description:', taskDescription);
      if (newTaskDescription !== null && newTaskDescription.trim() !== '') {
        taskDescriptionSpan.textContent = newTaskDescription;
      }
    });

    // Append the task description and buttons to the task item
    taskItem.appendChild(taskDescriptionSpan);
    taskItem.appendChild(deleteButton);
    taskItem.appendChild(editButton);

    // Append the new task to the task list in the DOM
    taskList.appendChild(taskItem);

    // Clear the input field after the task is added
    document.getElementById('new-task-description').value = '';
  });

  // Stretch Deliverable: Implement priority text color based on dropdown selection
  const priorityDropdown = document.getElementById('priority-dropdown');
  priorityDropdown.addEventListener('change', (event) => {
    const selectedPriority = event.target.value;
    const tasks = document.getElementsByTagName('li');
    for (const task of tasks) {
      task.style.color = selectedPriority;
    }
  });
});
