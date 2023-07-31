// variables 
const btn = document.querySelector('.get-quotes');
const displayQuotes = document.querySelector('.quotes');
const numberOfQuotes = document.querySelector('#number');

// adding event listener

btn.addEventListener('click',getQuotes);


// functions
function getQuotes(e) {
    // its prevent the basic default behavour of loading the page or other things
    e.preventDefault();

    if(numberOfQuotes.value.length === 0 || numberOfQuotes.value < 0){
            alert('Please enter a valid positive number');
    }
    else {
        const url = 'https://type.fit/api/quotes';

        // using fetch API
        fetch(url)
        .then((response)=> response.json())
        .then((data) => {
            let output ='';
            for(var i=0;i<numberOfQuotes.value;i++){
                output += `
                <ul>
                    <li>Quote: ${data[i].text}</li>
                    <li>Author: ${data[i].author}</li>
                </ul>
            `;

            }
            displayQuotes.innerHTML = output;
        })
    }
}