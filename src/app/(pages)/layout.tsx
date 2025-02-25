"use client"
import { QueryClient, QueryClientProvider } from 'react-query';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
