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

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/suasuasuasuasua"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/icons/github.svg"
            alt="File icon"
            width={16}
            height={16}
          />
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://linkedin.com/in/jhoang124"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/icons/linkedin.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://matrix.to/#/@suasuasuasuasua:matrix.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            // TODO: Find a matrix SVG that's *grayer*
            src="/icons/matrix.svg"
            alt="Matrix Icon"
            width={16}
            height={16}
          />
        </a>
      </footer>
    </div>
  );
}
