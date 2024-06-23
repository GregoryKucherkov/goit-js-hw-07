const loginForm = document.querySelector('.login-form');

const handleSubmit = event => {
  event.preventDefault();

  const formData = {
    [loginForm.elements.email.name]: loginForm.elements.email.value.trim(),
    [loginForm.elements.password.name]:
      loginForm.elements.password.value.trim(),
  };

  if (formData.email === '' || formData.password === '') {
    alert('All form fields must be filled in');
  } else {
    console.log(formData);
  }

  loginForm.reset();
};

loginForm.addEventListener('submit', handleSubmit);
