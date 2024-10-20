import Link from "next/link";

type Props = {
  title: string;
  artist: string;
  link: string;
};

export default function Album({ title, artist, link }: Props) {
  return (
    <div className="space-x-1">
      <Link
        href={link}
        className="text-blue-200 underline underline-offset-2"
        target="_blank"
        rel="noopener noreferrer"
      >
        {title}
      </Link>
      <span> - {artist} </span>
    </div>
  );
}
