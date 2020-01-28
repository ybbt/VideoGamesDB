import React from 'react';

import style from './style.module.css'

class Game extends React.Component {

    render() {
        const {cover:{image_id}, name} = this.props.game;
        return (
            <div className={style.game}>
                <img src={`https://images.igdb.com/igdb/image/upload/t_cover_small/${image_id}.jpg`} alt="cover"></img>
                <div>{name}</div>
            </div>
        );

    }
}

export default Game;