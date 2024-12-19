import { IconType } from "react-icons";

export interface ComputerProps {
  [key: string]: {
    specs: ComputerSpecs;
    meta: ComputerMetaProps;
  };
}

interface ComputerSpecs {
  os: {
    icon: IconType;
    name: string;
  };
}
interface ComputerMetaProps {
  name: string;
  description: string;
  link: string;
}
