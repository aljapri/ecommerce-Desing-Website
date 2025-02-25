// import BackNavigation from "@/_components/BackNavigation";
import Footer from "@/_components/Footer";
import Navigation from "@/_components/Navigator";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
        {/* <Navigation/> */}
        <div className="mt-20"></div>
        {children}
        {/* <Footer/> */}
    </div>
  );
}
