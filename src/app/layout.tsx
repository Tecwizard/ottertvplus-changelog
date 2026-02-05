import "./globals.css";

export const metadata = {
  title: "OtterTV+ Changelog",
  description: "Official changelog for the OtterTV+ Jellyfin server"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-deepBg text-white">
        <div className="max-w-4xl mx-auto px-5 py-10">{children}</div>

        <footer className="max-w-4xl mx-auto px-5 pb-12 pt-12 text-sm text-white/50">
          <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row gap-3 sm:gap-0 sm:justify-between">
            <p>© {new Date().getFullYear()} OtterTV+</p>
            <p className="text-white/40">
              Powered by Jellyfin • Built for GitHub Pages
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
