import React from 'react';
import { connect } from 'react-redux';

import  { fetchGamesList, saveActivePage, saveSearchString } from '../../redux/actions';

import Main from '../Main';
import ErrorIndicator from '../ErrorIndicator';


export class MainContainer extends React.Component {

    
    state = {
        paginationVisible: false,
        // redirectSearch: false,
    };
    
    // constructor(props) {
    //     super(props);
    //     // Не викликайте this.setState() тут!
    //     this.state = { redirectSearch: false };
    // };

    componentDidMount() {
        console.log("didMount")
        
        const paginationVisible = this.setPaginationVisible(this.props.gamesList.length);
        this.setState({
            paginationVisible: paginationVisible,
        }) 
        if (this.props.gamesList.length>0) {
            return;
        }

        const activePage = this.props.match.params.page;
        if (activePage) {
            this.props.saveActivePage(activePage);
        }
        
        const searchParams = new URLSearchParams(this.props.location.search);
        
        const search = searchParams.get("search");
        
        if (search) {
            this.props.saveSearchString(search);
            this.props.fetchGamesList({searchString: search});
        }else{
            this.props.fetchGamesList();
        }
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("didUpdate")

        if (prevProps.match.url !== "/" && this.props.match.url  === "/") {
            this.props.fetchGamesList();
        }

        let activePage = 1;
        if (this.props.match.params.page) {
            activePage = this.props.match.params.page;
        }
        this.props.saveActivePage(activePage);

        const paginationVisible = this.setPaginationVisible(this.props.gamesList.length);

        if(prevState.paginationVisible !== paginationVisible){
            this.setState({
                paginationVisible: paginationVisible,
            })
        }
        

    }

    setPaginationVisible(GameListLength){
        let paginationVisible = true;
        if(GameListLength === 1){
            paginationVisible = false;
        } 
        return paginationVisible;
    }


    render() {
        if(this.props.gamesListRequestFail){
            return <ErrorIndicator/>
        }
        const {gamesListLoading} = this.props;
        const {paginationVisible} = this.state;
        return (
            <Main paginationVisible={paginationVisible} loading={gamesListLoading}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        gamesList: state.gamesReducer.gamesList,
        gamesListRequestFail: state.gamesReducer.gamesListRequestFail,
        gamesListLoading: state.gamesReducer.gamesListLoading,
        searchString: state.gamesReducer.searchString,
    };
}

export default connect(mapStateToProps, {fetchGamesList, saveActivePage, saveSearchString})(MainContainer)

