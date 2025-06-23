/*
  Cette fonction valide le formulaire :
  - Vérifie si l'email est valide
  - Affiche un message d'erreur si nécessaire
*/
function validateForm() {
  const email = document.getElementById('email'); //  declarer Champ email
  const error = document.getElementById('error-message'); // Message d'erreur

  if (!email.checkValidity()) { // Si invalide
    error.classList.remove('hidden'); // Afficher le message
    return false; // Bloquer l'envoi du formulaire
  } else {
    error.classList.add('hidden'); // Cacher le message si email valide
    return true; 
  }
}
