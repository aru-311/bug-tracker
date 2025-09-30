import { createSlice } from "@reduxjs/toolkit";

export const sliceOrReducer = createSlice({
  name: "bugTracker",
  initialState: {
    id: 0,
    title: "",
    description: "",
    bugs: [],
  },
  reducers: {
    setTitle: (state, action) => {
      state.title = action.payload;
    },
    setDescription: (state, action) => {
      state.description = action.payload;
    },
    addBug: (state) => {
      state.bugs.push({
        id: ++state.id,
        title: state.title,
        description: state.description,
      });
      state.title = ""; // clear after adding
      state.description = "";
    },
    deleteBug: (state, action) => {
      state.bugs = state.bugs.filter((bug) => bug.id !== action.payload);
    },
    editBug: (state, action) => {
      const { id, title, description } = action.payload;
      const bug = state.bugs.find((b) => b.id === id);
      if (bug) {
        bug.title = title;
        bug.description = description;
      }
    },
  },
});

export const { setTitle, setDescription, addBug, deleteBug, editBug } =
  sliceOrReducer.actions;

export default sliceOrReducer.reducer;
