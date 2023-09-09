
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { setItemInLocalStorage, getItemFromLocalStorage } from '../../components/LocalStorage';

// Async thunk to fetch projects
export const fetchProjects = createAsyncThunk('projects/fetchProjects', async () => {
    try {
        const response = await axios.get(`https://api.github.com/users/RileyManda/repos?page=1&per_page=100`);
        return response.data;
    } catch (error) {
        if (error.response) {
            throw new Error(`GitHub API Error: ${error.response.status} - ${error.response.statusText}`);
        } else if (error.request) {
            throw new Error('No response received from the server.');
        } else {
            throw new Error('An error occurred while making the request.');
        }
    }
});

// Utility functions for localStorage
const LOCAL_STORAGE_KEY = 'projectsData';

const updateProjectsDataInLocalStorage = (projects) => {
    setItemInLocalStorage(LOCAL_STORAGE_KEY, projects);
};

// Initial state
const initialState = {
    projects: getItemFromLocalStorage(LOCAL_STORAGE_KEY) || [],
    isLoading: false,
    error: undefined,
};

// Redux slice definition
const projectsSlice = createSlice({
    name: 'projects',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProjects.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(fetchProjects.fulfilled, (state, action) => {
                state.isLoading = false;
                state.projects = action.payload;

                // Update data in localStorage
                updateProjectsDataInLocalStorage(action.payload);
            })
            .addCase(fetchProjects.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            });
    },
});

export const projectsActions = projectsSlice.actions;
export default projectsSlice.reducer;
