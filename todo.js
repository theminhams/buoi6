//buoc1: lay ra the div
const todoContainer = document.querySelector(".todo-container")
//buoc2: fetch
fetch('https://65859ecf022766bcb8c90509.mockapi.io/Task', {
  method: 'GET',
  headers: {'content-type':'application/json'},
}).then(res => {
  if (res.ok) {
      return res.json();
  }
  // handle error
}).then(todos => {
  // Do something with the list of tasks
    todos.forEach(
        (todo) => {
            const doing = document.createElement('div')
            doing.classList.add("do")
            doing.innerHTML=
            `<p>createdAT : ${todo.createdAt}</p>
            <p>name : ${todo.name}</p>
            <p>id : ${todo.id}</p> <br>`
            todoContainer.appendChild(doing)
        }
    )
}).catch(error => {
  // handle error
})