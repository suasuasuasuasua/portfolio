import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function FooterIcon({
  iconName,
  link,
}: {
  iconName: IconDefinition;
  link: string;
}) {
  return (
    <a
      className="flex items-center gap-2"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={iconName} className="fa-fw" />
    </a>
  );
}
