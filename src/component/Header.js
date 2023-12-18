import {BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import styles from './Index.css';
import yellowLogo from '../component/img/흰배경로고.png';

export default function Header( props ){

    return(<>
        <div className="headerContainer">
            <img src={yellowLogo} className="yellowLogo" />
        </div>
    </>)
}
