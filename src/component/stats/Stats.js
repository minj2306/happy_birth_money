import styles from './Stats.css';

import { PieChart } from '@mui/x-charts/PieChart';
import { BarChart } from '@mui/x-charts/BarChart';


export default function Stats (props){

    const chartSetting = {
      xAxis: [
        {
          label: '지출 (원)',
        },
      ],
      width: 300,
      height: 200,
    };
    const dataset = [
      {
        spen : 50000,
        category: '교통비',
      },
      {
        spen: 200000,
        category: '식비',
      },
      {
        spen: 40000,
        category: '미용',
      },
      {
        spen: 10000,
        category: '생활용품',
      },
      {
        spen: 100000,
        category: '경조사',
      }
    ];

    const valueFormatter = (value: number) => `${value}원`;

    return(<>
        <div className="statsContainer">
            <select className="statsSelect">
                <option>2023년 12월</option>
                <option>2023년 11월</option>
                <option>2023년 10월</option>
                <option>2023년 9월</option>
                <option>2023년 8월</option>
                <option>2023년 7월</option>
                <option>2023년 6월</option>
                <option>2023년 5월</option>
                <option>2023년 4월</option>
                <option>2023년 3월</option>
                <option>2023년 2월</option>
                <option>2023년 1월</option>
            </select>
            <div className="pieChartArea">
                <PieChart
                  series={[
                    {
                      data: [
                        { id: 0, value: 100000, label: '수입' },
                        { id: 1, value: 150000, label: '지출' },
                      ],
                    },
                  ]}
                  width={300}
                  height={150}
                />
            12월은 수입보다 지출이 많은 달입니다.<br/>
            지출을 줄여 수익을 관리하세요!
            </div>
            <div className="barChartArea">
            <BarChart
                  dataset={dataset}
                  yAxis={[{ scaleType: 'band', dataKey: 'category' }]}
                  series={[{ dataKey: 'spen', label: '항목별 지출액', valueFormatter }]}
                  layout="horizontal"
                  {...chartSetting}
            />
            12월 가장 많은 지출은 '식비' 입니다.
            </div>
        </div>
    </>)
}
