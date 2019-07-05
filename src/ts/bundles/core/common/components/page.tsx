import * as React from 'react';
import "../scss/page.scss";

export interface PageProps {
  children: any;
  title?: any;
}

export const Page: React.FunctionComponent<PageProps> = ({ title, children }): JSX.Element => (
  <section className="page">
    {title && (<header className="page-title">
      {title}
    </header>)}
    <main className="page-content">
      {children}
    </main>
  </section>
);