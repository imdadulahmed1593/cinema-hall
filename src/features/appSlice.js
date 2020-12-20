import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    movie: null,
  },
  reducers: {
    setMovieInfo: (state, action) => {
      state.movie = action.payload;

      console.log(state.movie);
    },
  },
});

export const { setMovieInfo } = appSlice.actions;

// export const selectChannelId = (state) => state.app.ChannelId;
// export const selectChannelName = (state) => state.app.ChannelName;
export const selectMovie = (state) => state.app.movie;

export default appSlice.reducer;
