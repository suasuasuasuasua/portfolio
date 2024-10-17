import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faM } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <footer className="row-start-3 gap-6 flex-wrap items-center justify-center">
      <div className="flex gap-4 mb-4 justify-center">
        <FooterIcon
          iconName={faGithub}
          link="https://github.com/suasuasuasuasua/personal-website"
        />
        <FooterIcon
          iconName={faLinkedin}
          link="https://linkedin.com/in/jhoang124"
        />
        {/* TODO: find a matrix icon... could just use an actual svg, but then
          it won't match the formatting */}
        <FooterIcon
          iconName={faM}
          link="https://matrix.to/#/@suasuasuasuasua:matrix.org"
        />
        <FooterIcon iconName={faEnvelope} link="mailto:j124.dev@proton.me" />
      </div>

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
      {/* TODO: If iconName doesn't exist, this will throw an error. this used
      to be in a separate file but no more... */}
      <FontAwesomeIcon icon={iconName} className="fa-fw" />
    </a>
  );
}
