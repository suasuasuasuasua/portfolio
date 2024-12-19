import HighlightedLink from "@/components/link";

type Props = {
  title: string;
  artist: string;
  albumLink: string;
  artistLink?: string;
};

export default function Album({ title, artist, albumLink, artistLink }: Props) {
  return (
    <div className="space-x-1">
      <HighlightedLink link={albumLink} highlight="text-blue-400">
        {title}
      </HighlightedLink>
      <span> - </span>
      {artistLink ? (
        <HighlightedLink link={artistLink} highlight="text-blue-200">
          {artist}
        </HighlightedLink>
      ) : (
        <span>{artist}</span>
      )}
    </div>
  );
}
