// app/layout.tsx
import BootstrapClient from "@/components/bootstrap-client";
import "bootstrap/dist/css/bootstrap.min.css";

export const metadata = {
  title: "My Bootstrap App",
  icons: {
    icon: "/bootstrap.svg",
    shortcut: "/bootstrap.svg",
    apple: "/bootstrap.svg",
  },
  description: "Created with Next.js and Bootstrap",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <BootstrapClient />
        {children}
      </body>
    </html>
  );
}
