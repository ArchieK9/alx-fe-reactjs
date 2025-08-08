import React, { useState } from "react";
import { fetchUserData } from "../services/githubService";

function Search() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username) return;

    setLoading(true);
    setError("");
    setUserData(null);

    try {
      const data = await fetchUserData(username);
      setUserData(data);
    } catch {
      setError("Looks like we can't find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={handleInputChange}
          style={{ padding: "0.5rem", width: "250px" }}
        />
        <button
          type="submit"
          style={{ marginLeft: "0.5rem", padding: "0.5rem 1rem" }}
        >
          Search
        </button>
      </form>

      <div style={{ marginTop: "1rem" }}>
        {loading && <p>Loading...</p>}

        {error && <p style={{ color: "red" }}>{error}</p>}

        {userData && (
          <div
            style={{
              border: "1px solid #ccc",
              padding: "1rem",
              maxWidth: "300px",
            }}
          >
            <img src={userData.avatar_url} alt={userData.login} width="100" />
            <h3>{userData.name || userData.login}</h3>
            <a href={userData.html_url} target="_blank" rel="noreferrer">
              View Profile
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;
