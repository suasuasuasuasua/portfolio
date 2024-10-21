"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CiCircleChevUp } from "react-icons/ci";

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
  const [activeHeader, setActiveHeader] = useState(headers.home.root);

  return (
    <header>
      <nav className="mx-auto my-4 flex items-center justify-between px-4">
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
        <ul className="flex flex-row space-x-4 sm:space-x-8 lg:space-x-12">
          {/* Map each of the header entries to a link */}
          {Object.entries(headers).map(([key, value]) => (
            <li key={key}>
              <div className="flex flex-col items-center">
                <Link
                  href={`${value.root}`}
                  onClick={() => {
                    setActiveHeader(value.root);
                  }}
                  className="hover:underline hover:underline-offset-4"
                >
                  {value.label}
                </Link>
                <CiCircleChevUp
                  className={`${activeHeader === value.root ? "block" : "hidden"}`}
                />
              </div>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
