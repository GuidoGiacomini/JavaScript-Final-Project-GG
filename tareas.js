let tareas = JSON.parse(localStorage.getItem("tareas"))  || []

document.body.style.overflowX = 'hidden'

let DateTime = luxon.DateTime
const listContainer = document.getElementById("ul1")
const inputTaskName = document.getElementById("taskName")
const inputTask = document.getElementById("addTask")
const addBtn = document.getElementById("addBtn")
const addTaskBtn = document.getElementById("addTaskBtn")
const cancelBtn = document.getElementById("cancelBtn")
const taskDeleteBtn = document.getElementById("taskDeleteBtn")
const taskManager = document.getElementById("taskManager")
const backgroundImg = document.getElementById("imgPrincipalBackground")

const coloresDeFondo = document.getElementById("colores")
coloresDeFondo.addEventListener("click", () => {
    if(coloresDeFondo.childElementCount <= 0){
        try{fetch('colores.json')
            .then(response => response.json())
            .then(data => {
              data.forEach(color => {
                  const listItem = document.createElement('li')
                  listItem.innerHTML = `
                                        <div>
                                            <p> - ${color.colorName}</p>
                                        </div>
                                       `
                listItem.setAttribute('data-color-name', color.colorName)
                listItem.setAttribute('data-color-value', color.colorValue)

                listItem.addEventListener("click", () => {
                    const colorValue = listItem.getAttribute('data-color-value')
                    document.body.style.backgroundColor = colorValue
                    sessionStorage.setItem('backgroundColor', colorValue)
                })
                coloresDeFondo.appendChild(listItem)
              }) 
          })
        }
        catch(error){
            console.error('Error fetching data: ', error)
        }
    }else{
        coloresDeFondo.innerHTML = "+ Colores de fondo"
    }
})

const backgroundColor = sessionStorage.getItem("backgroundColor")
if(backgroundColor){
    document.body.style.backgroundColor = backgroundColor
}

addBtn.addEventListener("click", () => {

    if(inputTaskName.value === "" || inputTask.value === ""){
        Swal.fire({
            title: 'Escribe dentro del cuadro de texto',
            icon: 'info',
            toast: true,
            showConfirmButton: false,
            backdrop: false,
            timer: 1500,
            timerProgressBar: true,
            position: 'bottom-end',
          })
    }
    else{
        let tarea = {
            name: `${inputTaskName.value}`,
            description: `${inputTask.value}`,
            id: `${crypto.randomUUID()}`
        }
        tareas.push(tarea)
        localStorage.setItem("tareas", JSON.stringify(tareas))

        let li = document.createElement("li")
        li.innerHTML = `<span id="${tarea.id}">
                        <div id="taskContainer">
                            <div>
                                <p id="liTaskName">${tarea.name}</p>
                                <p id="liTask">${tarea.description}</p>
                            </div>
                            <div id="taskButtons">
                                <button class="taskDeleteBtn" id="taskDeleteBtn">Completada</button>
                            </div>
                        </div>
                        </span>`
        listContainer.appendChild(li)
    }
    inputTaskName.value = ""
    inputTask.value = ""
})

function mostrarTareas(){
    tareas.forEach(tarea => {
        let li = document.createElement("li")
        li.innerHTML = `<span id="${tarea.id}">
                        <div id="taskContainer">
                            <div>
                                <p id="liTaskName">${tarea.name}</p>
                                <p id="liTask">${tarea.description}</p>
                            </div>
                            <div id="taskButtons">
                                <button class="taskDeleteBtn" id="taskDeleteBtn">Completada</button>
                            </div>
                        </div>
                        </span>`
        listContainer.appendChild(li)
    })
}

const contenedorTareas = document.getElementById("containerTasks")
contenedorTareas.addEventListener("click", (event) => {
    if(event.target && event.target.classList.contains("taskDeleteBtn")){
        const parentElement = event.target.closest("span")
        const id = parentElement.id
        eliminarTarea(id)
    }
})

function eliminarTarea(idTarea){
    for(i=0; i<tareas.length;i++){
        if(tareas[i].id == idTarea){
            tareas.splice(i,1)
        }
    }
    const tareaAEliminar = document.getElementById(`${idTarea}`)
    tareaAEliminar.remove()
    localStorage.setItem("tareas", JSON.stringify(tareas))
    Swal.fire({
        title: 'Tarea eliminada',
        icon: 'success',
        toast: true,
        showConfirmButton: false,
        backdrop: false,
        timer: 1500,
        timerProgressBar: true,
        position: 'bottom-end',
      })
}

addTaskBtn.addEventListener("click", () =>{
    taskManager.style.display = "block"
    backgroundImg.style.display = "none"
})

cancelBtn.addEventListener("click", () =>{
    taskManager.style.display = "none"
    backgroundImg.style.display = "block"
})

mostrarTareas()
