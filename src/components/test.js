import React from 'react';
//import styles from '../scss/test.scss';

const developing = process.env.NODE_ENV === 'server-dev';
const picture = require('../../assets/img/picture.png');

export default class App extends React.Component {
    render() {
        return (
            <div>
                <img src={picture} />
            </div>
        );
    }
}