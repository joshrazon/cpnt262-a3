// import animals module
import {animals} from './animals.js'

// Create a `outputHTML` variable where you will store the html that will eventually be printed to the page
let outputHTML = "";

// Using `document.querySelector()`, assign the .gallery element to a `gallery` variable.
let gallery = document.querySelector('.gallery');

// Loop through `animals` array using `array.forEach()`. 
animals.forEach(function(animal) {

  // For each image ID, 
  // 1. create an image card for each image that includes:
  //      - a `<figure class="card">` container
  //      - an `<img>` element including `src`, `alt`, `width` and `height` attributes
  //      - a `<figcaption>` element containing photo credit and link to Unsplash source
  // 2. append the `<figure>` card to the `outputHTML` variable you created earlier

  outputHTML += `
    <figure class="card">
      <img src="./images/${animal.imagePath()}.jpg" height="${animal.height}" width="${animal.width}" alt="Lorem Picsum: ${animal.name}">
      <figcaption>${animal.credit}</figcaption>
    </figure>
  `
  // Using element.innHTML (or other DOM manipulation technique), add the list of figure cards in `outputHTML` to the `gallery` variable you created earlier.
  
  gallery.innerHTML = outputHTML;
})

