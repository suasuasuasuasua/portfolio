import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faM } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const socialIcons = {
  github: {
    iconName: faGithub,
    link: "https://github.com/suasuasuasuasua/personal-website",
  },
  linkedIn: {
    iconName: faLinkedin,
    link: "https://linkedin.com/in/jhoang124",
  },
  matrix: {
    /* TODO: find a matrix icon... could just use an actual svg, but then it * won't match the formatting */
    iconName: faM,
    link: "https://matrix.to/#/@suasuasuasuasua:matrix.org",
  },
  email: {
    iconName: faEnvelope,
    link: "mailto:j124.dev@proton.me",
  },
};

export default function Footer() {
  return (
    <footer className=" mt-auto space-y-2">
      {/* Row 1 - List of socials */}
      <ul className="flex flex-row space-x-10 justify-center">
        {/* Map each of the social entries to a icon */}
        {Object.entries(socialIcons).map(([key, value]) => (
          <li key={key}>
            <FooterIcon
              iconName={value.iconName}
              link={value.link}
            ></FooterIcon>
          </li>
        ))}
      </ul>

      {/* Row 2 - GitHub Plug */}
      <p className="text-center text-sm gap-2">
        <span className="mx-1">Made with ❤️ by</span>
        <a
          className="hover:underline hover:underline-offset-4"
          href="https://github.com/suasuasuasuasua/"
          target="_blank"
          rel="noopener noreferrer"
        >
          suasuasuasuasua
        </a>
      </p>
    </footer>
  );
}

function FooterIcon({
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
