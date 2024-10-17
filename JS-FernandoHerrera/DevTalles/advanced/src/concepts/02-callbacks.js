
import {heroes} from '../data/heroes'




/**
 * 
 * @param {HTMLDivElement} element 
 */
export const callbacksComponent = (element) => {
    const id = '5d86371f25a058e5b1c8a65e'
    findHero(id,(error,hero)=>{
        //element.innerHTML = hero?.name || 'No hay heroe'; //una manera de salvarnos de si no encuentra al heroe , osea es undefined

        if (error) {
            element.innerHTML = error;
            return 
        }
        element.innerHTML = hero.name;
    });
    console.log('callbacksComponent');

}

/**
 * 
 * @param {String} id 
 * @param {(error: String || null , hero: Object)=>void} callback 
 */
const findHero = (id,callback) => {
    const hero = heroes.find(hero=>hero.id === id);
    if (!hero) {
        callback(`Hero with id ${id} not found!`);
        return //undefined
    }
    callback(null,hero);
}


