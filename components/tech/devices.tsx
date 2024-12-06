import HighlightedLink from "@/components/link";
import { DeviceProps } from "@/types/devices";

export default function Device({
  device: { name, description, link },
}: DeviceProps) {
  return (
    <div>
      {/* Name of the computer */}
      <HighlightedLink link={link} highlight="text-blue-400">
        {name}
      </HighlightedLink>

      {/* Meta */}
      <div>
        {/* Description */}
        <div className="text-sm italic">{description}</div>
      </div>
    </div>
  );
}
