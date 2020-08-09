import React from 'react';
import styled from 'styled-components';
import LineChart from './LineChart';
import PieChart from './PieChart';
import Main from '../common/Main';

const DashboardViewerBlock = styled(Main)`
  margin-top: 3rem;
  > div {
    display: flex;
    justify-content: space-between;
  }
`;

const DashboardViewer = () => {
  return (
    <DashboardViewerBlock>
      <h1>대시보드</h1>
      <div>
        <LineChart />
        <PieChart />
      </div>
    </DashboardViewerBlock>
  );
};

export default DashboardViewer;
