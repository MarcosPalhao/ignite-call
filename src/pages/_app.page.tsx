import '../lib/dayjs'

import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"
import { globalstyles } from '../styles/global'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '../lib/react-query'

globalstyles()

export default function App({ Component, pageProps: { session, ...pageProps }, }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </QueryClientProvider>
  )
}
