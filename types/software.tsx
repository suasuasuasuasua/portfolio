import { IconType } from "react-icons";

export interface SoftwareProps {
  [key: string]: {
    name: string;
    icon?: IconType;
    description: string;
    link: string;
    platforms: IconType[];
  };
}
