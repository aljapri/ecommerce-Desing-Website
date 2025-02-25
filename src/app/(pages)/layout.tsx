"use client"
import { QueryClient, QueryClientProvider } from 'react-query';
//hello
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const queryClient = new QueryClient();

  return (
    <div className='overflow-hidden'>
            <QueryClientProvider client={queryClient}>

        {children}
        </QueryClientProvider>

    </div>
  );
}
