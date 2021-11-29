import {createSlice, PayloadAction} from "@reduxjs/toolkit";
type RandomText = {
    randomText: string
}
const initialState = {
    randomText: ''
};

const CommonSlice = createSlice({
    name: "RandomText",
    initialState,
    reducers: {
        getRandomText(state, action: PayloadAction<RandomText>) {
            state.randomText = action.payload.randomText || initialState.randomText;
        }
    }
})

export const {
    getRandomText
} = CommonSlice.actions;

export default CommonSlice.reducer;