import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../Reducer/userSlice.js';

export const store = configureStore({
    reducer: {
        user: userReducer,
    }

})


