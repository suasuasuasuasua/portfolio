import Image from "next/image";
import Link from "next/link";

// Define the header elements as well as the root path and label
const headers = {
  home: { root: "/", label: "Home" },
  blog: { root: "/blog", label: "Blog" },
  portfolio: { root: "/portfolio", label: "Portfolio" },
  tech: { root: "/tech", label: "Tech" },
  about: { root: "/about", label: "About" },
};

// The size of the icon
const imageSize = 28;

export default function Header() {
  return (
    <header>
      <nav className="mx-auto flex items-center justify-between my-4 px-4">
        {/* Header Icon */}
        <div className="flex lg:flex-1">
          <Image
            src="/penguin.png"
            alt="fat linux penguin"
            width={imageSize}
            height={imageSize}
            priority
          />
        </div>

        {/* List of Headers */}
        <ul className="flex flex-row lg:space-x-12 sm:space-x-8 space-x-4">
          {/* Map each of the header entries to a link */}
          {Object.entries(headers).map(([key, value]) => (
            <li key={key}>
              <Link
                href={`${value.root}`}
                className="text-sm font-sans hover:underline hover:underline-offset-4"
              >
                {value.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
