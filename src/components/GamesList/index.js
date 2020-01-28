import React from 'react';
import { connect } from 'react-redux'

import Game from '../Game'

// import './style.css'
import style from './style.module.css';
import { Link } from 'react-router-dom';

import ErrorIndicator from '../ErrorIndicator';

class GamesList extends React.Component {
    render() {
        if (!this.props.gamesList[this.props.activePage-1]) {
            return <ErrorIndicator/>
        }
        const {gamesList, activePage, searchString} = this.props;
        const listTitle = searchString? "Search Result": "TOP 10";
        return (
            <div className={style.gamesListContainer}>
                <div className="gameTitle">{listTitle}</div>
                <div className={style.gamesList}>
                    {gamesList[activePage-1].map((item, index) => {
                        return (
                            <Link className="game" key={item.id} to={`/game/${item.id}`}>
                                    <Game game={item}/>
                            </Link>
                        )
                    })}
                </div>
            </div>
        );

    }
}



// export default GamesList;

//до використання селекторів
const mapStateToProps = state => {
    console.log(state.gamesReducer.gamesList, "state.gamesReducer.gamesList in gameList")
    return {
        gamesList: state.gamesReducer.gamesList,
        activePage: state.gamesReducer.activePage,
        searchString: state.gamesReducer.searchString,
    };
};

/** */
export default connect(mapStateToProps)(GamesList);