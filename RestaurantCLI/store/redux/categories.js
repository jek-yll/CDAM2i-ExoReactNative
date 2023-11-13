import { createSlice } from "@reduxjs/toolkit";
import { CATEGORIES } from "../../data/data";


const categories = createSlice({
    name: 'categorie',
    initialState: {
        categories : CATEGORIES
    },
    reducers: {

    }
})

export default categories.reducer