import { Todo } from "../todos/models/todo.model";


export const Filters = {
    All:'all',
    Completed:'completed',
    Pending:'Pending'
};

const state = {

    todos:[
        new Todo('Piedra del alma'),
        new Todo('Piedra del infinito'),
        new Todo('Piedra del tiempo'),
    ],
    filter: Filters.All
};

const initStore = () => {
    loadStore();
    console.log('Store inicializado!!!!');
};

const loadStore = () => {
    if( !localStorage.getItem('state')) return;

    const { todos = [], filter = Filters.All} = JSON.parse(localStorage.getItem('state'));
    state.todos = todos;
    state.filter = filter;
};

const saveStateToLocalStorage = () => {
    localStorage.setItem('state',JSON.stringify(state));
    
};

const getTodos = (filter = Filters.All) => {
    switch (filter) {
        case Filters.All:
            return [...state.todos];
        case Filters.Completed:
            return state.todos.filter(todo => todo.done);
        case Filters.Pending:
            return state.todos.filter(todo => !todo.done);
        default:
            throw new Error(`Option ${filter} is not valid.`);
    }
};

/**
 * 
 * @param {string} description String con la descripcion del Todo y poder usar el constructor de la clase. 
 */
const addTodo = (description) => {
    if (!description) throw new Error('Description is required.');
    
    state.todos.push( new Todo(description) );
    saveStateToLocalStorage();
};

/**
 * 
 * @param {string} todoId 
 */
const toggleTodo = (todoId) => {
    //validando que hallan enviado el todoId
    if (!todoId) throw new Error('todoId is required.');

    const todo = state.todos.find(todo => todo.id === todoId);
    // Si se encuentra el todo, cambia el valor de "done"
    if (todo) {
        todo.done = !todo.done;
        saveStateToLocalStorage();
    } else {
        console.error(`Todo with id ${todoId} not found`);
    }
    return todo;

    

    //menos eficiente porque barre todo el arreglo
    /* state.todos = state.todos.map( todo => {
        if (todo.id === todoId) {
            todo.done = !todo.done;
        }
        return todo;
    }); */
};

/**
 * 
 * @param {string} todoId 
 */
const deleteTodo = (todoId) => {
    if (!todoId) throw new Error('todoId is required.');
    state.todos = state.todos.filter( todo => todo.id !== todoId);
    saveStateToLocalStorage();
};


const deleteCompleted = () => {
    state.todos = state.todos.filter( todo => !todo.done);
    saveStateToLocalStorage();
};

/**
 * 
 * @param {Filters} newFilter 
 */
const setFilter = (newFilter = Filters.All) => {
    // Validar si el nuevo filtro es uno de los valores permitidos
    if (!Object.values(Filters).includes(newFilter)) {
    throw new Error(`Invalid filter: ${newFilter}. Expected one of: ${Object.values(Filters).join(', ')}`);
    }
    // Si es válido, actualiza el estado
    state.filter = newFilter;
    saveStateToLocalStorage();
};

const getCurrentFilter = () => {
    return state.filter.toString();
};


export default {
    addTodo,
    deleteCompleted,
    deleteTodo,
    getCurrentFilter,
    getTodos,
    initStore,
    loadStore,
    setFilter,
    toggleTodo,
}