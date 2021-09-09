import { apiCallBegan } from "./createAction";
import { createSlice } from "@reduxjs/toolkit";

const url = '/tournament'

const slice = createSlice({
    name: 'tournament',
    initialState: {
        tournament: [],
        isLoading: true,
        lastFetch: null
    },
    reducers: {
        tournamentRequested: (state, action) => {
            state.isLoading = true;
        },
        tournamentRequestFailed: (state, action) =>  {
            state.isLoading = false;
        },
        tournamentsReceived: (state, action) => {
            // uppdating the Ui databes (store)
            state.isLoading = false
            state.tournament = action.payload
            },
        tournamentAdded: (tournament, action) => {

        },
        tournamentCompleat: (state, action) => {
           const index = state.tournament.findIndex(tournament => tournament.id === action.payload.id)
           state.tournament[index].compleat = true;
        },

    },

})


export const { 
        tournamentAdded,
        tournamentsReceived,
        tournamentRequested,
        tournamentCompleat,
        tournamentRequestFailed,
    } = slice.actions
export default slice.reducer;

  
export const loadTournament = () => apiCallBegan ({
    url,
    onStart: tournamentRequested.type,
    onSuccess: tournamentsReceived.type,
    onError: tournamentRequestFailed.type
})
