import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './NotFound.css';


export default class NotFound extends Component {
    render() {
        return(
            <div className="NotFound">
                <h1>404</h1>
                <h3>Sayfa bulunamadi</h3>
                <p>Ana sayfaya gitmek icin <Link to="/">tiklayin.</Link></p>
            </div>
        );
    }
}