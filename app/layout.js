import Navbar from '@/components/Navbar'
import './globals.css'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Car Hub',
  description: 'Discover the best car in the world.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='relative scroll-smooth'>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
