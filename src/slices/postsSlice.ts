import axios from "axios";
import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import routes from "./routes";
import { RootState } from ".";

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
  async (id: string) => {
    await axios.delete(routes.taskPath(id));
    return id;
  }
);

const postsAdapter = createEntityAdapter();

interface State {
  entities: Record<string, never>;
  ids: string[];
}

const initialState = {
  entities: {},
  ids: [],
} as State;

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: postsAdapter.addOne,
    addPosts: postsAdapter.addMany,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.fulfilled, postsAdapter.addMany)
      .addCase(deletePost.fulfilled, postsAdapter.removeOne)
      .addCase(updatePost.fulfilled, postsAdapter.updateOne);
  },
});

export const selectors = postsAdapter.getSelectors<RootState>(
  (state) => state.posts
);

export default postsSlice.reducer;
