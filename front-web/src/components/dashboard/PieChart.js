import React from 'react';
import BillboardChart from 'react-billboardjs';
import 'react-billboardjs/lib/billboard.css';
import styled from 'styled-components';

const PieChartBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

const CHART_DATA = {
  columns: [
    ['data1', 30],
    ['data2', 120],
  ],
  type: 'pie',
};

const CHART_STYLE = {
  height: '400px',
  width: '400px',
};

const PieChart = () => {
  return (
    <PieChartBlock>
      <h1>chart2</h1>
      <BillboardChart data={CHART_DATA} style={CHART_STYLE} />
    </PieChartBlock>
  );
};

export default PieChart;
