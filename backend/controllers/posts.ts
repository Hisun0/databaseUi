import { Request, Response, NextFunction } from "express";

import BadRequestError from "../errors/BadRequestError.ts";
import PostModel from "../models/postModel.ts";

type ControllerType = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<void>;

export const getPosts: ControllerType = async (_req, res, next) => {
  try {
    const posts = await PostModel.find();
    res.send(posts);
  } catch (err) {
    next(err);
  }
};

export const createPost: ControllerType = async (req, res, next) => {
  const { body, tags, title } = req.body;

  try {
    const post = await PostModel.create({
      body,
      tags,
      title,
    });

    res.send(post);
  } catch (err: any) {
    if (err.name === "ValidationError") {
      next(new BadRequestError("Некорректные данные"));
      return;
    }
    next(err);
  }
};

export const deletePostById: ControllerType = async (req, res, next) => {
  const { id } = req.params;
  try {
    const deleteResponse = await PostModel.findByIdAndDelete(id);
    res.send(deleteResponse);
  } catch (err) {
    next(err);
  }
};

export const updatePostById: ControllerType = async (req, res, next) => {
  const { id } = req.params;
  try {
    const updateResponse = await PostModel.findByIdAndUpdate(id, req.body);
    res.send(updateResponse);
  } catch (err) {
    next(err);
  }
};
