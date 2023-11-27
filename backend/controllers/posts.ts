import { Request, Response, NextFunction } from "express";

import BadRequestError from "../errors/BadRequestError.js";
import PostModel from "../models/postModel.js";

interface CrudInterface {
  req: Request;
  res: Response;
  next: NextFunction;
}

type CrudFunction = (crudInterface: CrudInterface) => Promise<void>;

export const getPosts: CrudFunction = async ({ req, res, next }) => {
  try {
    const posts = await PostModel.find();
    res.send(posts);
  } catch (err) {
    next(err);
  }
};

export const createPost: CrudFunction = async ({ req, res, next }) => {
  const { body, tags, title } = req.body;

  try {
    const post = await PostModel.create({
      body,
      tags,
      title,
    });

    res.send(post);
  } catch (err) {
    if (err.name === "ValidationError") {
      next(new BadRequestError("Некорректные данные"));
      return;
    }
    next(err);
  }
};

export const deletePostById: CrudFunction = async ({ req, res, next }) => {
  const { id } = req.params;
  try {
    const deleteResponse = await PostModel.findByIdAndDelete(id);
    res.send(deleteResponse);
  } catch (err) {
    next(err);
  }
};

export const updatePostById: CrudFunction = async ({ req, res, next }) => {
  const { id } = req.params;
  try {
    const updateResponse = await PostModel.findByIdAndUpdate(id, req.body);
    res.send(updateResponse);
  } catch (err) {
    next(err);
  }
};
