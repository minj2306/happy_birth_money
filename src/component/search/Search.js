import SearchImg from '../img/search.png';
import styles from './Search.css';

export default function Search(props){
    return(<>
        <div className="searchContainer">
            <div className="searchArea">
                <span>
                    <img className="searchImg" src={SearchImg}/>
                </span>
                <input className="searchInput" type="text"/>
            </div>
            <div className="searchTopContent">
                <span className="searchKeyword">아메리카노</span>에 사용한 금액은 총 30,000원 입니다.
            </div>
            <div>
                <table className="searchTable">
                    <tr className="searchTr">
                        <td className="searchKeyword">아메리카노</td>
                        <td className="searchTd">2023-12-12</td>
                        <td className="searchTd">3,000원</td>
                    </tr>
                    <tr className="searchTr">
                        <td className="searchKeyword">아메리카노</td>
                        <td className="searchTd">2023-12-11</td>
                        <td className="searchTd">3,000원</td>
                    </tr>
                    <tr className="searchTr">
                        <td className="searchKeyword">아메리카노</td>
                        <td className="searchTd">2023-12-10</td>
                        <td className="searchTd">3,000원</td>
                    </tr>
                    <tr className="searchTr">
                        <td className="searchKeyword">아메리카노</td>
                        <td className="searchTd">2023-12-09</td>
                        <td className="searchTd">3,000원</td>
                    </tr>
                    <tr className="searchTr">
                        <td className="searchKeyword">아메리카노</td>
                        <td className="searchTd">2023-12-08</td>
                        <td className="searchTd">3,000원</td>
                    </tr>
                    <tr className="searchTr">
                        <td className="searchKeyword">아메리카노</td>
                        <td className="searchTd">2023-12-07</td>
                        <td className="searchTd">3,000원</td>
                    </tr>
                    <tr className="searchTr">
                        <td className="searchKeyword">아메리카노</td>
                        <td className="searchTd">2023-12-06</td>
                        <td className="searchTd">3,000원</td>
                    </tr>
                    <tr className="searchTr">
                        <td className="searchKeyword">아메리카노</td>
                        <td className="searchTd">2023-12-05</td>
                        <td className="searchTd">3,000원</td>
                    </tr>
                    <tr className="searchTr">
                        <td className="searchKeyword">아메리카노</td>
                        <td className="searchTd">2023-12-04</td>
                        <td className="searchTd">3,000원</td>
                    </tr>
                    <tr className="searchTr">
                        <td className="searchKeyword">아메리카노</td>
                        <td className="searchTd">2023-12-03</td>
                        <td className="searchTd">3,000원</td>
                    </tr>

                </table>
            </div>
        </div>
    </>)
}