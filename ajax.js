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
                // here we are creating the XMLHTTPRequest 
            const http = new XMLHttpRequest();

            // callback function 
            http.onload = function () {
                if (this.status === 200){
                /*  console.log(this.responseText); */

                // data is received inform an array
                const response = JSON.parse(http.responseText);
                let output = "";

               /*  response.forEach(quote => {

                        output += `
                            <ul>
                                <li>Quote: ${quote.text}</li>
                                <li>Author: ${quote.author}</li>
                            </ul>
                        `;
                }); */

                for(var i=0;i<numberOfQuotes.value;i++){
                    output += `
                    <ul>
                        <li>Quote: ${response[i].text}</li>
                        <li>Author: ${response[i].author}</li>
                    </ul>
                `;

                }
                displayQuotes.innerHTML = output;
                }
            }

            // sending the request
            http.open('GET','https://type.fit/api/quotes',true);
            http.send();

    }

   
}

