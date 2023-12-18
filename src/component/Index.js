import {BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import React , { useState, useEffect } from 'react';

import Main from './Main.js';
import Header from './Header.js';
import Footer from './Footer.js';
import styles from './Index.css';

export default function Index (props){

    return(<>
        <div className="webContainer">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/main' element ={<Main />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    </>)
}