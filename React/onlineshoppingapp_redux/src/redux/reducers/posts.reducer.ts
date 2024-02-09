import { createSlice } from "@reduxjs/toolkit";
class PostModel {
  constructor(
    public id: number,
    public userId: number,
    public title: string,
    public body: string,
  ) {}
}
type PostsState = {
  posts: PostModel[];
};
const initialState: PostsState = {
  posts: [
    {
      id: 1,
      userId: 1,
      title: "First Post Title",
      body: "First Post Body",
    },
  ],
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    deleteAPost: (store, action) => {
      console.log("Within deleteAPost reducer !");
      return store;
    },
  },
});
export const { deleteAPost } = postsSlice.actions;
export default postsSlice.reducer;
