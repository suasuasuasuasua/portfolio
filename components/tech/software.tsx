import HighlightedLink from "@/components/link";
import { SoftwareProps } from "@/types/software";

export function Software({
  software: { name, icon: Icon, description, link, platforms },
}: SoftwareProps) {
  return (
    <div>
      {/* Name */}
      <div className="flex flex-row md:flex-col">
        <span className="mr-1 inline-flex space-x-1.5 sm:mr-0">
          {Icon ? <Icon className="mt-1 sm:mt-0" /> : ""}
          <HighlightedLink link={link} highlight="text-blue-400">
            {name}
          </HighlightedLink>
        </span>
        {/* Platform */}
        <ul className="mt-1 inline-flex space-x-1.5">
          {platforms.map((Platform, i) => (
            <li key={i}>{<Platform />}</li>
          ))}
        </ul>
      </div>
      {/* Description */}
      <p className="text-sm italic">{description}</p>
    </div>
  );
}
