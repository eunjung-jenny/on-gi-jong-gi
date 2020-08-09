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
    ['목표 도달', 30],
    ['목표 미달', 60],
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
      <h2>목표수량 도달 비율</h2>
      <BillboardChart data={CHART_DATA} style={CHART_STYLE} />
    </PieChartBlock>
  );
};

export default PieChart;
