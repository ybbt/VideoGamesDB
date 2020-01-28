import React from 'react';

import style from './style.module.css'

class Search extends React.Component {

    

    render() {
        const {handleSearch, updateInput, input, keyPressed} = this.props;
        return (
            <div className={style.search}>
                <input
                    placeholder="Search Game"
                    onChange={e => updateInput(e.target.value)}
                    onKeyPress={keyPressed}
                    value={input}
                />
                <button className="addTodo" onClick={handleSearch}>
                    Search
                </button>
            </div>
        );

    }
}

export default Search; 