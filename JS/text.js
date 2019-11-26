
//Pirate
const translatePirate= document.getElementById("myPirate").value;
const Pirate = document.getElementById("Pirate");

function gePirate(){
axios.get(`https://api.funtranslations.com/translate/Pirate.json?text=${translatePirate}`)
  .then(function (response) {
    // handle success
	console.log(response);
    Pirate.innerHTML = "Pirate translation: " + contents.translated;
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
}