
import { fetchUsers } from './api.js';

const form = document.getElementById('loginForm');
const errorMsg = document.getElementById('errorMsg');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value.trim().toLowerCase();
  const users = await fetchUsers();
  const user = users.find(u => u.username.toLowerCase() === username);
  if (user) {
    localStorage.setItem('user', JSON.stringify(user));
    window.location.href = 'dashboard.html';
  } else {
    errorMsg.textContent = 'User not found. Try another username.';
  }
});

