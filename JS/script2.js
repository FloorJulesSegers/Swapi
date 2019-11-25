//const id= document.getElementById('myInput').value;
const planet= document.getElementById("planet");
 const id="3";





// Make a request for a user with a given ID
function getPlanets(){
axios.get(`https://swapi.co/api/starships/${id}/`)
  .then(function (response) {
    // handle success
	console.log(response);
	let responseData = response.data;
    //name
    planet.innerHTML = response.data.starships.data.name;
	console.log(responseData);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
}
