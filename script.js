//to add click functionality to the "genrate a new quote button "

const newQuoteButton = document.querySelector('#js-new-quote');

newQuoteButton.addEventListener('click', getQuote);


const endpoint = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random';

async function getQuote() {
  try {
    //to make function wait until api-endpoint is not fetched 
const response = await fetch(endpoint)

//to check if  reponse is not "200 ok",so throw a Expression
if(!response.ok){
  throw Error(response.statusText)
}
    //skipped "if block" as reponse is 200 ok, parse response as json 
    const json = await response.json();
    displayQuote(json.message);
}
  
  //to catch error occur while parsing the json.
  catch(err){
    console.log(err);
    alert('failed to fetch new quote');
  }
}

//to display the quote on the page
function displayQuote(quote){
  const quoteText = document.querySelector('#js-quote-text');
  quoteText.textContent = quote;
}
