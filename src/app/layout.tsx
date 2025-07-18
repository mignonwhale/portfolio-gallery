/**
 * @file Layout component for the portfolio gallery application.
 */
import './globals.css';

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Portfolio Gallery</title>
        <meta name="description" content="mignonwhale's Portfolio Gallery" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
