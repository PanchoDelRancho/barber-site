"use client"
import './globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import { CacheProvider } from '@chakra-ui/next-js'

export const metadata = {
  title: 'Barber',
  description: 'Hit the gwiddy',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <CacheProvider>
                    <ChakraProvider>
                        {children}
                    </ChakraProvider>
                </CacheProvider>
            </body>
        </html>
    )
}
