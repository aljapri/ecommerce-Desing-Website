// import BackNavigation from "@/_components/BackNavigation";
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
