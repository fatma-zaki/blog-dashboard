import { fetchUsers, fetchUserPosts } from './api.js';

document.addEventListener("DOMContentLoaded", async function () {
  const tableBody = document.querySelector("#usersTable tbody");

  if (!tableBody) {
    console.error("Table body not found!");
    return;
  }

  try {
    const users = await fetchUsers();
    tableBody.innerHTML = "";

    users.forEach((user, index) => {
      const row = document.createElement("tr");

      row.innerHTML = `
        <td>${index + 1}</td>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>User</td>
        <td><button class="btn btn-sm btn-info show-posts-btn" data-user-id="${user.id}">show posts </button></td>
      `;

      tableBody.appendChild(row);
    });


    document.querySelectorAll(".show-posts-btn").forEach((btn) => {
      btn.addEventListener("click", async function () {
        const userId = this.getAttribute("data-user-id");

        const posts = await fetchUserPosts(userId);

        showUserPostsModal(posts, userId);
      });
    });

  } catch (error) {
    console.error(" Error fetching users:", error);
  }
});
function showUserPostsModal(posts, userId) {
     const modalBody = document.getElementById("postsContent");
     const modalTitle = document.querySelector(".modal-title");
   
     modalTitle.textContent = `  user${userId}  posts`;
   
     if (!posts.length) {
       modalBody.innerHTML = `<p> no posts for this user </p>`;
       return;
     }
   
     modalBody.innerHTML = posts.map((post) => `
       <div class="mb-3">
         <h6>${post.title}</h6>
         <p>${post.body}</p>
         <hr>
       </div>
     `).join("");
   
     const modal = new bootstrap.Modal(document.getElementById("postsModal"));
     modal.show();
   }
   