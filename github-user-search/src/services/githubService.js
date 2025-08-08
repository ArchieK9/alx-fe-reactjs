import axios from "axios";

export async function fetchUserData(username) {
  const token = import.meta.env.VITE_APP_GITHUB_API_KEY;
  const url = `https://api.github.com/users/${username}`;

  const response = await axios.get(url);
  return response.data;
}
