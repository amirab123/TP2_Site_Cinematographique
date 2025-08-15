

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
  emailInput.classList.remove('border-red-500', 'border-green-500');
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
     emailInput.classList.add('border-green-500');
  
    emailInput.removeAttribute('aria-invalid');
       setTimeout(() => {
      emailInput.value = '';
  
    }, 800); 

    alert('Formulaire valide, prêt à envoyer !')
    ;
  });
});