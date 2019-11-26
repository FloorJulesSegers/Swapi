//const id= document.getElementById('myInput').value;
const planet= document.getElementById("starship");
let id = "5";




function getStarship(){
axios.get(`https://swapi.co/api/starships/${id}/`)
  .then(function (response) {
    // handle success
	console.log(response);
    //name
    starship.innerHTML = 'Name: ' + response.data.name;
    model.innerHTML = 'Model: ' + response.data.model;
    created.innerHTML = 'Created: ' +  response.data.created;
    maxSpeed.innerHTML = 'Maximum speed: ' +  response.data.max_atmosphering_speed;
    manufacturer.innerHTML = 'Manufacturer: ' + response.data.manufacturer;


    
  })
  /*.catch(function (error) {
    // handle error
    console.log(error);
  })*/
  .finally(function () {
    // always executed
  });
}
