
const jokeCall=document.querySelector(".jokes");

const newsCall = document.querySelector(".news");

const quoteCall = document.querySelector(".quote");

const setText = document.querySelector("#text");





const jokeApi = "https://icanhazdadjoke.com/slack";

const quoteApi = "https://api.quotable.io/random";





quoteCall.addEventListener("click", () =>{
   fetch(quoteApi)
   .then( data => data.json())
   .then(jokes =>{
     
    const joke = jokes.content ;

    setText.innerHTML = joke;

   })

})

jokeCall.addEventListener("click", () =>{
   
    fetch(jokeApi)
    .then( data => data.json())
     .then(jokes => {

      const newJoke = jokes.attachments[0].text;

      setText.innerHTML = newJoke;


      
     });
     
     
})