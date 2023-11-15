import { configureStore } from "@reduxjs/toolkit"
import pokemonSlice from "./redux/pokemonSlice"

export default configureStore({
    reducer: {
        pokemons: pokemonSlice
    }
})