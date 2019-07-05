import * as React from 'react';
import "../../scss/dashboard-banner.scss";
import {StatCards} from "./stat-cards";

export const DashboardBanner: React.FunctionComponent<{}> = ({  }): JSX.Element => (
  <header className="dashboard-banner">
    <StatCards />
  </header>
);