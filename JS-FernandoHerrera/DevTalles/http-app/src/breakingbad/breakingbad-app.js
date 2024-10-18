
/**
 *      
 * @returns {Promise<object>} quote information
 */
const fetchQuote = async ()=>{

    const response = await fetch('https://api.breakingbadquotes.xyz/v1/quotes');
    const data = await response.json();

    console.log(data[0]);
    return data[0]
};




/**
 * 
 * @param {HTMLDivElement} element 
 */
export const BreakingbadApp = async (element) => {
    document.querySelector('#app-title').innerHTML = 'Breakingbad App'
    element.innerHTML = 'Loading...';

    const quoteLabel = document.createElement('blockquote');
    const authoLabel = document.createElement('h3');
    const nextQuoteButton = document.createElement('button');
    nextQuoteButton.innerText = 'Next Quote';

    const renderQuote = ( data ) => {
        quoteLabel.innerHTML = data.quote;
        authoLabel.innerHTML = data.author;
        element.replaceChildren( quoteLabel, authoLabel, nextQuoteButton );
    }

    // Añadir listener
    nextQuoteButton.addEventListener('click', async() => {
        element.innerHTML = 'Loading...';
        fetchQuote()
            .then(renderQuote);
        
    })
    

    fetchQuote()
        .then( renderQuote );

    console.log('Hola mundo');

}