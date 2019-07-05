import * as React from 'react';
import "../../scss/notifications.scss";
import {observable} from "mobx";
import {observer} from "mobx-react";
import {NotificationProps, Notification} from "./notification";


@observer
export class Notifications extends React.Component<{}> {
  @observable notifications: Array<NotificationProps> = [{
    title: "Notification Test #1",
    description: "This is a notification description lmao.",
    time: new Date(),
    actions: [{
      label: "Action #1",
      callback: () => console.log("Action triggered.")
    }]
  }];

  public render() {
    return (
      <section className="notifications">
        <div className="title">Notifications</div>
        {this.notifications.map(notification => (
          <Notification {...notification} />
        ))}
      </section>
    )
  }
}