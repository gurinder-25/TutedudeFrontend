const API_BASE = "https://tutedude-alsl.onrender.com/api";

// Signup
document.getElementById('signupForm')?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const interests = document.getElementById('interests').value.split(',').map(i => i.trim());

  const res = await fetch(`${API_BASE}/auth/signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password, interests })
  });
  alert(res.ok ? "Signup successful!" : "Signup failed");
});

// Login
document.getElementById('loginForm')?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  const res = await fetch(`${API_BASE}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  });

  const data = await res.json();
  if (res.ok) {
    localStorage.setItem('token', data.token);
    location.href = 'dashboard.html';
  } else {
    alert('Login failed');
  }
});

// Search Users
document.getElementById('searchBtn')?.addEventListener('click', async () => {
  const query = document.getElementById('searchQuery').value;
  const token = localStorage.getItem('token');

  const res = await fetch(`${API_BASE}/friend/search?query=${query}`, {
    headers: { Authorization: `Bearer ${token}` }
  });

  const users = await res.json();
  const results = document.getElementById('searchResults');
  results.innerHTML = users.map(user => `<li>${user.username}</li>`).join('');
});

// Get Mutual Friends
window.onload = async () => {
  if (document.getElementById('mutualFriends')) {
    const token = localStorage.getItem('token');
    const res = await fetch(`${API_BASE}/recommendation/mutual-friends`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    const friends = await res.json();
    document.getElementById('mutualFriends').innerHTML = Object.entries(friends)
      .map(([friend, count]) => `<li>${friend} (Mutual: ${count})</li>`).join('');
  }
};

// Logout
document.getElementById('logout')?.addEventListener('click', () => {
  localStorage.removeItem('token');
  location.href = 'index.html';
});
