import Link from "next/link";
import React from "react";

type Props = {
  children: React.ReactNode;
  link: string;
  highlight: string;
};

export default function HighlightedLink({
  children,
  link,
  highlight,
  ...props
}: Props) {
  return (
    <Link
      href={link}
      className={`${highlight} underline underline-offset-2 ${props}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </Link>
  );
}
