import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import style from './style.module.css';

class Pagination extends React.Component {

    setPagination(activePage){
        return {
            allPage : this.props.gamesList.length,
            prevPage : +activePage===1?null:+activePage-1,
            nextPage : +activePage===this.props.gamesList.length?null:+activePage+1, 
        }
    }

    render() {
        const {searchString, activePage} = this.props;
        const {allPage, prevPage, nextPage} = this.setPagination(this.props.activePage)
        return (
            <div className={style.pagination}>
                {prevPage?<Link /* className={style.game} */ to={`/${prevPage}/?${searchString}`}>Prev Page</Link>:null}
                <div>{activePage}</div>
                <div>/</div>
                <div>{allPage}</div>
                {nextPage?<Link /* className={style.game} */ to={`/${nextPage}/?${searchString}`}>Next Page</Link>:null}
            </div>
        );

    }
}


const mapStateToProps = (state) => {
    console.log(state, 'state in gameDetailsContainer');
    return {
        gamesList: state.gamesReducer.gamesList,
        activePage: state.gamesReducer.activePage,
        searchString: state.gamesReducer.searchString,
    };
}

export default connect(mapStateToProps, null )(Pagination);