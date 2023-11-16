import axios from "axios";
import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import routes from "./routes";
import { RootState } from ".";
import PostInterface from "../models/posts.interface";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await axios.get(routes.tasksPath());
  return response.data.posts;
});

export const updatePost = createAsyncThunk(
  "posts/updatePost",
  async (data: string) => {
    const { id, title, body } = JSON.parse(data);
    const response = await axios.put(routes.taskPath(id), { title, body });
    console.log(response.data);
    return response.data;
  }
);

export const deletePost = createAsyncThunk(
  "posts/deletePost",
  async (id: string | number) => {
    await axios.delete(routes.taskPath(id));
    return id;
  }
);

const postsAdapter = createEntityAdapter<PostInterface>();

const postsSlice = createSlice({
  name: "posts",
  initialState: postsAdapter.getInitialState({
    loadingStatus: "idle",
    error: null,
  }),
  reducers: {
    addPost: postsAdapter.addOne,
    addPosts: postsAdapter.addMany,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loadingStatus = "loading";
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        postsAdapter.addMany(state, action);
        state.loadingStatus = "idle";
        state.error = null;
      })
      .addCase(deletePost.fulfilled, postsAdapter.removeOne)
      .addCase(updatePost.fulfilled, postsAdapter.updateOne);
  },
});

export const selectors = postsAdapter.getSelectors<RootState>(
  (state) => state.posts
);

export default postsSlice.reducer;
