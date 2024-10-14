import { Todo } from "../models/todo.model";
import { createTodoHTML } from "./create-todo-html";


let element;


/**
 * 
 * @param {string} elementId 
 * @param {Array<Todo>} todos 
 */
export const renderTodos = (elementId, todos = []) => {

    //para no tener que estar buscando en el dom cada que llame esta funcion , ya queda en una variable en el scope superrior
    //si no existe , recien la busca en el documento
    if (!element) 
        element = document.querySelector(elementId);

    //validacion por si no encuentre en el document el elmentId
    if (!element) throw new Error(`Element ${elementId} not found!`);
    
    //purgar el element y asegurarme que el html esta vacio , cada que se quiera re renderizar
    element.innerHTML = '';

    //empiezo a barre el array de todos y voy renderizando el componentehtml
    todos.forEach( todo => {
        element.append(createTodoHTML(todo));

    });

}