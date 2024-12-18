import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import EditPost from "./pages/EditPost";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 max-w-full">
      <header className="bg-white shadow flex justify-between items-center lg:px-4 sm:mx-2 ">
        <img src="logo.png" className="size-10 " alt="logo" />
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="lg:text-xl font-bold text-gray-800 sm:text-sm">
            Postly
          </h1>

          <nav className="mt-2 lg:text-xl sm:text-sm">
            <Link className="text-blue-500 hover:underline mr-4 " to="/">
              Home
            </Link>
            <Link className="text-blue-500 hover:underline mr-4 " to="/create">
              Create Post
            </Link>
          </nav>
        </div>
      </header>
      <main className="container mx-auto px-6 py-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/edit/:id" element={<EditPost />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
