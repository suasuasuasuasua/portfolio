import HighlightedLink from "@/components/link";
import { CLIProps, SoftwareProps } from "@/types/software";

export function Software({
  software: { name, icon: Icon, description, link, platforms },
}: SoftwareProps) {
  return (
    <div>
      {/* Name */}
      <div className="flex flex-row space-x-1">
        <Icon className="mt-1" />
        <HighlightedLink link={link} highlight="text-blue-400 font-bold">
          {name}
        </HighlightedLink>
      </div>
      {/* Platform */}
      <ul className="mt-1 flex flex-row space-x-1">
        {platforms.map((Platform, i) => (
          <li key={i}>{<Platform />}</li>
        ))}
      </ul>
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
      <div className="flex flex-row space-x-1">
        <HighlightedLink link={link} highlight="text-blue-400 font-bold">
          {name}
        </HighlightedLink>
      </div>
      {/* Platform */}
      <ul className="mt-1 flex flex-row space-x-1">
        {platforms.map((Platform, i) => (
          <li key={i}>{<Platform />}</li>
        ))}
      </ul>
      {/* Description */}
      <p className="text-sm italic">{description}</p>
    </div>
  );
}
