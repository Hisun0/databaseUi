import { RootState } from ".";

export const selectAllPosts = (state: RootState) => state.posts.entities;
export const selectPostById = (state: RootState, id: string) =>
  state.posts.entities.find((entity) => entity._id === id);
export const removePostById = (id: string) => (state: RootState) =>
  state.posts.entities.filter((entity) => entity._id !== id);
