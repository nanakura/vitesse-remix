import {
  Links,
  Meta,
  LiveReload,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import Footer from "./components/Footer";

import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'



export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="font-sans dark:text-white dark:bg-hex-121212">
        <main className="font-sans px-4 py-10 text-center text-gray-700 dark:text-gray-200">
          {children}
          <Footer/>
        </main>
        <ScrollRestoration />
        <Scripts/>
        <LiveReload />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
