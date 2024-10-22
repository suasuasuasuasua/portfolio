import HighlightedLink from "@/components/link";
import { IconType } from "react-icons";

type Props = {
  name: string;
  icon: IconType;
  link: string;
};

export default function OperatingSystem({ name, icon: Icon, link }: Props) {
  return (
    <div className="flex flex-row">
      <Icon className="mr-1 mt-1" />
      <HighlightedLink link={link} highlight="text-green-400">
        {name}
      </HighlightedLink>
    </div>
  );
}
