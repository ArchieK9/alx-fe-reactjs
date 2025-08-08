import React, { useState } from "react";
import { searchUsers } from "../services/githubService";

function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const data = await searchUsers({ username, location, minRepos, page: 1 });
      setResults(data.items);
      setTotalCount(data.total_count);
      setPage(1);
    } catch (err) {
      setError("Looks like we can't find matching users");
    } finally {
      setLoading(false);
    }
  };

  const loadMore = async () => {
    const nextPage = page + 1;
    setLoading(true);
    try {
      const data = await searchUsers({
        username,
        location,
        minRepos,
        page: nextPage,
      });
      setResults((prev) => [...prev, ...data.items]);
      setPage(nextPage);
    } catch (err) {
      setError("Error loading more users");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <h2 className="text-2xl font-bold mb-4">Advanced GitHub User Search</h2>

        <div className="mb-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="shadow border rounded w-full py-2 px-3 text-gray-700"
          />
        </div>

        <div className="mb-4">
          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="shadow border rounded w-full py-2 px-3 text-gray-700"
          />
        </div>

        <div className="mb-4">
          <input
            type="number"
            placeholder="Minimum Repositories"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
            className="shadow border rounded w-full py-2 px-3 text-gray-700"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Search
        </button>
      </form>

      {loading && <p className="text-gray-500">Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {results.map((user) => (
          <div
            key={user.id}
            className="bg-white shadow-md rounded p-4 flex items-center space-x-4"
          >
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h3 className="text-lg font-semibold">{user.login}</h3>
              <a
                href={user.html_url}
                target="_blank"
                rel="noreferrer"
                className="text-blue-500 hover:underline"
              >
                View Profile
              </a>
            </div>
          </div>
        ))}
      </div>

      {results.length > 0 && results.length < totalCount && (
        <div className="text-center mt-4">
          <button
            onClick={loadMore}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}

export default Search;
