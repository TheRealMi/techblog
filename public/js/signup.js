const signupFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the signup form
    const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    // Send a POST request to the API endpoint
    if (username && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    }
  };

  // add event listeners to signup form submit buttons
  document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);