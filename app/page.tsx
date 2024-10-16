import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faM } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          src="/penguin.png"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
          className="mx-auto"
        />
        hi my name is justin, and i want to be a web developer when i grow up :)
      </main>

      <footer className="row-start-3 gap-6 flex-wrap items-center justify-center">
        <div className="flex gap-4 mb-4 justify-center">
          <a
            className="flex items-center gap-2"
            href="https://github.com/suasuasuasuasua/personal-website"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} className="fa-fw" />
          </a>
          <a
            className="flex items-center gap-2"
            href="https://linkedin.com/in/jhoang124"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} className="fa-fw" />
          </a>
          <a
            className="flex items-center gap-2 "
            href="https://matrix.to/#/@suasuasuasuasua:matrix.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* TODO: find a matrix icon... could just use an actual svg, but then
          it won't match the formatting */}
            <FontAwesomeIcon icon={faM} className="fa-fw" />
          </a>
          <a
            className="flex items-center gap-2"
            href="mailto:j124.dev@proton.me"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faEnvelope} className="fa-fw" />
          </a>
        </div>
      </footer>
    </div>
  );
}
