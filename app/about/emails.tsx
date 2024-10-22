import { Email } from "@/types/email";
import { SiGmail, SiProton } from "react-icons/si";

export const emails: Email = {
  personal: {
    name: "Personal",
    link: "mailto:justinhoang124@gmail.com",
    icon: SiGmail,
  },
  developer: {
    name: "Developer",
    link: "mailto:j124.dev@proton.me",
    icon: SiProton,
  },
};
