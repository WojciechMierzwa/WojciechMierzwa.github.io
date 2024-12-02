import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import '@/globals.css';


export default function Layout({ children }) {
  return (
    <html lang="pl">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>My Next.js App</title>
      </head>
      <body style={{ margin: 0, fontFamily: 'Arial, sans-serif' }}>
        <Navbar />
        <main style={{ padding: '20px' }}>
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
