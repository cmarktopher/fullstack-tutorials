import './globals.css'
import Navbar from './components/Navbar'

export const metadata = {
  title: 'Full-Stack Tutorials',
  description: 'Created by Mark Enriquez',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="dark:bg-darkBackground">
        <Navbar/>
        {children}
        </body>
    </html>
  )
}
