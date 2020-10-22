import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Button, Nav } from 'rsuite';

import 'rsuite/lib/styles/index.less';
import 'styles/index.less';

import Navigation from 'components/Navigation';

type Props = { as: URL; href: URL };

const NavLink = React.forwardRef<HTMLAnchorElement, Props>((props, ref) => {
  const { as, href, ...rest } = props;
  return (
    <Link href={href} as={as}>
      <a ref={ref} {...rest} />
    </Link>
  );
});

export default function Home() {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />
        <title>Create Next App</title>

        <link rel="manifest" href="/manifest.json" />
        <link
          href="/favicon-16x16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/favicon-32x32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="/apple-icon.png"></link>
        <meta name="theme-color" content="#428ac9" />
      </Head>

      <main>
        <Navigation />
        <div className="hero">
          <h1 className="title">Welcome to React Suite</h1>
          <p className="description">
            A suite of React components, intimate UI design, and a friendly
            development experience.
            <br />
          </p>
          <hr></hr>
          <Nav>
            <Nav.Item componentClass={NavLink} href="/page1">
              Page 1
            </Nav.Item>
            <Nav.Item componentClass={NavLink} href="/page2">
              Page 3
            </Nav.Item>
          </Nav>
          <hr></hr>
          <Button appearance="primary" href="https://rsuitejs.com/">
            Getting started
          </Button>
        </div>
      </main>

      <footer></footer>
    </div>
  );
}
