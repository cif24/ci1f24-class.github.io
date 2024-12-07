/* Activity 1: step 1 */
//////////////////////////////////////////////////

/* Activity 1: step 1 */
let body = document.body;
let headline = document.querySelector("h1");
let headlines = document.querySelectorAll("h1");

console.log(headline);
console.log(headlines);

headlines.forEach(function(headline) {
    // add an event listener to each individual headline
    headline.addEventListener('click', function (event) {
      // toggle the red class on this headline
      headline.classList.toggle("red");
    });
  });
  

/* Activity 1: step 2: Add Event Listener */

// function addRed() {
//     headline.classList.toggle("red");
//   }
  
//  headline.addEventListener("click", addRed);



/* Activity 1: step 3 */
/* This adds red to both elemets- BUT they aren't yet clickable */

// function addRed() {

//     headlines.forEach(function (headline) {
//       headline.classList.add("red");
//     })
//   }
//   addRed();



/* Activity 1: step 4 */
/* This adds red to both elemets + clickable */

// uses forEach to loop through all of the headlines







