import React from 'react'
// import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';

import Loader from '../Loader';
import ErrorIndicator from '../ErrorIndicator';

import style from './style.module.css'

export class GameDetail extends React.Component {    
 
    render() {
        // if (!this.props.gameDetails) {
        //     return null;
        // }
        if(this.props.gamesListRequestFail){
            return <ErrorIndicator/>
        }
        const errorIndicator = this.props.requestFail? <ErrorIndicator/>:null;
        const loader = this.props.loading && !this.props.requestFail ? <Loader /> : null;
        const detailView = !this.props.loading && !this.props.requestFail ? <DetailView gameDetails={this.props.gameDetails}/> : null;
        return (
            <div className={style.gameDetail}>
                {errorIndicator}
                {loader}
                {detailView}
                <button onClick={() => this.props.history.goBack()}>GO BACK</button>
            </div>
        )
    }

}

class DetailView extends React.Component {
    render() { 
        if (!this.props.gameDetails) {
            return null;
        }
        const {name, cover:{image_id}, summary, storyline, franchise, genres, first_release_date} = this.props.gameDetails;
        return(
            <React.Fragment>
                <div className={style.name}> {name}</div>
                <img src={`https://images.igdb.com/igdb/image/upload/t_cover_big/${image_id}.jpg`} alt="cover" className={style.image}></img>
                <div className={style.tableRow}>
                    <div className={style.columnTitle}>Franchise</div>
                    <div className={style.columnContent}> {franchise?franchise.name:"---"}</div>
                </div>
                <div className={style.tableRow}>
                    <div className={style.columnTitle}>Genres</div>
                    <div className={style.columnContent}> {genres?(genres.map((item)=>{
                        return <span key={item.id}>{item.name}</span>
                    })):"---"}</div>
                </div>
                <div className={style.tableRow}>
                    <div className={style.columnTitle}>first release date</div>
                    <div className={style.columnContent}> {first_release_date}</div>
                </div>
                <div className={style.tableRow}>
                    <div className={style.columnTitle}>summary</div>
                    <div className={style.columnContent}>{summary}</div>
                </div>
                <div className={style.tableRow}>
                    <div className={style.columnTitle}>storyline</div>
                    <div className={style.columnContent}>{storyline}</div>
                </div>
            </React.Fragment>
        )
    }
}


export default withRouter(GameDetail);//GameDetail;//connect(mapStateToProps, {fetchGameDetail})(GameDetail)
