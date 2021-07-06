document.addEventListener("DOMContentLoaded", () => {
  const taskList = new taskList();

  let newTaskForm = document.querySelectory('#create-task-form')
  let newTaskDescription = document.querySelector('#new-task-description')
  // let newTaskPriority = document.querySelector('#new-task-priority')

  let newTask = document.querySelector('#tasks')

  const renderApp = () => {
    
  }


  document.querySelector('#create-task-form').addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(e)

    // let createTask = {

    // }

  })
});
