import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"

const BASE_URL = "https://pokeapi.co/api/v2/pokemon?offset=10&limit=50"

export const fetchPokemons = createAsyncThunk(
    "pokemon/fetchPokemons",
    async () => {
        const response = await fetch(BASE_URL)
        const data = await response.json()
        return data.results
    }
)

export const fetchPokemon = createAsyncThunk(
    "pokemon/fetchPokemon",
    async (url) => {
        const response = await fetch(url)
        const data = await response.json()
        return data
    }
)

export const fetchText = createAsyncThunk(
    "pokemon/fetchText",
    async (id) => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}/`)
        const data = await response.json()
        return data
    }
)

const pokemonSlice = createSlice({
    name: "pokemon",
    initialState: {
        pokemons: [],
        pokedex: [],
        displayPokedex: false, 
        pokemon: null,
        text: ''
    },
    reducers: {
        addPokedex : (state, action) => {
            state.pokedex.push(action.payload)
        },
        changeDisplayPokedex: (state) => {
            state.displayPokedex = !state.displayPokedex
        },
        clearPokedex: (state) => {
            state.pokedex = []
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPokemons.fulfilled, (state, action) => {
            state.pokemons = action.payload
            ;
        })
        builder.addCase(fetchPokemon.fulfilled, (state, action) => {
            state.pokedex = [...state.pokedex, action.payload]
        })
        builder.addCase(fetchText.fulfilled, (state, action) => {
            state.text = action.payload
        })
    }
})

export const {addPokedex, changeDisplayPokedex, clearPokedex} = pokemonSlice.actions
export default pokemonSlice.reducer