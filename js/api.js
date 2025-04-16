
const BASE_URL = "https://jsonplaceholder.typicode.com";

export async function fetchUsers() {
  const res = await fetch(`${BASE_URL}/users`);
  return await res.json();
}

export async function fetchUserPosts(userId) {
  const res = await fetch(`${BASE_URL}/posts?userId=${userId}`);
  return await res.json();
}

export async function fetchAllPosts() {
  const res = await fetch(`${BASE_URL}/posts`);
  return await res.json();
}
