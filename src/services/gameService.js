import http from '../api';
import {GAMEDB} from '../api/routes';
// import {API_KEY} from '../api/key'; 

export const fetchGamesListTop = () => {
    return http.post(GAMEDB.GAMES, `fields name, cover.image_id, popularity; sort popularity desc; limit ${process.env.REACT_APP_COUNT_GAMES_ON_PAGE};`, {
        headers: {
            'Accept': 'application/json',
            'user-key': process.env.REACT_APP_API_KEY,
        },
    }).catch((error)=>{
        // console.log(error, "error in SAGA");
        throw new Error(error);
    });
};

export const fetchGamesListSearch = (searchString) => {
    return http.post(GAMEDB.GAMES, `fields name, cover.image_id; search "${searchString}"; where cover!= null & name!= null; limit 500;`, {
        headers: {
            'Accept': 'application/json',
            'user-key': process.env.REACT_APP_API_KEY,
        },
    });
};

export const fetchGameDetail = (id) => {
    // console.log(id, "id in fetchGameDetail");
    return http.post(GAMEDB.GAMES, `fields name, cover.image_id, franchise.name, genres.name, first_release_date, storyline, summary; where id=${id};`, {
        headers: {
            'Accept': 'application/json',
            'user-key': process.env.REACT_APP_API_KEY,
        },
    });
};
