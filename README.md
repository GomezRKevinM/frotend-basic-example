# To-Do App

Este proyecto es una aplicación simple de lista de tareas (To-Do) desarrollada con HTML, CSS y JavaScript. Permite agregar, editar, marcar como completadas y eliminar tareas de una lista interactiva.

## Estructura del Proyecto

- **index.html**: Estructura principal de la aplicación.
- **style.css**: Estilos para la interfaz de usuario.
- **script.js**: Lógica de la aplicación.

---

## Descripción de las Funciones en `script.js`

### Variables principales

- **input**: Referencia al campo de entrada de texto para nuevas tareas.
- **ul**: Referencia al elemento `<ul>` donde se listan las tareas.
- **tasks**: Array que almacena las tareas activas.
- **tasksDone**: (No se utiliza activamente) Array para tareas completadas.
- **elementsTaks**: NodeList de los elementos con clase `.task` (no se utiliza activamente).

---

### Funciones

#### `addTask(task)`
Agrega una nueva tarea al array `tasks` y la muestra en la lista HTML.

- **Parámetros:**  
  - `task` (string): El texto de la tarea a agregar.
- **Acciones:**  
  - Añade la tarea al array.
  - Crea un elemento `<li>` con botones para editar y eliminar.
  - Añade el elemento a la lista visual.
  - Muestra el array actualizado en consola.

---

#### `cargarTareas()`
Carga todas las tareas del array `tasks` y las muestra en la lista HTML al iniciar la aplicación.

- **Acciones:**  
  - Recorre el array `tasks`.
  - Por cada tarea, crea un `<li>` con botones de editar y eliminar.
  - Asigna el evento de marcar como completada (`doneTask`) al hacer clic en la tarea.
  - Añade cada elemento a la lista visual.

---

#### `doneTask(event)`
Marca una tarea como completada visualmente y la elimina del array `tasks`.

- **Parámetros:**  
  - `event`: Evento de clic.
- **Acciones:**  
  - Busca el elemento `<li>` correspondiente.
  - Obtiene el identificador de la tarea.
  - Elimina la tarea del array `tasks`.
  - Alterna la clase CSS `.done` para marcarla como completada.

---

#### `removeTask(event)`
Elimina una tarea tanto del array `tasks` como de la lista HTML.

- **Parámetros:**  
  - `event`: Evento de clic.
- **Acciones:**  
  - Busca el elemento `<li>` correspondiente.
  - Obtiene el identificador de la tarea.
  - Elimina la tarea del array `tasks`.
  - Elimina el elemento `<li>` del DOM.
  - Muestra el array actualizado en consola.

---

#### `editarTask(event)`
Permite editar el texto de una tarea.

- **Parámetros:**  
  - `event`: Evento de clic.
- **Acciones:**  
  - Busca el elemento `<li>` correspondiente.
  - Obtiene el identificador de la tarea.
  - Solicita al usuario el nuevo texto mediante un `prompt`.
  - Si el usuario ingresa un texto válido, actualiza la tarea en el array y en el DOM.

---

#### Evento de entrada (`input.addEventListener`)
Permite agregar una tarea al presionar la tecla Enter en el campo de texto.

- **Acciones:**  
  - Detecta si la tecla presionada es Enter.
  - Si el campo no está vacío, llama a `addTask` para agregar la nueva tarea.

---

#### `cargarTareas()`
Se llama al final del script para inicializar la lista de tareas al cargar la página.

---

## Notas

- Los botones de editar y eliminar usan el atributo `onclick` para llamar a sus funciones correspondientes.
- El array `tasks` es la fuente de verdad para las tareas activas.
- El proyecto puede mejorarse usando delegación de eventos y evitando el uso de atributos `onclick` en HTML.