// Your code here
const API = "http://localhost:3000/films"
const films = document.querySelector('#films')
const poster = document.querySelector('#poster')
const showing = document.querySelector('#showing')
//const ticketsBttn = document.querySelector('ui.orange.button')
const listContainer = document.querySelector('#list-container')
let ticketsRemaining;

getFirstMovie();
getAllFilms();

document.getElementById('buy-ticket').addEventListener('click', () => {
    ticketsRemaining - 1;
    renderTickets();
})

function getFirstMovie(){
    fetch(API+'/1')
    .then(response => response.json())
    .then(film => renderFilm(film));
}

function renderFilm(film) {
    console.log(film)
    poster.dataset.id = film.id
    poster.src = film.poster
    showing.dataset.id = film.id
    showing.dataset.capacity = film.capacity
    showing.dataset.tickets_sold = film.tickets_sold
    showing.querySelector('#title').innerText = film.title
    showing.querySelector('#film-info').innerText = film.description
    showing.querySelector('#runtime').innerText = film.runtime + 'Mintues'
    showing.querySelector('#showtime').innerText = film.showtime
    showing.querySelector("#ticket-num").innerText = film.capacity - film.tickets_sold
}

function renderTickets(film) {
    console.log('connected')
}

function getAllFilms(){
    fetch(API)
    .then(response => response.json())
    .then(films => renderAllFilms(films));
}

films.forEach(function(films){
    renderAllFilms(films)
})

function renderAllFilms(films) {
    console.log(films)
}