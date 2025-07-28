import Link from "next/link"
import Image from "next/image"
import { ThemeSwitch } from "./theme-switch"
import { metaData } from "../config"

const navItems = {
  "/blog": { name: "blogs" },
  "/proof-of-work": { name: "projects" },
}

export function Navbar() {
  return (
    <nav className="lg:mb-6 md:mb-6 mb-3 py-2">
      <div className="modern-nav rounded-xl px-3 py-3 backdrop-blur-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="logo-container">
              {/* Light theme logo */}
              <Image
                src="/logo-dark.png"
                alt={metaData.title}
                width={180}
                height={36}
                className="logo-image"
                priority
              />
              {/* Dark theme logo */}
              <Image
                src="/logo-light.png"
                alt={metaData.title}
                width={180}
                height={36}
                className="logo-image"
                priority
              />
            </Link>
          </div>
          <div className="flex flex-row gap-2 mt-4 md:mt-0 md:ml-auto items-center">
            {Object.entries(navItems).map(([path, { name }]) => (
              <Link
                key={path}
                href={path}
                className="nav-item transition-all flex align-middle relative px-3 py-1.5 rounded-lg text-sm font-medium"
              >
                {name}
              </Link>
            ))}
            <div className="ml-2">
              <ThemeSwitch />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}