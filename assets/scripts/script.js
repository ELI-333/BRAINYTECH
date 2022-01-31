
/////////////////////////////////////////// page connexion \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

let connexion = document.getElementById("formConnexion");
var inscription = document.getElementById("formInscription");

function clicInscription() {
  if (inscription.style.display === "none") {
    inscription.style.display = "block";  
    connexion.style.display = "none";
  } else {
    inscription.style.display = "none";
  }
}

function clicConnexion() {
  if (connexion.style.display !== "block") {
    connexion.style.display = "block"
    inscription.style.display = "none"
    
  } else {
    connexion.style.display = "none"; 
  }
}






/////////////////////////////////////////// page quizz \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
let list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if( ev.target.tagName === 'LI') {
     ev.target.classList.toggle('done');
  }
}, false);




/////////////////////////////////////////// slide nav \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("slideNav").style.width = "50px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("slideNav").style.width = "0";
} 




/////////////////////////////////////////// page dropdown \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// Récupère la DIV ayant la classe CSS "dropdown"
let dropdown = document.querySelector('.dropdown');

// Ajoute un écouteur d'évènement sur le bouton à l'intérieur de la DIV "dropdown"
dropdown.querySelector('.dropdown__button').addEventListener('click', function() {
  // Le "toggle" permet d'ajouter une classe CSS si elle n'est pas présente sur un élément ou la retire si
  // celle-ci est présente sur un élément
  dropdown.querySelector('.dropdown__menu').classList.toggle('dropdown__menu--open');
});

// Clic en dehors du bouton dropdown active la fermeture du menu
window.addEventListener('click', function(event) {
  // Si la cible du clic ne correspond pas au bouton de la dropdown
  if (!event.target.matches('.dropdown__button')) {
    // Alors je ferme le menu de la dropdown
    dropdown.querySelector('.dropdown__menu').classList.remove('dropdown__menu--open');
  }
});






/////////////////////////////////////////// page modal-info-numeritheque \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// var swiper = new Swiper('.blog-slider', {
//   spaceBetween: 30,
//   effect: 'fade',
//   loop: true,
//   mousewheel: {
//     invert: false,
//   },
//   // autoHeight: true,
//   pagination: {
//     el: '.blog-slider__pagination',
//     clickable: true,
//   }
// });
