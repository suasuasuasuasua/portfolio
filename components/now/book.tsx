import HighlightedLink from "@/components/link";

type Props = {
  title: string;
  author: string;
  link: string;
};

export default function Book({ title, author, link: link }: Props) {
  return (
    <div className="space-x-1">
      <HighlightedLink link={link} highlight="text-red-400">
        {title}
      </HighlightedLink>
      <span>- {author}</span>
    </div>
  );
}
