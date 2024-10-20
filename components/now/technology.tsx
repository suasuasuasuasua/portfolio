import Link from "next/link";

type Props = {
  name: string;
  description: string;
  link: string;
};

export default function Technology({ name, description, link }: Props) {
  return (
    <div className="space-x-1">
      <Link
        href={link}
        className="text-blue-200 underline underline-offset-2"
        target="_blank"
        rel="noopener noreferrer"
      >
        {name}
      </Link>
      <span>
        - <span className="italic">{description}</span>{" "}
      </span>
    </div>
  );
}
