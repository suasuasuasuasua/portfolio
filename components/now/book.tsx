import Link from "next/link";

type Props = {
  title: string;
  author: string;
  link: string;
};

export default function Book({ title, author, link: link }: Props) {
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
      <span>- {author}</span>
    </div>
  );
}
