import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";

import "./tailwind.css";

// Fonts
import chromate from "./fonts/chromate/Chromate-Regular.ttf";
import worksans from "./fonts/work-sans/WorkSans-VariableFont_wght.ttf";
import worksansItalic from "./fonts/work-sans/WorkSans-Italic-VariableFont_wght.ttf";
export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: chromate,
    as: "font",
    type: "font/ttf",
  },
  {
    rel: "stylesheet",
    href: worksans,
    as: "font",
    type: "font/ttf",
  },
  {
    rel: "stylesheet",
    href: worksansItalic,
    as: "font",
    type: "font/ttf",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
