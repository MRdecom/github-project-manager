import {createSlice, PayloadAction} from "@reduxjs/toolkit";
type RandomText = {
    randomText?: string;
    myRepoList?: object[];
    userRepoList?: object[];
}
const initialState = {
    randomText: '',
    myRepoList: [{}],
    userRepoList: [{}]
};

const CommonSlice = createSlice({
    name: "Common",
    initialState,
    reducers: {
        getRandomText(state, action: PayloadAction<RandomText>) {
            state.randomText = action.payload.randomText || initialState.randomText;
        },
        getMyRepo(state, action: PayloadAction<object[]>) {
            state.myRepoList = action.payload || [];
        },
        getUserRepoList(state, action: PayloadAction<object[]>) {
            state.userRepoList = action.payload || [];
        }
    }
})

export const {
    getRandomText,
    getMyRepo,
    getUserRepoList
} = CommonSlice.actions;

export default CommonSlice.reducer;