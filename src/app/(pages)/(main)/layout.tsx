import Footer from "@/_components/Footer";
import Navigation from "@/_components/Navigator";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
        <Navigation/>
        {children}
        <Footer/>
    </div>
  );
}
