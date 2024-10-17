import todoStore, { Filters } from '../store/todo.store'
import html from './app.html?raw'
import { renderTodos,renderPending } from './use-cases';


const ElementIDs = {
    TodoList: '.todo-list',
    NewTodoInput: '#new-todo-input',
    ClearCompleted: '.clear-completed',
    TodoFilters: '.filtro', //el . es para clase
    PendingCountLabel: '#pending-count', // el #es para ids
}

/**
 * 
 * @param {string} elementId Donde se va a rendirazar la app.
 */
export const App = (elementId) => {

    const displayTodos = () => {
        const todos = todoStore.getTodos( todoStore.getCurrentFilter());
        console.log(todos);
        renderTodos( ElementIDs.TodoList, todos);
        updatePendingCount();
    }

    //esta funcion maneja la actualizacion del elemento html con la cuenta de las tareas pendientes
    const updatePendingCount = () => {
        renderPending(ElementIDs.PendingCountLabel);
    };

    //funcion anonima autoinvocada
    (() => {

        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elementId).append(app);
        displayTodos();
    })()


    //Referencias HTML , no las puedo crear antes , xq antes de la funcion anonima, no existe aun.

    const newDescriptionInput = document.querySelector(ElementIDs.NewTodoInput);
    const todoListUL = document.querySelector(ElementIDs.TodoList);
    const clearcompletedButton = document.querySelector(ElementIDs.ClearCompleted);
    const filtrosLI = document.querySelectorAll(ElementIDs.TodoFilters);


    //Listeners

    newDescriptionInput.addEventListener('keyup',(event)=>{
        if (event.keyCode !== 13) return;

        if (event.target.value.trim().length === 0) return;
        
        todoStore.addTodo(event.target.value.trim());
        displayTodos();
        event.target.value = '';
        
    });

    //togle del todo
    todoListUL.addEventListener('click',(event)=>{
        //buscar el elemento padre hacia arriba del elemento que estamos dando click que cumpla con tener la propiedad data-id
        const element = event.target.closest('[data-id]');
        const idTodoClicket = element.getAttribute('data-id');
        const elementClicked = event.target;
        //EVALUANDO SI SE TOCO EL LABEL O EL INPUT PARA PODER MARCAR LA TAREA
        if (elementClicked.tagName === 'LABEL' || elementClicked.tagName === 'INPUT') {
            todoStore.toggleTodo(idTodoClicket);
            displayTodos();
        }
    });

    //eliminacion del todo
    todoListUL.addEventListener('click',(event)=>{
        //buscar el elemento padre hacia arriba del elemento que estamos dando click que cumpla con tener la propiedad data-id
        const element = event.target.closest('[data-id]');
        const idTodoClicket = element.getAttribute('data-id');

        //buscando el elemento clickeado
        const elementClicked = event.target;
        //EVALUANDO SI TOCARON EL BUTTON DELETE PARA PROCEDER A ELIMINAR
        if (elementClicked.tagName === 'BUTTON' && elementClicked.className === 'destroy') {

            console.log('puedo eliminar el todo');
            todoStore.deleteTodo(idTodoClicket);
            displayTodos();
        }
        
    });

    //eliminar todos los completados
    clearcompletedButton.addEventListener('click',()=>{
        todoStore.deleteCompleted();
        displayTodos();
    }); 

    filtrosLI.forEach((element)=>{
        element.addEventListener('click',(element)=>{
            filtrosLI.forEach(el=>el.classList.remove('selected')); //limpia todos los elementos de la clase selected
            element.target.classList.add('selected'); // le agrega la clase solo al elemento que se le hizo click

            //establecer segun el valor del filtro clickado el valos en el state

            switch (element.target.text) {
                case 'Todos':
                    todoStore.setFilter(Filters.All);
                    break;
                case 'Pendientes':
                    todoStore.setFilter(Filters.Pending);
                    break;
                case 'Completados':
                    todoStore.setFilter(Filters.Completed);
                    break;
            }
            displayTodos();
        });

    });

    

    //


}