import React , { useState, useEffect } from 'react';

export default function MemoLedger(props){

    const [ memoValue , setMemoValue ] = useState({ memo : "커피소비 줄이기" });

    let changeMemo = (e) => {

        let memoInput = e.target.value;

        setMemoValue( { ...memoValue , memo : memoInput } );
    }

    return(<>
        <div className="ledgeContainer">
            <div className="registrationButton">
                +
            </div>
            <div className="memoArea">
                <div className="memoBox">
                    <div className="memoDateArea">
                        2023-12-13
                    </div>
                    <div className="memoContentArea">
                        <input
                        className="memoInput"
                        onChange={ changeMemo }
                        type="text"
                        value={memoValue.memo} />
                    </div>
                </div>
                <div className="memoBox">
                    <div className="memoDateArea">
                        2023-12-13
                    </div>
                    <div className="memoContentArea">
                        <input
                        className="memoInput"
                        type="text"
                        value={ memoValue.memo}/>
                    </div>
                </div>

            </div>
        </div>
    </>)
}