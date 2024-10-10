import Header from "@/components/header";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body>
            <div>
                <Header />
          {children}
          </div>
        </body>
      </html>
    );
  }