// Espera a que todo el HTML esté cargado antes de ejecutar el JS
document.addEventListener("DOMContentLoaded", () => {

    // Selecciona el input donde escribes la tarea
    const input = document.querySelector("#newTask input");

    // Selecciona el botón "+"
    const addBtn = document.querySelector("#addTask");

    // Selecciona el contenedor principal
    const container = document.querySelector(".container");


    // 🔹 Crear un contenedor donde se guardarán las tareas
    const taskList = document.createElement("div");

    // Le agregamos una clase para darle estilo con CSS
    taskList.classList.add("tasks");

    // Insertamos ese contenedor dentro del HTML
    container.appendChild(taskList);


    // 🔹 Función que crea una nueva tarea
    function crearTarea() {

        // Guardamos el texto que el usuario escribió
        const tasktext = input.value;

        // Validamos que no esté vacío
        if (tasktext.trim() === "") {
            alert("Por favor, escribe una tarea.");
            return; // Detiene la función si está vacío
        }

        // 🔸 Crear el contenedor de la tarea
        const task = document.createElement("div");
        task.classList.add("task");

        // 🔸 Crear el texto de la tarea
        const span = document.createElement("span");
        span.textContent = tasktext;

        // 🔸 Crear botón para eliminar la tarea
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "✖️";


        // 🔹 Evento para eliminar la tarea
        deleteButton.addEventListener("click", () => {
            task.remove(); // Borra la tarea del DOM
        });

        // 🔹 Evento para marcar tarea como completada
        span.addEventListener("click", () => {
            task.classList.toggle("completed"); 
            // Agrega o quita la clase "completed"
        });


        // 🔸 Agregamos el texto y el botón dentro de la tarea
        task.appendChild(span);
        task.appendChild(deleteButton);

        // 🔸 Agregamos la tarea a la lista
        taskList.appendChild(task);

        // 🔸 Limpiamos el input después de agregar la tarea
        input.value = "";
    }


    // 🔹 Evento: cuando haces click en el botón "+"
    addBtn.addEventListener("click", crearTarea);


    // 🔹 Evento: cuando presionas ENTER dentro del input
    input.addEventListener("keydown", (e) => {

        // Verifica si la tecla presionada es "Enter"
        if (e.key === "Enter") {
            crearTarea(); // Llama la función
        }
    });

});