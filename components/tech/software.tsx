import HighlightedLink from "@/components/link";
import { CLIProps, SoftwareProps } from "@/types/software";

export function Software({
  software: { name, icon: Icon, description, link, platforms },
}: SoftwareProps) {
  return (
    <div>
      {/* Name */}
      <div className="flex flex-col space-x-1 md:flex-row">
        <span className="inline-flex space-x-1">
          <Icon className="mt-1" />
          <HighlightedLink link={link} highlight="text-blue-400 font-bold">
            {name}
          </HighlightedLink>
        </span>
        {/* Platform */}
        <ul className="mt-1 inline-flex space-x-1">
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

export function CLISoftware({
  software: { name, description, link, platforms },
}: CLIProps) {
  return (
    <div>
      {/* Name */}
      <div className="flex flex-col space-x-1 md:flex-row">
        <HighlightedLink link={link} highlight="text-blue-400 font-bold">
          {name}
        </HighlightedLink>
        {/* Platform */}
        <ul className="mt-1 inline-flex space-x-1">
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
