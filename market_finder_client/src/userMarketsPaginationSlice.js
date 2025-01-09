import { createSlice } from "@reduxjs/toolkit";

export const userMarketsPaginationSlice = createSlice({
    name: "userMarketsPagination",
    initialState: {
        page: 1,
        paginationMeta: { totalPageCount: 1 },
    },
    reducers: {
        incrementPage: (state) => {
            state.page += 1;
        },
        decrementPage: (state) => {
            state.page -= 1;
        },
        setPage: (state, action) => {
            state.page = action.payload;
        },
        setTotalPageCount: (state, action) => {
            state.paginationMeta.totalPageCount = action.payload.total_page_count;
        }
    },
});

export const { incrementPage, decrementPage, setPage, setTotalPageCount } = userMarketsPaginationSlice.actions;
export default userMarketsPaginationSlice.reducer;
