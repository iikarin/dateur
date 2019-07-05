import * as React from 'react';
import "../../scss/notification.scss";
import {Button} from "@material-ui/core";

export interface NotificationProps {
  title: string;
  description: string;
  time: Date;
  actions?: Array<{
    label: string;
    callback: Function;
  }>;
}

export class Notification extends React.Component<NotificationProps> {
  public render() {
    return (
      <section className="notification">
        <header className="notification-header">
          <div className="notification-title">{this.props.title}</div>
          <time className="time">{this.props.time.toLocaleString()}</time>
        </header>
        <div className="notification-description">{this.props.description}</div>
        {this.props.actions && (
          <section className="notification-actions">
            {this.props.actions.map(action => <Button variant="contained" size="small" onClick={() => action.callback()}>{action.label}</Button>)}
          </section>
        )}
      </section>
    )
  }
}