import { put , takeEvery, all, /* select */ } from 'redux-saga/effects';
import { FETCH_GAMESLIST, FETCH_GAMEDETAIL, }  from "./actionsTypes";
import * as gameService from '../services/gameService';
import {
    saveGameDetails, 
    saveGamesList, 
    setGamesListRequestFailed, 
    setGameDetailsRequestFailed,
    setGamesListLoading,
    setGameDetailsLoading,
} from  '../redux/actions';



export function* fetchGameList(action) {
    yield put(setGamesListLoading(true));
    yield put(setGamesListRequestFailed({setFailed:false}));
    let result =  null;
    let error = null;
    if (action.payload.content && action.payload.content.searchString) {
        yield gameService.fetchGamesListSearch(action.payload.content.searchString)
            .then((res) => {
                result = res;
            })
            .catch(err => {
                error = err;
                console.log(err, "error in realSAGA in fetchGameList");
            }); ;
    } else {
        yield gameService.fetchGamesListTop()
            .then((res) => {
                result = res;
            })
            .catch(err => {
                error = err;
                
            }); 
    }
    
    if (error) {
        yield put(setGamesListRequestFailed({setFailed:true, error}));
    } else {    
        const paginationGamesArray = setPaginationGamesArray(result.data, process.env.REACT_APP_COUNT_GAMES_ON_PAGE);
        yield put(saveGamesList(paginationGamesArray));
    }
    yield put(setGamesListLoading(false));
}

export function* fetchGameDetail(action) {
    yield put(setGameDetailsLoading(true));
    yield put(setGameDetailsRequestFailed({setFailed:false}));
    let result = null;
    let error = null;
    yield gameService.fetchGameDetail(action.payload.content)
        .then((res) => {
            console.log(res, 'res in fetchGameDetail');
            result = res;
        })
        .catch(err => {
            error = err;
            console.log(err, "error in realSAGA");
        });

    
    if (error) {
        yield put(setGameDetailsRequestFailed({setFailed:true, error}));
    } else {
        result.data[0].first_release_date = getDate(result.data[0].first_release_date);
        yield put( saveGameDetails(result.data));
    }
    yield put(setGameDetailsLoading(false));
}



/**
 *  --Функція перехвату екшену
 */
export function* watchFetchGamesList() {
    yield takeEvery(FETCH_GAMESLIST, fetchGameList);
}



export function* watchFetchGameDetail() {
    yield takeEvery(FETCH_GAMEDETAIL, fetchGameDetail);
}


/**
 * -- единая точка входа для запуска всех Саг одновременно 
 * */ 
export default function* rootSaga() {
    yield all([
        watchFetchGamesList(),
        watchFetchGameDetail(),
    ])
}

const getDate = (milliseconds)=>{
    if (!milliseconds) {
        return "---"; 
    }
    const baseDate = new Date(2018, 8, 28);
    const date = new Date(baseDate.getTime()+milliseconds);
    console.log(date, 'date');
    return `${date.getFullYear()}.${date.getMonth()+1}.${date.getDate()}`;
}

const setPaginationGamesArray = (gamesList, gamesPerPage) => {
    const paginationArray = [];
    const pages = Math.ceil(gamesList.length/gamesPerPage);
    for (let i = 0; i < pages; i++) {
        paginationArray.push(gamesList.slice(i*gamesPerPage, (i+1)*gamesPerPage));
        
    }
    return paginationArray;
}