





/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promiseRaceComponent = (element) => {
    element.innerHTML = 'Loading...';

    const renderValue = (value) => {
        element.innerHTML = value;
    };

    //retorna el resolve de la promesa que se ejecuta mas rapido
    Promise.race([
        slowPromise(),
        mediumPromise(),
        fastPromise()
    ]).then(renderValue);
console.log('promiseRacecomponent');

}


const slowPromise = () => new Promise(resolve => {
    setTimeout(() => {
        resolve('Slow Promise');
    }, 5000);
});

const mediumPromise = () => new Promise(resolve => {
    setTimeout(() => {
        resolve('Medium Promise');
    }, 4000);
});

const fastPromise = () => new Promise(resolve => {
    setTimeout(() => {
        resolve('Fast Promise');
    }, 2000);
});