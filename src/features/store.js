import {configureStore} from "@reduxjs/toolkit"
import gameReducer from "./games/gamesSlice"

export const store = configureStore({
    reducer: {
        games : gameReducer

    } 
    }
)
