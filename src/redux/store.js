import { configureStore } from '@reduxjs/toolkit';
import projectsReducer from './projects/projectSlice';

const store = configureStore({
    reducer: {
        home: projectsReducer,
       
    },
});
export default store;