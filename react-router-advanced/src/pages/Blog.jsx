import { useParams } from "react-router-dom";

function Blog() {
  const { id } = useParams();
  return <h1>Blog Post ID: {id}</h1>;
}
export default Blog;
