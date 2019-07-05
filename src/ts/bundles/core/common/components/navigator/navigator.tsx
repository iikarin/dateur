import * as React from 'react';
import "../../scss/navigator.scss";
import {NavigatorBrand} from "./navigator-brand";
import {NavigatorLink} from "./navigator-link";
import {
  Dashboard as DasboardIcon,
  Devices as DevicesIcon,
  Settings as SettingsIcon
} from '@material-ui/icons';
import {Notifications} from "./notifications";

export interface NavigatorProps {
}

export class Navigator extends React.Component<NavigatorProps> {
  static NAVIGATOR_LINKS = [
    {
      name: "Dashboard",
      icon: <DasboardIcon />,
      route: "/"
    },
    {
      name: "Devices",
      icon: <DevicesIcon />,
      route: "/devices"
    },
    {
      name: "Settings",
      icon: <SettingsIcon />,
      route: "/settings"
    }
  ];

  public render() {
    return (
      <nav className="navigator">
        <NavigatorBrand>
          Datuer
        </NavigatorBrand>
        <section className="navigator-links">
          {Navigator.NAVIGATOR_LINKS.map(link => (
            <NavigatorLink route={link.route} icon={link.icon}>{link.name}</NavigatorLink>
          ))}
        </section>
        <div className="nav-space" />
        <Notifications />
      </nav>
    )
  }
}