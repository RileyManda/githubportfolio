import { configureStore } from '@reduxjs/toolkit';
import projectsReducer from './projects/projectSlice';
import { getItemFromLocalStorage } from '../components/LocalStorage';

const cachedProjectsData = getItemFromLocalStorage('projectsData');

const store = configureStore({
    reducer: {
        home: projectsReducer,
       
    },
    preloadedState: {
        home: {
            projects: cachedProjectsData || [], 
            isLoading: false,
            error: undefined,
        },
    },
});
export default store;