import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// Fetching function
const fetchPosts = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return response.data;
};

const PostsComponent = () => {
  const { data, isLoading, isError, error, refetch } = useQuery(
    ["posts"],
    fetchPosts,
    {
      staleTime: 1000 * 60,
      cacheTime: 1000 * 60 * 5, 
    }
  );

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Posts</h2>
      <button
        onClick={() => refetch()}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Refresh Posts
      </button>
      <ul>
        {data.map((post) => (
          <li key={post.id} className="mb-2 border p-2 rounded">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
