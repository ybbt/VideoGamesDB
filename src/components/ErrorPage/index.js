import React from 'react';
import errorImg from './radioactive.png'

export default class ErrorPage extends React.Component {
    render() {
        return (
            <div>
                <img src={errorImg} alt="Error"/>
                <div>
                    pages do not exist
                </div>
            </div>
        )
    }
}
