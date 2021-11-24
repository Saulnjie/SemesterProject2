import { getMeData } from "./components/async.js";

let Allalbums = document.querySelector('.albums')
let array = [];


// SEARCH SECTION
let searchInput = document.querySelector('#search');
searchInput.onkeyup = function () {
    Allalbums.innerHTML = '';
    let filteredArticles = array.filter((array) => {
        return array.toLowerCase().includes(this.value.toLowerCase());
    });

    // createHTML(Allalbums, filteredArticles, 'array');
    console.log(filteredArticles);
    console.log(filteredArticles);
};