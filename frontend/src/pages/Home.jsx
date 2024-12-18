import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/posts")
      .then((response) => setPosts(response.data))
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  const deletePost = (id) => {
    axios
      .delete(`http://localhost:5000/api/v1/posts/${id}`)
      .then(() => setPosts(posts.filter((post) => post._id !== id)))
      .catch((error) => console.error("Error deleting post:", error));
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">All Posts</h2>
        <Link
          to="/create"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Create Post
        </Link>
      </div>
      {posts.length > 0 ? (
        <ul>
          {posts.map((post) => (
            <li key={post._id} className="bg-gray-100 p-4 mb-4 rounded shadow">
              <h3 className="text-lg font-bold">{post.title}</h3>
              <p className="text-sm text-gray-600">
                {new Date(post.createdAt).toLocaleDateString()}
              </p>
              <p className="mt-2">{post.body}</p>
              <div className="mt-4">
                <Link
                  to={`/edit/${post._id}`}
                  className="text-blue-600 hover:underline mr-4"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deletePost(post._id)}
                  className="text-red-500 hover:underline"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-500 font-semibold">
          No posts available.
        </p>
      )}
    </div>
  );
};

export default Home;
