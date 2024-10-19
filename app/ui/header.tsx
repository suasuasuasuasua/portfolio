import Image from "next/image";
import Link from "next/link";

// Define the header elements as well as the root path and label
const headers = {
  home: { root: "/", label: "Home" },
  blog: { root: "/blog", label: "Blog" },
  portfolio: { root: "/portfolio", label: "Portfolio" },
  tech: { root: "/tech", label: "Tech Stack" },
  about: { root: "/about", label: "About Me" },
};

const imageSize = 30;

export default function Header() {
  return (
    <header>
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        {/* Header Icon */}
        <div className="flex lg:flex-1">
          <Image
            src="/penguin.png"
            alt="fat linux penguin"
            width={imageSize}
            height={imageSize}
            priority
            className="h-8 w-auto -m-1.5 p-1.5"
          />
        </div>

        {/* List of Headers */}
        <ul className="flex flex-row space-x-10">
          {/* Map each of the header entries to a link */}
          {Object.entries(headers).map(([key, value]) => (
            <li key={key}>
              <Link
                href={`${value.root}`}
                className="text-sm font-sans leading-6"
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
