import { IconType } from "react-icons";

export interface AlbumProps {
  [key: string]: {
    title: string;
    artist: string;
    link: string;
  };
}

export interface BookProps {
  [key: string]: {
    title: string;
    author: string;
    bookLink: string;
    authorLink?: string;
  };
}

export interface TechnologyProps {
  [key: string]: {
    name: string;
    description: string;
    link: string;
  };
}

export interface OperatingSystemProps {
  [key: string]: {
    name: string;
    icon: IconType;
    link: string;
  };
}
