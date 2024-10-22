import { IconType } from "react-icons";

export interface Email {
  [key: string]: {
    name: string;
    link: string;
    icon: IconType;
  };
}
