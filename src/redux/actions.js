import { 
    SAVE_GAMESLIST, 
    FETCH_GAMESLIST, 
    FETCH_GAMEDETAIL, 
    SAVE_GAMEDETAILS, 
    SAVE_ACTIVEPAGE, 
    SAVE_SEARCHSTRING,
    SET_GAMESLIST_REQUEST_FAILED,
    SET_GAMESDETAILS_REQUEST_FAILED,
    SET_GAMESLIST_LOADING,
    SET_GAMESDETAILS_LOADING,
} from "./actionsTypes";

export const saveGamesList = content => {
    return {
        type: SAVE_GAMESLIST,
        payload: {
            content
        }
    };
};

export const fetchGamesList = content => {
    return {
        type: FETCH_GAMESLIST,
        payload: {
            content
        }
    };
};

export const fetchGameDetail = content => {
    return {
        type: FETCH_GAMEDETAIL,
        payload: {
            content
        }
    };
};

export const saveGameDetails = content => {
    return {
        type: SAVE_GAMEDETAILS,
        payload: {
            content ,
        }
    };
};

export const saveActivePage = content => {
    return {
        type: SAVE_ACTIVEPAGE,
        payload: {
            content ,
        }
    };
};

export const saveSearchString = content => {
    return {
        type: SAVE_SEARCHSTRING,
        payload: {
            content ,
        }
    };
};

export const setGamesListRequestFailed = content => {
    return {
        type: SET_GAMESLIST_REQUEST_FAILED,
        payload: {
            content ,
        }
    };
};

export const setGameDetailsRequestFailed = content => {
    return {
        type: SET_GAMESDETAILS_REQUEST_FAILED,
        payload: {
            content ,
        }
    };
};

export const setGamesListLoading = content => {
    return {
        type: SET_GAMESLIST_LOADING,
        payload: {
            content ,
        }
    };
};

export const setGameDetailsLoading = content => {
    return {
        type: SET_GAMESDETAILS_LOADING,
        payload: {
            content ,
        }
    };
};
