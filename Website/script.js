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

fetch(url)
.then(response => response.json())
.then(data => {
// Filter the data and leave only those elements with a price below 5.00
const filteredData = data.filter(item => item.price < 5.00);

console.log(filteredData);



});