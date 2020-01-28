import {  
    SAVE_GAMESLIST, 
    SAVE_GAMEDETAILS, 
    SAVE_ACTIVEPAGE, 
    SAVE_SEARCHSTRING ,
    SET_GAMESLIST_REQUEST_FAILED,
    SET_GAMESDETAILS_REQUEST_FAILED,
    SET_GAMESLIST_LOADING,
    SET_GAMESDETAILS_LOADING,
} from "../actionsTypes";

const initialState = {
    gamesList: [],
    gameDetails: {},
    activePage: 1,
    searchString: "",
    gamesListRequestFail: false,
    gameDetailsRequestFail: false,
    gamesListLoading: false,
    gameDetailsLoading: false,
};

export default function (state = initialState, action) {
    switch (action.type) {
        
        case SAVE_GAMESLIST: {
            return {
                ...state,
                gamesList: action.payload.content, 
            };
        }
        case SAVE_GAMEDETAILS: {
            return {
                ...state,
                gameDetails: action.payload.content, 
            };
        }
        case SAVE_ACTIVEPAGE: {
            return {
                ...state,
                activePage: action.payload.content, 
            };
        }
        case SAVE_SEARCHSTRING: {
            return {
                ...state,
                searchString: action.payload.content, 
            };
        }
        case SET_GAMESLIST_REQUEST_FAILED: {
            // console.log("SET_GAMESLIST_REQUEST_FAILED")
            return {
                ...state,
                gamesListRequestFail: action.payload.content.setFailed, 
            };
        }
        case SET_GAMESDETAILS_REQUEST_FAILED: {
            return {
                ...state,
                gameDetailsRequestFail: action.payload.content.setFailed, 
            };
        }
        case SET_GAMESLIST_LOADING: {
            return {
                ...state,
                gamesListLoading: action.payload.content, 
            };
        }
        case SET_GAMESDETAILS_LOADING: {
            return {
                ...state,
                gameDetailsLoading: action.payload.content, 
            };
        }

        default:
            return state;
    }
}