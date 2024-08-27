import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTodo = createAsyncThunk("fetchTodo", async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
    return response.data;
});

const todoSlice = createSlice({
    name: "todo",
    initialState: {
        data: null,
        isLoading: false,
        isError: false,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTodo.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchTodo.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchTodo.rejected, (state, action) => {
            console.log("Error", action.error);
            state.isError = true;
        });
    },
});

export default todoSlice.reducer;
