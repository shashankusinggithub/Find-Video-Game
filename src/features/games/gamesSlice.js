import {createSlice} from '@reduxjs/toolkit';

let initialState = {
    Alllist: [],
    loading: false
};

export const gamesSlice = createSlice({
    name: 'videoGames',
    initialState,
    reducers: {
        initiateData: (state = [], {type, payload}) => {
            console.log(payload, 'initial');
            initialState = {...initialState, Alllist: payload.results, loading: false};
            return {Alllist: payload.results, loading: false};
        },
        update: (state = [], {type, payload}) => {
            let list = [...initialState.Alllist];
            console.log(payload, list, 'update');
            if (payload.name) {
                list = list.filter((game) => game.name.toLowerCase().includes(payload.name.toLowerCase()));
            }
            if (payload.score) {
                list = list.filter((game) => game.rating * 2 >= payload.score);
            }
            if (payload.order) {
                if (payload.order === 'first_release_date') {
                    list.sort((a, b) => new Date(a.released) - new Date(b.released));
                } else if (payload.order === 'rating') {
                    list.sort((a, b) => a.rating - b.rating);
                } else if (payload.order === 'name') {
                    list.sort((a, b) => {
                        if (a.name > b.name) {
                            return 1;
                        }
                        if (a.name < b.name) {
                            return -1;
                        }
                        return 0;
                    });
                }
            }

            if (payload.actualsort === true) {
                // console.log('reversed', orderList)
                list = [...list].reverse();
            }
            console.log(list);
            return {Alllist: list, loading: false};
        }
    }
});

export const {update, initiateData} = gamesSlice.actions;
export default gamesSlice.reducer;
