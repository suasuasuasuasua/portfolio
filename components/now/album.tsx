import HighlightedLink from "@/components/link";

type Props = {
  title: string;
  artist: string;
  link: string;
};

export default function Album({ title, artist, link }: Props) {
  return (
    <div className="space-x-1">
      <HighlightedLink link={link} highlight="text-blue-400">
        {title}
      </HighlightedLink>
      <span> - {artist} </span>
    </div>
  );
}
