import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="bg-onDarkSurfaceContainer p-4 sticky top-0 drop-shadow-xl z-10 flex justify-center">
        
        <div className="prose prose-xl">

            <h1 className="text-3xl font-bold text-white mb-2 md:mb-0">

              <Link href="/" className="text-white/90 no-underline hover:text-white">
                Full-Stack Tutorials
              </Link>

            </h1>

        </div>

    </nav>
  )
}
