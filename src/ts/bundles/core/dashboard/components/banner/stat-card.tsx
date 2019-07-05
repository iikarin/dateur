import * as React from 'react';
import {Paper} from "@material-ui/core";
import "../../scss/stat-card.scss";

export enum StatParam {
  CONNECTED_DEVICES
}

export interface StatCardProps {
  title: string;
  dataParam: StatParam
  content: any;
}

export class StatCard extends React.Component<StatCardProps> {
  public render() {
    return (
      <Paper elevation={12} className="stat-card">
        <div className="title">{this.props.title}</div>
        <section className="card-content">
          {this.props.content}
        </section>
      </Paper>
    )
  }
}