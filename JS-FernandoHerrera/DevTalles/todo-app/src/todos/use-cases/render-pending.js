import todoStore, { Filters } from "../../store/todo.store";

let element

/**
 * 
 * @param {string} elementId 
 */
export const renderPending = (elementId) => {

    //si no existe , recien la busca en el documento
    if (!element) 
        element = document.querySelector(elementId);

    //validacion por si no encuentre en el document el elmentId
    if (!element) throw new Error(`Element ${elementId} not found!`);

    element.innerHTML = todoStore.getTodos(Filters.Pending).length;
}