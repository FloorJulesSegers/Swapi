//const id= document.getElementById('myInput').value;
const planet= document.getElementById("starship");
 const id="3";





// Make a request for a user with a given ID
function getStarship(){
axios.get(`https://swapi.co/api/starships/${id}/`)
  .then(function (response) {
    // handle success
	console.log(response);
    //name
    starship.innerHTML = response.data.name;
    model.innerHTML = response.data.model;
    created.innerHTML = response.data.created;
    maxSpeed.innerHTML = response.data.max_atmosphering_speed;
    manufacturer.innerHTML = response.data.manufacturer;


    
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
}
