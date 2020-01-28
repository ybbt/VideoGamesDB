import React from 'react';
import { Link } from 'react-router-dom';

import SearchContainer from '../SearchContainer';
import GamesList from '../GamesList';
import Pagination from '../Pagination';

import Loader from '../Loader';

import style from './style.module.css'

class Main extends React.Component {

    render() {
        const {paginationVisible, loading} = this.props;
        const pagination = paginationVisible ? <Pagination /> : null;
        const loader = loading ? <Loader /> : null;
        const gamesList = !loading ? <GamesList /> : null;
        
        return (
            <div className={style.main}>
                <Link to={`/`}>The Great Big Videogames Database </Link>
                <div>
                    <SearchContainer/>
                </div>
                <div>
                    {loader}
                    {gamesList}
                </div>
                {pagination}
            </div>
        );

    }
}



export default Main;
