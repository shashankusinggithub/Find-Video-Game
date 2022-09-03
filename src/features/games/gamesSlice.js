import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    Alllist : [],
    loading : false
}

export const gamesSlice = createSlice({
    name: "videoGames",
    initialState,    
    reducers: {
        initiateData : (state=[], { type, payload }) => {
            console.log(payload)
            initialState = {...initialState, Alllist:payload, loading:false}
            console.log(initialState)
            return({Alllist:payload, loading:false})
        },
        update : (state = [], { type, payload }) => {
            console.log(payload)
            let list = initialState.Alllist
            if (payload.name) {
                list = list.filter(game => game.name.toLowerCase().includes(payload.name.toLowerCase()))
            }
            if (payload.score) {
                list = list.filter(game => game.rating > payload.score * 10)
            }
            if (payload.order) {
                if (payload.order === "first_release_date") {
                    list.sort((a, b) => a.first_release_date - b.first_release_date)
                }
                else if (payload.order === "rating") {
                    list.sort((a, b) => a.rating - b.rating)
                }
                else if (payload.order === "name") {
                    list.sort((a, b) => {
                        if (a.name > b.name) {
                            return 1;
                        }
                        if (a.name < b.name) {
                            return -1;
                        }
                        return 0;
                    })
                }
            }
    
            if (payload.actualsort === true) {
                // console.log('reversed', orderList)
                console.log(list)
                list = [...list].reverse()
            }
            // setModlist(list)
            return ({Alllist:list, loading:false})
        }
    }
})


export const {update, initiateData} = gamesSlice.actions
export default gamesSlice.reducer