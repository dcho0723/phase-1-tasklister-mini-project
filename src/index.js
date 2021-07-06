document.addEventListener("DOMContentLoaded", () => {

  let newTaskDescription = document.querySelector('#new-task-description');
  let btn = document.createElement('button')



  document.querySelector('#create-task-form').addEventListener('submit', (e) => {
    e.preventDefault();
    let listItems = document.createElement('li')
    let toDoList = document.querySelector('#list')
    

    btn.textContent = "remove"
    listItems.textContent = newTaskDescription.value 
     toDoList.append(listItems, btn)

     btn.addEventListener('click', () => {
       listItems.remove()
     })
    
  })

})