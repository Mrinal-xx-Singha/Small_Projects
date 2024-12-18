import Post from "../models/Post.js";

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    console.log("Error occured in gettingAllPost Controller", error);

    res.status(500).json({ message: "Server Error" });
  }
};

const createPosts = async (req, res) => {
  const { title, body } = req.body;
  try {
    const newPost = new Post({ title, body });
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    console.log("Error creating posts", error);

    res.status(400).json({ message: "Error creating post" });
  }
};

const updateAPost = async (req, res) => {
  const { id } = req.params;
  const { title, body } = req.body;
  try {
    const updatedPost = await Post.findByIdAndUpdate(
      id,
      { title, body },
      { new: true }
    );
    res.status(200).json(updatedPost);
  } catch (error) {
    console.log("Error updating posts", error);
    res.status(400).json({ message: "Error updating post" });
  }
};

const deleteAPost = async (req, res) => {
  const { id } = req.params;
  try {
    await Post.findByIdAndDelete(id);
    res.status(200).json({ message: "Post Deleted Successfully" });
  } catch (error) {
    console.log("Error deleting post", error);
    res.status(500).json({ message: "Error deleting post" });
  }
};

export { getAllPosts, createPosts, updateAPost, deleteAPost };
