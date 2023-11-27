import axios from "axios";
import {
  SerializedError,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import routes from "./routes";
import PostInterface from "../models/posts.interface";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await axios.get(routes.postsPath());
  console.log(response.data);
  return response.data;
});

export const createPost = createAsyncThunk(
  "posts/createPost",
  async (data: { title: string; body: string }) => {
    const response = await axios.post(routes.postAddPath(), data);
    return response.data;
  }
);

export const updatePost = createAsyncThunk(
  "posts/updatePost",
  async (data: { title: string; body: string; id: string }) => {
    const { id, title, body } = data;
    const response = await axios.patch(routes.postPath(id), { title, body });
    return response.data;
  }
);

export const deletePost = createAsyncThunk(
  "posts/deletePost",
  async (id: string) => {
    await axios.delete(routes.postPath(id));
    return id;
  }
);

// const postsAdapter = createEntityAdapter<PostInterface>();

interface State {
  entities: PostInterface[];
  loadingStatus: string;
  error: null | SerializedError;
}

const initialState = {
  entities: [],
  loadingStatus: "idle",
  error: null,
} as State;

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost(state, { payload }) {
      state.entities.push(payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loadingStatus = "loading";
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, { payload }) => {
        state.entities = payload;
        state.loadingStatus = "idle";
        state.error = null;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loadingStatus = "failed";
        state.error = action.error;
      })
      .addCase(createPost.fulfilled, (state, { payload }) => {
        state.entities.push(payload);
      })
      .addCase(deletePost.fulfilled, (state, { payload }) => {
        state.entities = state.entities.filter(
          (entity) => entity._id !== payload
        );
        state.loadingStatus = "idle";
        state.error = null;
      });
  },
});

export default postsSlice.reducer;
