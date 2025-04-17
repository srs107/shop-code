

if (document.getElementById('registrationForm')) {
    document.getElementById('registrationForm').addEventListener('submit', function (e) {
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value.trim();
  
      if (name && email && password.length >= 6) {
        const user = { name, email, password };
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('favorites', JSON.stringify([]));
        window.location.href = "favorites.html";
      } else {
        alert("Enter all fields correctly. Password must be at least 6 characters.");
      }
    });
  }
  

  if (document.getElementById('favItem')) {
    const user = JSON.parse(localStorage.getItem('user'));
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  
    if (!user) {
      alert("No user registered. Redirecting to registration page...");
      window.location.href = "register.html";
    } else {
      document.getElementById('userName').textContent = user.name;
      renderFavorites();
    }
  
    window.addFavorite = function () {
      const item = document.getElementById('favItem').value.trim();
      if (item) {
        favorites.push(item);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        document.getElementById('favItem').value = "";
        renderFavorites();
      }
    };
  
    function renderFavorites() {
      const list = document.getElementById('favList');
      list.innerHTML = "";
      favorites.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = item;
        list.appendChild(li);
      });
    }
  }
  