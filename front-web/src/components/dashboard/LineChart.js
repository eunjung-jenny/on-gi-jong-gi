import React from 'react';
import BillboardChart from 'react-billboardjs';
import 'react-billboardjs/lib/billboard.css';
import styled from 'styled-components';

const LineChartBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

const CHART_DATA = {
  columns: [
    ['items', 30, 20, 50, 40, 60, 50],
    ['data2', 200, 130, 90, 240, 130, 220],
    ['data3', 300, 200, 160, 400, 250, 250],
  ],
  type: 'line',
};

const CHART_STYLE = {
  height: '400px',
  width: '800px',
};

const LineChart = () => {
  return (
    <LineChartBlock>
      <h1>chart1</h1>
      <BillboardChart data={CHART_DATA} style={CHART_STYLE} />
    </LineChartBlock>
  );
};

export default LineChart;
