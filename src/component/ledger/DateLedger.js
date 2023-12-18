import React , { useState, useEffect } from 'react';


export default function DateLedger( props ){

    const [ modalState , setModalState ] = useState(false);

    let settingModal = (state) => {
        setModalState(state);
    }

    const [updateModal , setUpdateModal ] = useState(false);


    let updateLedgeModal = (state) =>{
        setUpdateModal(state);
    }

    let deleteLedgeModal = (state) =>{
        setUpdateModal(state)
    }

    return(<>
        <div className="ledgeContainer">
            { updateModal ?
            <>
            <div className="ledgeModalArea">
                <div className="ledgeModalTop">
                    <div className="modalTopTitle">
                        가계부 수정
                    </div>
                    <div onClick={ ()=>{ setUpdateModal(false); }} className="modalCancle">
                        취소
                    </div>
                </div>
                <table className="ledgeModalTable">
                    <tr className="ledgeModalTr">
                        <td style={{width : "30%"}}>날짜</td>
                        <td style={{width : "70%"}}><input className="dateSelect" type="date"/></td>
                    </tr>
                    <tr className="ledgeModalTr">
                        <td style={{width : "30%"}}>대분류</td>
                        <td style={{width : "70%"}}>
                            <select className="bigSelect">
                                 <option>수입</option>
                                 <option>식비</option>
                                 <option>교통비</option>
                                 <option>경조사</option>
                                 <option>마트,편의점</option>
                            </select>
                        </td>
                    </tr>
                    <tr className="ledgeModalTr">
                        <td style={{width : "30%"}}>소분류</td>
                        <td style={{width : "70%"}}>
                            <select className="smallSelect">
                                <option>아침</option>
                                <option>점심</option>
                                <option>저녁</option>
                                <option>야식</option>
                                <option>간식</option>
                            </select>
                        </td>
                    </tr>
                    <tr className="ledgeModalTr">
                        <td style={{width : "30%"}}>세부항목</td>
                        <td style={{width : "70%"}}><input className="detailLedge" type="text"/></td>
                    </tr>
                    <tr className="ledgeModalTr">
                        <td style={{width : "30%"}}>금액</td>
                        <td style={{width : "70%"}}><input className="moneyLedge" type="text"/></td>
                    </tr>
                </table>
                <div className="onRegistrationBox">
                    <button
                    className="updateLedger"
                    onClick={()=>updateLedgeModal(false)}
                    type="button">
                        수정
                    </button>
                    <button
                    className="deleteLedger"
                    onClick={()=>deleteLedgeModal(false)}
                    type="button">
                        삭제
                    </button>
                </div>
            </div>
            </> : <></>
            }

            { modalState ?
            <>
            <div className="ledgeModalArea">
                <div className="ledgeModalTop">
                    <div className="modalTopTitle">
                        가계부 등록
                    </div>
                    <div onClick={()=>settingModal(false)} className="modalCancle">
                        취소
                    </div>
                </div>
                <table className="ledgeModalTable">
                    <tr className="ledgeModalTr">
                        <td style={{width : "30%"}}>날짜</td>
                        <td style={{width : "70%"}}><input className="dateSelect" type="date"/></td>
                    </tr>
                    <tr className="ledgeModalTr">
                        <td style={{width : "30%"}}>대분류</td>
                        <td style={{width : "70%"}}>
                            <select className="bigSelect">
                                 <option>수입</option>
                                 <option>식비</option>
                                 <option>교통비</option>
                                 <option>경조사</option>
                                 <option>마트,편의점</option>
                            </select>
                        </td>
                    </tr>
                    <tr className="ledgeModalTr">
                        <td style={{width : "30%"}}>소분류</td>
                        <td style={{width : "70%"}}>
                            <select className="smallSelect">
                                <option>아침</option>
                                <option>점심</option>
                                <option>저녁</option>
                                <option>야식</option>
                                <option>간식</option>
                            </select>
                        </td>
                    </tr>
                    <tr className="ledgeModalTr">
                        <td style={{width : "30%"}}>세부항목</td>
                        <td style={{width : "70%"}}><input className="detailLedge" type="text"/></td>
                    </tr>
                    <tr className="ledgeModalTr">
                        <td style={{width : "30%"}}>금액</td>
                        <td style={{width : "70%"}}><input className="moneyLedge" type="text"/></td>
                    </tr>
                </table>
                <div className="onRegistrationBox">
                    <button
                    className="onRegistration"
                    onClick={()=>settingModal(false)}
                    type="button">
                        등록
                    </button>
                </div>
            </div>
            </> : <></>
            }

            <div onClick={()=>settingModal(true)} className="registrationButton">
                +
            </div>

            <table className="dateLedgeContent">
                <tr className="dateLedgeTr">
                    <td>2023-12-11</td>
                </tr>
                <tr onClick={()=>updateLedgeModal(true)} className="dateLedgeTr">
                    <td style={{width : '30%'}}>수입</td>
                    <td style={{width : '30%'}}>월급</td>
                    <td style={{width : '40%'}}>+2,000,000</td>
                </tr>
                <tr className="dateLedgeTr">
                    <td style={{width : '30%'}}>지출</td>
                    <td style={{width : '30%'}}>점심</td>
                    <td style={{width : '40%'}}>-10,000</td>
                </tr>
            </table>
            <table className="dateLedgeContent">
                <tr className="dateLedgeTr">
                    <td>2023-12-10</td>
                </tr>
                <tr className="dateLedgeTr">
                    <td style={{width : '30%'}}>지출</td>
                    <td style={{width : '30%'}}>점심</td>
                    <td style={{width : '40%'}}>-12,000</td>
                </tr>
                <tr className="dateLedgeTr">
                    <td style={{width : '30%'}}>지출</td>
                    <td style={{width : '30%'}}>택시비</td>
                    <td style={{width : '40%'}}>-6,000</td>
                </tr>
            </table>
            <table className="dateLedgeContent">
                <tr className="dateLedgeTr">
                    <td>2023-12-09</td>
                </tr>
                <tr className="dateLedgeTr">
                    <td style={{width : '30%'}}>지출</td>
                    <td style={{width : '30%'}}>커피</td>
                    <td style={{width : '40%'}}>-3,500</td>
                </tr>
                <tr className="dateLedgeTr">
                    <td style={{width : '30%'}}>지출</td>
                    <td style={{width : '30%'}}>손난로</td>
                    <td style={{width : '40%'}}>-1,000</td>
                </tr>
            </table>
            <table className="dateLedgeContent">
                <tr className="dateLedgeTr">
                    <td>2023-12-11</td>
                </tr>
                <tr className="dateLedgeTr">
                    <td style={{width : '30%'}}>수입</td>
                    <td style={{width : '30%'}}>월급</td>
                    <td style={{width : '40%'}}>+2,000,000</td>
                </tr>
                <tr className="dateLedgeTr">
                    <td style={{width : '30%'}}>지출</td>
                    <td style={{width : '30%'}}>점심</td>
                    <td style={{width : '40%'}}>-10,000</td>
                </tr>
            </table>
            <table className="dateLedgeContent">
                <tr className="dateLedgeTr">
                    <td>2023-12-10</td>
                </tr>
                <tr className="dateLedgeTr">
                    <td style={{width : '30%'}}>지출</td>
                    <td style={{width : '30%'}}>점심</td>
                    <td style={{width : '40%'}}>-12,000</td>
                </tr>
                <tr className="dateLedgeTr">
                    <td style={{width : '30%'}}>지출</td>
                    <td style={{width : '30%'}}>택시비</td>
                    <td style={{width : '40%'}}>-6,000</td>
                </tr>
            </table>
            <table className="dateLedgeContent">
                <tr className="dateLedgeTr">
                    <td>2023-12-09</td>
                </tr>
                <tr className="dateLedgeTr">
                    <td style={{width : '30%'}}>지출</td>
                    <td style={{width : '30%'}}>커피</td>
                    <td style={{width : '40%'}}>-3,500</td>
                </tr>
                <tr className="dateLedgeTr">
                    <td style={{width : '30%'}}>지출</td>
                    <td style={{width : '30%'}}>손난로</td>
                    <td style={{width : '40%'}}>-1,000</td>
                </tr>
            </table>
            <table className="dateLedgeContent">
                <tr className="dateLedgeTr">
                    <td>2023-12-11</td>
                </tr>
                <tr className="dateLedgeTr">
                    <td style={{width : '30%'}}>수입</td>
                    <td style={{width : '30%'}}>월급</td>
                    <td style={{width : '40%'}}>+2,000,000</td>
                </tr>
                <tr className="dateLedgeTr">
                    <td style={{width : '30%'}}>지출</td>
                    <td style={{width : '30%'}}>점심</td>
                    <td style={{width : '40%'}}>-10,000</td>
                </tr>
            </table>
            <table className="dateLedgeContent">
                <tr className="dateLedgeTr">
                    <td>2023-12-10</td>
                </tr>
                <tr className="dateLedgeTr">
                    <td style={{width : '30%'}}>지출</td>
                    <td style={{width : '30%'}}>점심</td>
                    <td style={{width : '40%'}}>-12,000</td>
                </tr>
                <tr className="dateLedgeTr">
                    <td style={{width : '30%'}}>지출</td>
                    <td style={{width : '30%'}}>택시비</td>
                    <td style={{width : '40%'}}>-6,000</td>
                </tr>
            </table>
            <table className="dateLedgeContent">
                <tr className="dateLedgeTr">
                    <td>2023-12-09</td>
                </tr>
                <tr className="dateLedgeTr">
                    <td style={{width : '30%'}}>지출</td>
                    <td style={{width : '30%'}}>커피</td>
                    <td style={{width : '40%'}}>-3,500</td>
                </tr>
                <tr className="dateLedgeTr">
                    <td style={{width : '30%'}}>지출</td>
                    <td style={{width : '30%'}}>손난로</td>
                    <td style={{width : '40%'}}>-1,000</td>
                </tr>
            </table>

        </div>
    </>)
}