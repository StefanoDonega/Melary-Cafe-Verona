/*-----------------HAMBURGER MENU E CAMBIO ICONA---------------*/

const prenotaBtn = document.querySelector('.menu-button')
const prenotaBtnIcon = document.querySelector('.menu-button i')
const hamburgerMenu = document.querySelector('.hamburger-menu')

prenotaBtn.onclick = function () {
    hamburgerMenu.classList.toggle('open')
    const isOpen = hamburgerMenu.classList.contains('open')

    prenotaBtnIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'
}



/*------------TESTO HERO A COMPARSA-------------*/

document.addEventListener('DOMContentLoaded', function() {
    var text = document.querySelector('.transition-text');
    text.classList.add('visible');
});

/*------------SEZ CHI SIAMO A COMPARSA------------*/

document.addEventListener('DOMContentLoaded', function() {
    var text = document.querySelector('.transition-chisiamo');
    var container = document.querySelector('.container');
  
    function isInViewport(elem) {
        var bounding = elem.getBoundingClientRect();
        return (
          bounding.top >= 0 &&
          bounding.top <= (window.innerHeight || document.documentElement.clientHeight)
        );
      }
  
    function showText() {
      if (isInViewport(container)) {
        text.classList.add('visible');
        window.removeEventListener('scroll', showText);
      }
    }
  
    window.addEventListener('scroll', showText);
    showText(); // Controlla immediatamente se il testo è già nella visualizzazione quando la pagina è stata caricata
  });
  