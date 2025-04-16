
import { fetchUserPosts } from './api.js';

const user = JSON.parse(localStorage.getItem('user'));
const welcome = document.getElementById('welcomeUser');
const postsContainer = document.getElementById('posts');
const logoutBtn = document.getElementById('logoutBtn');

if (!user) {
  window.location.href = 'index.html';
}

welcome.textContent = `Welcome, ${user.name}`;
logoutBtn.addEventListener('click', () => {
  localStorage.removeItem('user');
  window.location.href = 'index.html';
});

(async function loadPosts() {
  const posts = await fetchUserPosts(user.id);
  posts.forEach(post => {
    postsContainer.innerHTML += `
      <div class="col-md-6">
        <div class="card p-3 shadow-sm">
          <h5>${post.title}</h5>
          <p>${post.body}</p>
        </div>
      </div>
    `;
  });
})();
