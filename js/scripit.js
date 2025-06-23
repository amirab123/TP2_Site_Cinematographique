/*
  Cette fonction valide le formulaire :
  - Vérifie si l'email est valide
  - Affiche un message d'erreur si nécessaire
*/
function validateForm() {
  const emailInput = document.querySelector('input[type="email"]');
  const errorMessage = document.getElementById('error-message');
  const email = emailInput.value.trim();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    errorMessage.classList.remove('hidden');
    return false; 
  } else {
    errorMessage.classList.add('hidden');
    return true; 
  }
}
