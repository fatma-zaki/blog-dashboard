
import { fetchAllPosts } from './api.js';

const container = document.getElementById('allPosts');

async function showAllPosts() {
  const posts = await fetchAllPosts();
  posts.slice(0, 20).forEach(post => {
    container.innerHTML += `
      <div class="col-md-6 col-lg-4">
        <div class="card p-3 h-100 shadow-sm">
          <h5>${post.title}</h5>
          <p>${post.body}</p>
        </div>
      </div>
    `;
  });
} showAllPosts();
