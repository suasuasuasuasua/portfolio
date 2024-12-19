import HighlightedLink from "@/components/link";

type Props = {
  name: string;
  description: string;
  link: string;
};

export default function Technology({ name, description, link }: Props) {
  return (
    <div className="space-x-1">
      <HighlightedLink link={link} highlight="text-orange-400">
        {name}
      </HighlightedLink>
      <span>
        - <span className="italic">{description}</span>{" "}
      </span>
    </div>
  );
}
