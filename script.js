let title = document.getElementById('title');
let characters = document.getElementById('characters');
let opening = document.getElementById("opening");
const selectFilm = document.querySelector('#films')

selectFilm.addEventListener('change', event => {
  filmArr = Array.from(event.target)
  filmArr.forEach(movie => {
    const filmId = parseInt(movie.dataset.id)
    //console.log(filmId)
    renderPage(filmId)
  })
})




function renderPage(filmId) {
  title.innerHTML = ''
  opening.innerHTML = ''
  characters.innerHTML = ''
  fetch('https://swapi.co/api/films/' + filmId)
    .then(res => res.json())
    .then(data => {
      if (data.title === selectFilm.value) {
        data.characters.forEach(char => {
          fetch(char)
            .then(res => res.json())
            .then(character => {
              //console.log(character)
              characters.innerHTML +=
                `
    <ul><li>${character.name}</li></ul>
    `
            })
        })

        title.innerHTML += `${data.title}`;
        opening.innerHTML += `${data.opening_crawl}`;

      }
    })
}