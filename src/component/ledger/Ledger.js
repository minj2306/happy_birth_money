import React , { useState, useEffect } from 'react';
import styles from './Ledger.css';

import DateLedger from './DateLedger.js';
import WeekLedger from './WeekLedger.js';
import MonthLedger from './MonthLedger.js';
import MemoLedger from './MemoLedger.js';

export default function Ledger (props){

    const [ ledgerState , setLedgerState ] = useState(1);

    let selectLedger = (num) => {
        setLedgerState(num);
    }

    return(<>
        <div className="ledgerCategoryBox">
            <div className ={`ledgerCategory ${ledgerState == 1 ? 'choiceLedger' : ''}`}
             onClick={ () => selectLedger(1) }>
                일일
            </div>
            <div className ={`ledgerCategory ${ledgerState == 2 ? 'choiceLedger' : ''}`}
             onClick={()=>selectLedger(2)}>
                주간
            </div>
            <div className ={`ledgerCategory ${ledgerState == 3 ? 'choiceLedger' : ''}`}
            onClick={()=>selectLedger(3)}>
                월별
            </div>
            <div className ={`ledgerCategory ${ledgerState == 4 ? 'choiceLedger' : ''}`}
             onClick={()=>selectLedger(4)}>
                메모
            </div>
        </div>
        <div>
            { ledgerState === 1 && <DateLedger /> }
            { ledgerState === 2 && <WeekLedger /> }
            { ledgerState === 3 && <MonthLedger /> }
            { ledgerState === 4 && <MemoLedger /> }
        </div>
    </>)
}