import React from 'react';
import { connect } from 'react-redux'

import { fetchGameDetail } from '../../redux/actions';

import GameDetail from '../GameDetail';

export class GameDetailsContainer extends React.Component {

    componentDidMount() {
        // console.log(this.props.match.params.gameId, "gameId in prop container");
        this.props.fetchGameDetail(this.props.match.params.gameId);
    }

    

    render() {
        const {gameDetails, gameDetailsLoading, gameDetailsRequestFail} = this.props;
        return (
            <GameDetail gameDetails={gameDetails[0]} loading={gameDetailsLoading} requestFail={gameDetailsRequestFail} />
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state, 'state in gameDetailsContainer');    
    return {
        gameDetails: state.gamesReducer.gameDetails,
        gameDetailsLoading: state.gamesReducer.gameDetailsLoading,
        gameDetailsRequestFail: state.gamesReducer.gameDetailsRequestFail,
    };
}

export default connect(mapStateToProps, {fetchGameDetail})(GameDetailsContainer)
