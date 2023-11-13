import { configureStore } from "@reduxjs/toolkit";
import categories from "./redux/categories";
import meals from "./redux/meals";

export default configureStore({
    reducer: {
        categories: categories,
        meals: meals
    }
})