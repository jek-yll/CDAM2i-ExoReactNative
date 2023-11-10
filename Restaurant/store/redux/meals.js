import { createSlice } from "@reduxjs/toolkit";
import { MEALS } from "../../data/data";


const meals = createSlice({
    name: 'meals',
    initialState: {
        meals: MEALS
    },
    reducers: {

    }
})

export default meals.reducer