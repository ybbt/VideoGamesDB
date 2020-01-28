import React from 'react';
import { connect } from 'react-redux';

import { fetchGamesList, saveSearchString } from '../../redux/actions';

import Search from '../Search';

export class SearchContainer extends React.Component {
    
    state = { 
        input: "" 
    };

    setInputSearch = (input)=>{
        this.setState({ input });
    }

    handleSearch = () => {
        const searchParams = new URLSearchParams();
        searchParams.set("search", this.state.input);
        const searchString = searchParams.toString();
        this.props.saveSearchString(searchString);
        
        this.props.fetchGamesList({searchString: this.state.input});
    };

    keyPressed = (event) => {
        if (event.key === "Enter") {
            this.handleSearch();
        }
      }

    render() {
        return (
            <Search handleSearch={this.handleSearch} keyPressed={this.keyPressed} updateInput={this.setInputSearch} input={this.state.input}/>
        )
    }
}

export default connect(null, {fetchGamesList, saveSearchString})(SearchContainer)
