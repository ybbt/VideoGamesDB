import React from 'react';
import errorImg from './skull.png';

export default class ErrorIndicator extends React.Component {
    render() {
        return (
            <div>
                <img src={errorImg} alt="Error"/>
                <div>
                    something has gone terribly wrong
                </div>
            </div>
        )
    }
}
