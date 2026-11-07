import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "ShikhoGrammer | Learn English Grammar",
  description: "Learn English grammar easily: Tense, Active to Passive, Narration, Articles and more.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="container">{children}</main>
        <footer className="footer">© {new Date().getFullYear()} ShikhoGrammer. Learn. Practice. Improve.</footer>
      </body>
    </html>
  );
}
