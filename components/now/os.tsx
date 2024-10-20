import Link from "next/link";
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
      <Link
        href={link}
        className="text-blue-200 underline underline-offset-2"
        target="_blank"
        rel="noopener noreferrer"
      >
        {name}
      </Link>
    </div>
  );
}
