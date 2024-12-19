import HighlightedLink from "@/components/link";

type Props = {
  title: string;
  author: string;
  bookLink: string;
  authorLink?: string;
};

export default function Book({ title, author, bookLink, authorLink }: Props) {
  return (
    <div className="space-x-1">
      <HighlightedLink link={bookLink} highlight="text-red-400">
        {title}
      </HighlightedLink>
      <span> - </span>
      {authorLink ? (
        <HighlightedLink link={authorLink} highlight="text-red-200">
          {author}
        </HighlightedLink>
      ) : (
        <span>{author}</span>
      )}
    </div>
  );
}
