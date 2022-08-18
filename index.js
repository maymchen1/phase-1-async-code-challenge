//DOM CONTENT LOADED
document.addEventListener ('DOMContentLoaded', () => {
    getShows();
    addSearchButton();
})
//globals
const baseUrl = 'http://localhost:3000';
let shows = [];
let queued = [];
//Node Getters
const queuedList = document.getElementById ('queued');
const searchInput = document.getElementById ('search');
const searchButton = document.getElementById ('search-button');
const listList = document.getElementById ('list')
//Events
//be able to list the shows
const getShows = () => {
    fetch(baseUrl + '/shows')
    .then(resp => resp.json())
    .then(data => {
      shows = data;
      renderShows(data)})
}
function renderShows(shows) {
    listList.innerHTML = ''
    shows.forEach (show => {
        const li = document.createElement ("li")
    li.textContent = show.title
    listList.append(li)
    })
    //console.log (shows)
}
//be able to search through shows
const search = (e) => {
    const searchString = searchInput.value.toLowerCase();
    const filteredShows = shows.filter(show => show.title.toLowerCase().includes(searchString)
    );
    //console.log (filteredShows);
    //console.log (searchString);
    //console.log(shows)
    renderShows(filteredShows);
};
//click on the show in the show list to add it to the queued shows 
queuedList.addEventListener('click', function handleClick(e) {
   e.target.remove();
   listList.append(e.target);
});
listList.addEventListener('click', function handleClick(e) {
    queuedList.append(e.target);
})
/* const renderQueue = () => {
    listList.innerHTML = ''
    queued.forEach(show => queueShow(show))
  } 
  
  const queueShow = show => {
    const li = document.createElement("li");
    li.textContent = show;
    show.addEventListener("click", clickToRemove);
    queuedList().appendChild(li);
  } 
/* const clickToAdd = e => {
    list.addEventListener ("click", clickToAdd);
    queued.push ()
    //queuedList().remove() */
//click on show to remove
/*function clickToRemove(show) {
    queuedList.addEventListener("click", function () {
        queuedList.remove(show);
    });
}
function clickToRemove(show) {
    queuedList.addEventListener("click", function () {
        queuedList.append(show);
    }); */

function addSearchButton() {
    searchButton.addEventListener('click', search);
}
  
