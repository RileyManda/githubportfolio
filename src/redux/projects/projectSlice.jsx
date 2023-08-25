import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProjects = createAsyncThunk('projects/fetchProjects', async () => {
    try {
        const accessToken = import.meta.env.VITE_API_KEY;
        const response = await axios.get(`https://api.github.com/users/RileyManda/repos?page=1&per_page=100`,{
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        console.log('X-RateLimit-Limit:', response.headers['x-ratelimit-limit']);
        console.log('X-RateLimit-Remaining:', response.headers['x-ratelimit-remaining']);
        console.log('X-RateLimit-Reset:', response.headers['x-ratelimit-reset']);

        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch projects.');
    }
});


const initialState = {
    projects: [],
    isLoading: false,
    error: undefined,
    isDataFetched: false,
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
                state.isDataFetched = true; 
            })
            .addCase(fetchProjects.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            });
    },
});

export const projectsActions = projectsSlice.actions;
export default projectsSlice.reducer;