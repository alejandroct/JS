






/**
 * 
 * @param {HTMLDivElement} element 
 */
export const environmentsComponent = (element) => {



    console.log(import.meta.env);

    const html = `
    Dev: ${import.meta.env.DEV} <br/>
    Prod: ${import.meta.env.PROD} <br/>
    API Key: ${import.meta.env.VITE_API_KEY} <br/>
    `;

    element.innerHTML = html;

}