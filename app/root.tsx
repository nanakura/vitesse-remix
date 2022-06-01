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
import Footer from "./components/Footer";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
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
        <Scripts as={
          `(function() {
            const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
            const setting = localStorage.getItem('usehooks-ts-dark-mode')
              ? localStorage.getItem('usehooks-ts-dark-mode') === 'true'
                ? 'dark'
                : 'light'
              : 'auto'
      
            if (setting === 'dark' || (prefersDark && setting !== 'light'))
              document.documentElement.classList.toggle('dark', true)
          })()`
        }/>
        <LiveReload />
      </body>
    </html>
  );
}
