import Ledger from './ledger/Ledger.js';
import Stats from './stats/Stats.js';
import Search from './search/Search.js';

import styles from './Index.css';
import Logo from '../component/img/누끼로고.png';

import React , { useState, useEffect } from 'react';

export default function Footer(props){

    let [ mainState , setMainState ] = useState(1);

    const selectMain = (num)=>{
        setMainState(num);
    }

    return(<>
        <div className="componentArea">
            {mainState === 1 && <Ledger /> }
            {mainState === 2 && <Stats /> }
            {mainState === 3 && <Search /> }
        </div>
        <div className="footerCategory">
            <div onClick = { ()=>selectMain(1)}>
                가계부
            </div>

            <span className={ mainState == 1 ? "ledgerPosition" :
                                mainState == 2 ? "statsPosition" :
                                 mainState == 3 ? "searchPosition" : ""}>
                <img src={Logo} className="logo" />
            </span>

            <div onClick = { ()=>selectMain(2)}>
                통계
            </div>
            <div onClick = { ()=>selectMain(3)}>
                검색
            </div>
        </div>
    </>)
}