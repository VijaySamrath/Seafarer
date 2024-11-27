// app/layout.js
import "./globals.css";

export const metadata = {
  title: "Seafarer Job Portal",
  description: "Connecting seafarers, recruiters, and training agencies.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="p-4 bg-gray-800 text-white">
        </header>
        <main>{children}</main>
        <footer className="p-4 bg-gray-800 text-white text-center">
          © 2024 Seafarer Job Portal
        </footer>
      </body>
    </html>
  );
}
