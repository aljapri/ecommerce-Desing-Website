import BackNavigation from "@/_components/BackNavigation";
import Footer from "@/_components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
        <BackNavigation/>
        <div className="mt-20"></div>
        {children}
        <Footer/>
    </div>
  );
}
