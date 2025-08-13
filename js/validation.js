

document.addEventListener('DOMContentLoaded', () => {
  const emailInput = document.getElementById('email');
  const emailError = document.getElementById('email-error');
  const submitBtn = document.getElementById('submitBtn');

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  submitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const email = emailInput.value.trim();

    if (email === '') {
      emailError.textContent = "Le champ email est obligatoire.";
      emailError.classList.remove('hidden');
      emailInput.setAttribute('aria-invalid', 'true');
      emailInput.focus();
      return;
    }

    if (!validateEmail(email)) {
      emailError.textContent = "Veuillez entrer une adresse email valide.";
      emailError.classList.remove('hidden');
      emailInput.setAttribute('aria-invalid', 'true');
      emailInput.focus();
      return;
    }

    emailError.textContent = '';
    emailError.classList.add('hidden');
    emailInput.removeAttribute('aria-invalid');

    alert('Formulaire valide, prêt à envoyer !');

  });
});
