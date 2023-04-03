function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    // check if username and password are valid
    if (username === 'admin' && password === 'password') {
      // redirect to protected page
      window.location.href = 'protected-page.html';
    } else {
      alert('Login failed. Please try again.');
    }
  }
  