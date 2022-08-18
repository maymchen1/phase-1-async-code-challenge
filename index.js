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
//returns promise 
    .then(response => response.json())
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
    getShows ();
});
listList.addEventListener('click', function handleClick(e) {
    getShows();
    queuedList.append(e.target);
})
function addSearchButton() {
    searchButton.addEventListener('click', search);
}
  
