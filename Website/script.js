 // get the video thumbnail and player elements
 var thumbnail = document.querySelector('.video-thumbnail');
 var player = document.querySelector('.player');

 // get the close button
 var closeButton = player.querySelector('.close-button');

 // show the player when the thumbnail is clicked
 thumbnail.addEventListener('click', function () {
   player.style.display = 'block';
 });

 // hide the player when the close button is clicked
 closeButton.addEventListener('click', function () {
   player.style.display = 'none';
 });
 
 const url = "https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";
 
 
  function getFields(input, field) {
   var output = [];
   for (var i=0; i < input.length ; ++i)
       output.push(input[i][field]);
   return output;
 }

fetch(url)
.then(response => response.json())
.then(data => {
// Filter the data and leave only those elements with a price below 5.00
const filteredData = data.filter(item => item.price < 5.00);
//names
var carouselData1 = document.getElementById("firstWordInCarousel")
var carouselData2 = document.getElementById("secondWordInCarousel")
var carouselData3 = document.getElementById("thirdWordInCarousel")
//prices
var carouselPrice1 = document.getElementById("firstPriceInCarousel")
var carouselPrice2 = document.getElementById("secondPriceInCarousel")
var carouselPrice3 = document.getElementById("thirdPriceInCarousel")

var filteredNamesFromData = getFields(filteredData, "name")
var filteredPricesFromData = getFields(filteredData, "price")

carouselData1.innerHTML = filteredNamesFromData[0]
carouselData2.innerHTML = filteredNamesFromData[1]
carouselData3.innerHTML = filteredNamesFromData[2]

carouselPrice1.innerText = filteredPricesFromData[0]
carouselPrice2.innerText = filteredPricesFromData[1]
carouselPrice3.innerText = filteredPricesFromData[2]


console.log(filteredPricesFromData);
console.log(filteredNamesFromData);

console.log(filteredData);



});