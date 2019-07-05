import * as React from 'react';
import "../../scss/navigator-link.scss";
import {Link} from "react-router-dom";

export interface NavigatorLinkProps {
  route: string;
  icon?: any;
  children: any;
}

export const NavigatorLink: React.FunctionComponent<NavigatorLinkProps> = ({ route, icon, children }): JSX.Element => (
  <Link className="navigator-link" to={route}>
    {icon && React.cloneElement(icon, {style: { fontSize: 'inherit' }, className: "link-icon"})}
    {children}
  </Link>
);