import { heroes } from "../data/heroes"






/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promiseComponent = (element) => {

    const renderHero = (hero)=>{
        element.innerHTML = hero.name;
    };

    const renderTwoHeroes = (hero1,hero2) => {
        element.innerHTML = `
        <h1>Heroes:</h1>
        <h3>${hero1.name}</h3>
        <h3>${hero2.name}</h3>
        `;
        
    };

    const renderError = (error)=>{
        element.innerHTML = `
        <h1>Error:</h1>
        <h3>${error}</h3>
        `;
    };

    const id1 = '5d86371f25a058e5b1c8a65e';
    const id2 = '5d86371f233c9f2425f16916';
    
    //resolver promesas
    /* findHero(id1)
        .then(renderHero) //.then(hero => renderHero(hero) ); //al tener el mismo parametro de funcion se puede mandar directamente la funcion sin invocarla
        .catch(error=>renderError(error)) */

    //promise hell , forma 1
    
    /*findHero(id1)
        .then(hero1=>{
            findHero(id2)
                .then(hero2=>{
                    renderTwoHeroes(hero1,hero2);
                })
                .catch(renderError);
        }) //.then(hero => renderHero(hero) ); //al tener el mismo parametro de funcion se puede mandar directamente la funcion sin invocarla
        .catch(error=>renderError(error)); */
        
    //refactorizando, forma 2 de promesas

    let hero1;

    findHero(id1)
        .then(hero=>{
            hero1=hero;
            return findHero(id2); // para que el primer then retorne una promesa, cadenas de promesas
        }).then(hero2=>{ // anidando thens
            renderTwoHeroes(hero1,hero2);
        })
        .catch(renderError); // de esta manera puedo manejar un unico catch para ambas promesas


    //Promise.all , funciona cuando una promesa no depende del resultado de otra promesa , es decir cuando son independientes

    Promise.all([
        findHero(id1),
        findHero(id2),
    ])
    .then(([hero1,hero2])=>{
        renderTwoHeroes(hero1,hero2);
    })
    .catch(renderError) //se ejecuta el catch asi sea que el error lo halla dado una sola promesa del arreglo

    
    
}

/**
 * 
 * @param {string} id 
 * @returns {Promise<object>}
 */
const findHero = (id) => {

    return new Promise((resolve,reject)=>{
        const hero = heroes.find(hero=>hero.id===id);
        if (hero) {
            resolve(hero);
            return;
        }

        reject(`Hero with id ${id} not found!`);
    });
};