import { createSlice } from "@reduxjs/toolkit";
import { MEALS } from "../../data/data";


const meals = createSlice({
    name: 'meals',
    initialState: {
        meals: MEALS
    },
    reducers: {
        getMealsByCat : (state, action) => {
            const catId = action.payload.catId
            const filteredMeals = state.meals.filter(meal => meal.categoryIds.includes(catId))
            return {
                ...state,
                meals: filteredMeals
            }
        }
    }
})

export default meals.reducer
export const  getMealsByCat = meals.actions.getMealsByCat