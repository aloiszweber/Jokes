
/*
function reqListener () {
    console.log(this.responseText);
}

 let req = new XMLHttpRequest();
 req.onload = reqListener;
 req.open("get", "https://api.blablagues.net/?rub=blagues");
 req.send();

 fetch("https://api.blablagues.net/?rub=blagues")
 .then((response) => console.log(response))
 .catch((error) => console.log(error));

 fetch('data.txt')
    .then((res) => res.text())
    .then((data => console.log(data)));

fetch("data.json")
    .then((res) => res.json())
    .then((data) => console.log(data));

*/

const header = document.getElementById('header');
const content = document.getElementById('content');

function getJoke () {

    fetch('https://api.blablagues.net/?rub=blagues')
    .then((res) => res.json())
    .then((data) => {
        console.log(data.data.content);
        const joke = data.data.content;
        
        header.textContent = joke.text_head;
        content.textContent = joke.text
        ? joke.text
        : joke.text_hidden;
    });
    
}

document.body.addEventListener('click', getJoke);
