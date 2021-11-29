// export default function createHTML(domElement, arrayOfArticles, nameOfItem) {
//     if (arrayOfArticles.length === 0) {
//         domElement.innerHTML = `<h1>There are no ${nameOfItem}</h1>`;
//         return;
//     }

//     let html = '';
//     domElement.innerHTML = '';
//     arrayOfArticles.forEach(({ id }) => {
//         html += `
//             <div class="col-sm-4">
//                 <div class="card">
//                     <div class="card-body">
//                         <h5 class="card-artist"></h5>
//                         <p class="card-id">${id}</p>
//                     </div>
//                 </div>
//             </div>
//         `;
//     });
//     domElement.innerHTML = html;
// }



// import { getMeData } from "./async.js";




// let searchedAlbum = document.querySelector('.albums')
// let array = [];

// let searchInput = document.querySelector('#search');
// searchInput.onkeyup = function () {
//     searchedAlbum.innerHTML = '';
//     let filteredArticles = array.filter((array) => {
//         return array.toLowerCase().includes(this.value.toLowerCase());
//     });
//     getMeData(searchedAlbum, filteredArticles, 'Array');
//     console.log(filteredArticles);
// };



