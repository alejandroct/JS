import todoStore from '../store/todo.store'
import html from './app.html?raw'
import { renderTodos } from './use-cases';


const ElementIDs = {
    TodoList: '.todo-list',
    NewTodoInput: '#new-todo-input',
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

    }

    //funcion anonima autoinvocada
    (() => {

        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elementId).append(app);
        displayTodos();
    })()


    //Referencias HTML , no las puedo crear antes , xq antes de la funcion anonima, no existe aun.

    const newDescriptionInput = document.querySelector(ElementIDs.NewTodoInput);


    //listener

    newDescriptionInput.addEventListener('keyup',(event)=>{
        if (event.keyCode !== 13) return;

        if (event.target.value.trim().length === 0) return;
        
        todoStore.addTodo(event.target.value.trim());
        displayTodos();
        event.target.value = '';
        
    });


}