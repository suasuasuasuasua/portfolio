import Link from "next/link";

export default function Header() {
  // Define the header elements as well as the root path and label
  const headers = {
    home: { root: "/", label: "Home" },
    blog: { root: "/blog", label: "Blog" },
    portfolio: { root: "/portfolio", label: "Portfolio" },
    tech: { root: "/tech", label: "Tech Stack" },
    about: { root: "/about", label: "About Me" },
  };

  return (
    <header>
      <nav className="flex justify-center">
        {/* Flip the nav list so that it's horizontal */}
        <ul className="flex space-x-6 list-none text-lg">
          {/* Map each of the header entries to a link */}
          {Object.entries(headers).map(([key, value]) => (
            <li key={key}>
              <Link href={`${value.root}`}>{value.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
