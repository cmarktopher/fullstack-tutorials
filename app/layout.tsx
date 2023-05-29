import './globals.css'
import Navbar from './components/Navbar'
import { ApplicationImage } from './components/ApplicationImage'

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
      <body className="dark:bg-slate-800">
        <Navbar/>
        <ApplicationImage/>
        {children}
        </body>
    </html>
  )
}
