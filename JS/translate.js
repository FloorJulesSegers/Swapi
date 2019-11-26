//Yoda
const translateYoda= document.getElementById("myYoda").value;
const yoda = document.getElementById("yoda");

function getYoda(){
axios.get(`https://api.funtranslations.com/translate/yoda.json?text=${translateYoda}`)
  .then(function (response) {
    // handle success
	console.log(response);
    yoda.innerHTML = "Yoda translation: " + contents.translated;
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
}

//Dothraki
const translateDothraki= document.getElementById("myDothraki").value;
const dothraki = document.getElementById("dothraki");

function getDothraki(){
axios.get(`https://api.funtranslations.com/translate/Dothraki.json?text=${translateDothraki}`)
  .then(function (response) {
    // handle success
	console.log(response);
    dothraki.innerHTML = "Dothraki translation: " + contents.translated;
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
}


//Pirate
const translatePirate= document.getElementById("myPirate").value;
const Pirate = document.getElementById("Pirate");

function getPirate(){
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

getYoda();
getDothraki();
getPirate();
