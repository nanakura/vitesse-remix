import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import type { LinksFunction } from "@remix-run/node"; // or "@remix-run/cloudflare"

import styles from "./styles/uno.css";
import mainstyles from "./styles/main.css";
import Footer from "./components/Footer";
import favicon from '../public/favicon.svg';

export const links: LinksFunction = () => {
  return [
    { rel: "icon", href: favicon, type: "image/svg+xml" },
    { rel: "stylesheet", href: styles },
    { rel: "stylesheet", href: mainstyles }
  ];
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});


export default function App() {
  
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="font-sans dark:text-white dark:bg-hex-121212">
        <main className="font-sans px-4 py-10 text-center text-gray-700 dark:text-gray-200">
          <Outlet />
          <Footer/>
        </main>
        <ScrollRestoration />
        <Scripts/>
        <LiveReload />
      </body>
    </html>
  );
}
