
 // Look for .hamburger
 var hamburger = document.querySelector(".hamburger");
 var navbar__strokes = document.querySelector(".navbar__strokes");
 // On click
 hamburger.addEventListener("click", function () {
   // Toggle class "is-active"
   hamburger.classList.toggle("is-active");

   navbar__strokes.classList.toggle("is-active");
   // Do something else, like open/close menu
 });