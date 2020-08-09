import React from 'react';
import BillboardChart from 'react-billboardjs';
import 'react-billboardjs/lib/billboard.css';
import styled from 'styled-components';

const LineChartBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

const CHART_DATA = {
  x: 'x',
  columns: [
    [
      'x',
      '2020-01-01',
      '2020-01-02',
      '2020-01-03',
      '2020-01-04',
      '2020-01-05',
      '2020-01-06',
      '2020-01-07',
      '2020-01-08',
      '2020-01-09',
      '2020-01-10',
      '2020-01-11',
      '2020-01-12',
      '2020-01-13',
      '2020-01-14',
      '2020-01-15',
    ],
    // ['items', 30, 20, 50, 40, 60, 50, 30, 20, 50, 40, 60, 50],
    [
      '신라면',
      200,
      130,
      90,
      120,
      80,
      110,
      130,
      210,
      160,
      400,
      250,
      210,
      200,
      130,
      90,
    ],
    [
      '안성탕면',
      300,
      200,
      160,
      400,
      250,
      250,
      200,
      130,
      90,
      240,
      130,
      220,
      140,
      130,
      300,
    ],
  ],
  type: 'line',
};

const CHART_STYLE = {
  height: '400px',
  width: '800px',
};

const CHART_AXIS = {
  x: {
    type: 'timeseries',
    tick: {
      count: 10,
      format: '%Y-%m-%d',
    },
  },
};

const LineChart = () => {
  return (
    <LineChartBlock>
      {/* <h2>물품별 기부신청 수</h2> */}
      <h2>요청별 기부 횟수</h2>
      <BillboardChart data={CHART_DATA} style={CHART_STYLE} axis={CHART_AXIS} />
    </LineChartBlock>
  );
};

export default LineChart;
