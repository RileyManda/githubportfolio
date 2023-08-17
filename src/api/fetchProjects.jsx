import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchProjectsFromApi = createAsyncThunk('projects/fetchProjects', async () => {
    try {
        const response = await axios.get('https://api.github.com/users/RileyManda/repos?page=${page}&per_page=100');
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch projects.');
    }
});
export default fetchProjectsFromApi;
