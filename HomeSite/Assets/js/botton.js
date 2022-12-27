<><button id="mon-bouton">Cliquez ici</button><script>
  const bouton = document.getElementById('mon-bouton');

  bouton.addEventListener('click', () ={">"} {alert('Vous avez cliqué sur le bouton !')};
  {"}"});
</script></>
// Affiche la fenêtre modale au bout de 5 secondes
setTimeout(function() {
  document.getElementById("popup").style.display = "block";
}, 5000);

// Masque la fenêtre modale lorsque l'utilisateur clique sur le bouton de fermeture
document.getElementById("close-popup").addEventListener("click", function() {
  document.getElementById("popup").style.display = "none";
});

// Masque la fenêtre modale lorsque l'utilisateur soumet le formulaire
document.getElementById("popup").addEventListener("submit", function(event) {
  event.preventDefault(); // Empêche le rechargement de la page
  document.getElementById("popup").style.display = "none";
});
