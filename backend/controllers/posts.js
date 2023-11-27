import BadRequestError from "../errors/BadRequestError.js";
import PostModel from "../models/postModel.js";

export const getPosts = async (req, res, next) => {
  try {
    const posts = await PostModel.find();
    res.send(posts);
  } catch (err) {
    next(err);
  }
};

export const createPost = async (req, res, next) => {
  const { body, tags, title } = req.body;
  console.log(req.body);

  try {
    const post = await PostModel.create({
      body,
      tags,
      title,
    });
    console.log(post);

    res.send(post);
  } catch (err) {
    if (err.name === "ValidationError") {
      next(new BadRequestError("Некорректные данные"));
      return;
    }
    next(err);
  }
};

export const deletePostById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const deleteResponse = await PostModel.findByIdAndDelete(id);
    res.send(deleteResponse);
  } catch (err) {
    next(err);
  }
};

export const updatePostById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const updateResponse = await PostModel.findByIdAndUpdate(id, req.body);
    res.send(updateResponse);
  } catch (err) {
    next(err);
  }
};
