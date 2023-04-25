// récupération des élément
let pads = document.querySelectorAll('.key');
let sound = document.querySelectorAll('audio');

// Ajout d'un événement 'keydown' à la page
document.addEventListener('keydown', (e) => {
// Recherche de la note correspondante
    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
// Récupération du pad correspondant
    let pad = document.querySelector(`.key[data-key="${e.keyCode}"]`);
// Ajout de la classe 'playing' au pad
    pad.classList.add('playing');
// Réinitialisation de l'audio
    audio.currentTime = 0;
// Lecture de l'audio
    audio.play();
})

// Ajout d'un événement 'transitionend' aux pads
pads.forEach(pad => {
    pad.addEventListener('transitionend', removeTransition);
  });

// Fonction pour retirer la classe 'playing'
function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
  }
