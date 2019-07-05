import * as React from 'react';
import "../scss/content.scss";

export interface ContentProps {
  children: any;
}

export const Content: React.FunctionComponent<ContentProps> = ({ children }): JSX.Element => (
  <main className="content">
    {children}
  </main>
);