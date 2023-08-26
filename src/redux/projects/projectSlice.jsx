import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProjects = createAsyncThunk('projects/fetchProjects', async () => {
    try {
        const response = await axios.get(`https://api.github.com/users/RileyManda/repos`);
        return response.data;
    } catch (error) {
        if (error.response) {
            // The request was made and the server responded with a status code
            throw new Error(`GitHub API Error: ${error.response.status} - ${error.response.statusText}`);
        } else if (error.request) {
            // The request was made but no response was received
            throw new Error('No response received from the server.');
        } else {
            // Something else happened while setting up the request
            throw new Error('An error occurred while making the request.');
        }
    }
});




const initialState = {
    projects: [],
    isLoading: false,
    error: undefined,
};

const projectsSlice = createSlice({
    name: 'projects',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProjects.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(fetchProjects.fulfilled, (state, action) => {
                state.isLoading = false;
                state.projects = action.payload;
            })
            .addCase(fetchProjects.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            });
    },
});

export const projectsActions = projectsSlice.actions;
export default projectsSlice.reducer;