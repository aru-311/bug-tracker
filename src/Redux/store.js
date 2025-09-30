import { configureStore } from '@reduxjs/toolkit'
import sliceOrReducer from './sliceOrReducer'; // adding reducer to the store


export default configureStore({ // creating the react store
  reducer: {
    bugTracker:sliceOrReducer
  },
});