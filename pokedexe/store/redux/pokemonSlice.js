import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"


const API_URL =  "https://pokeapi.co/api/v2/pokemon?offset=10&limit=50"
const POKE_URL = "https://pokeapi.co/api/v2/pokemon/11/"

export const getAllPokemons = createAsyncThunk(
    "pokemon/getAllPokemons",
    async () => {
        const response = await axios.get(API_URL)
        //console.log(response.data.results)
        const data = response.data.results

        await data.forEach(pokemon => {
            async () => {
                const resp = await axios.get(pokemon.url)
                console.log("toto");
            }
        })
        ;
    },
    
)

export const getOnePokemon = createAsyncThunk(
    "pokemon/getOnePokemon",
    async (poke_url) => {
        const response = await axios.get(poke_url)
    }
)

const pokemons = createSlice({
    name: 'pokemon',
    initialState: {
        pokemons: []
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getAllPokemons.fulfilled, (state, action) => {
            state.pokemons = action.payload
        })
    }
})

export default pokemons.reducer