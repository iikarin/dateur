import * as React from 'react';
import "../../scss/navigator-brand.scss";

export interface NavigatorBrandProps {
  children: any;
}

export const NavigatorBrand: React.FunctionComponent<NavigatorBrandProps> = ({ children }): JSX.Element => (
  <div className="navigator-brand">
    {children}
  </div>
);