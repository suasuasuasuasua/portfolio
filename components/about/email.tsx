import HighlightedLink from "@/components/link";
import { IconType } from "react-icons";

type Props = {
  name: string;
  link: string;
  icon: IconType;
};
export default function Email({ name, link, icon: Icon }: Props) {
  return (
    <span className="inline-flex flex-row space-x-1">
      <Icon className="mt-1" />
      <HighlightedLink link={link} highlight="text-blue-400">
        {name}
      </HighlightedLink>
    </span>
  );
}
