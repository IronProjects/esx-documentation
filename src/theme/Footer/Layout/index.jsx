import React from 'react';
import clsx from 'clsx';

export default function FooterLayout({ style, links, logo, copyright }) {
  return (
    <footer
      className={clsx('footer', {
        'footer--dark': style === 'dark',
      })}>
      <div className="container">
        {logo && <div className="margin-bottom--sm">{logo}</div>}
        <div className="footer__row">
          <div className="links">{links}</div>
        </div>
        {copyright && <div className="footer__bottom text--center">{copyright}</div>}
      </div>
    </footer>
  );
}
