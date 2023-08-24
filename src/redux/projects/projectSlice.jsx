import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProjects = createAsyncThunk('projects/fetchProjects', async () => {
    try {
        const accessToken = import.meta.env.VITE_TOKEN;
        const response = await axios.get(`https://api.github.com/users/RileyManda/repos`,{
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch projects.');
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