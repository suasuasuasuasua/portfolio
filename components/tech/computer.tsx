import HighlightedLink from "@/components/link";
import { ComputerProps } from "@/types/computer";

export default function Computer({
  computer: {
    specs: {
      os: { icon: Icon, name: osName },
    },
    meta: { name: deviceName, link, description },
  },
}: ComputerProps) {
  return (
    <div>
      {/* Name of the computer */}
      <HighlightedLink link={link} highlight="text-blue-400 text-lg">
        {deviceName}
      </HighlightedLink>

      {/* Stick the data into a grid */}
      <div>
        {/* Specs */}
        <div className="flex flex-col">
          {/* Operating System */}
          <div className="inline-flex text-sm italic">
            <Icon className="mr-1 mt-1" />
            {osName}
          </div>
        </div>

        {/* Meta */}
        <div>
          {/* Description */}
          <div className="text-sm italic">{description}</div>
        </div>
      </div>
    </div>
  );
}
