import * as React from 'react';
import {RouteComponentProps} from "react-router";
import {Page} from "../../common/components/page";
import {DashboardBanner} from "./banner/dashboard-banner";

export class Dashboard extends React.Component<RouteComponentProps> {
  public render() {
    return (
      <Page title="Dashboard">
        <DashboardBanner />
      </Page>
    );
  }
}