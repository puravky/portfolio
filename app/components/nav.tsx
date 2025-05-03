import Link from "next/link";
import { ThemeSwitch } from "./theme-switch";
import { metaData } from "../config";
import { FaCircle } from "react-icons/fa6";

const navItems = {
  "/blog": { name: "blog" },
  "/proof-of-work": { name: "proof-of-work" },
};

export function Navbar() {
  return (
    <nav className="lg:mb-12 md:mb-12 mb-4 py-5">
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-3xl gap-3 font-semibold flex-none lg:flex tracking-tight items-center justify-center ">
            {metaData.title}
            <p
              className="flex mt-4 lg:mt-1 text-center items-center justify-center border dark:border-gray-500 rounded-xl px-1 gap-2 text-sm tracking-tighter text-gray-400 cursor-text"
            >
              open for work
              <FaCircle className="text-green-500 animate-pulse drop-shadow-[0_0_6px_rgba(34,197,94,0.8)] w-3 h-3" />

            </p>

          </Link>
        </div>
        <div className="flex flex-row gap-4 mt-6 md:mt-0 md:ml-auto items-center">
          {Object.entries(navItems).map(([path, { name }]) => (
            <Link
              key={path}
              href={path}
              className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative"
            >
              {name}
            </Link>
          ))}
          <ThemeSwitch />
        </div>
      </div>
    </nav>
  );
}
