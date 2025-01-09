import { configureStore } from '@reduxjs/toolkit';
import marketsPaginationReducer from './marketsPaginationSlice';
import userMarketsPaginationReducer from './userMarketsPaginationSlice';

const store = configureStore({
  reducer: {
    marketsPagination: marketsPaginationReducer,
    userMarketsPagination: userMarketsPaginationReducer,
  },
});

export default store;
