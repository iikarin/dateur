import * as React from "react";
import {StatCard, StatParam} from "./stat-card";
import "../../scss/stat-cards.scss";

const statsToReport = [{
  title: "Connected Devices",
  dataParam: StatParam.CONNECTED_DEVICES,
  content: 3
},{
  title: "PC #1 Speed (GHz)",
  dataParam: StatParam.CONNECTED_DEVICES,
  content: 4.9
},{
  title: "PC #2 Speed (GHz)",
  dataParam: StatParam.CONNECTED_DEVICES,
  content: 2.1
}];

export const StatCards: React.FunctionComponent<{}> = ({  }): JSX.Element => (
  <section className="stat-cards">
    {statsToReport.map(stat => (
      <StatCard title={stat.title} dataParam={stat.dataParam} content={stat.content} />
    ))}
  </section>
);