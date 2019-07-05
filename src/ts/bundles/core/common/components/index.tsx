import * as React from 'react';
import {Navigator as NavigatorE} from './navigator/navigator';
import "../scss/index.scss";
import {Content} from "./content";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {Dashboard} from "../../dashboard/components/dashboard";

export class DatuerIndex extends React.Component<{}> {
  public render() {
    return (
      <Router>
        <main className="datuer-app">
          <NavigatorE />
          <Content>
            <Route path="/" exact component={Dashboard} />
          </Content>
        </main>
      </Router>
    )
  }
}