import { albums, books, technologies, os } from "@/app/nows";
import Album from "@/components/now/album";
import Book from "@/components/now/book";
import OperatingSystem from "@/components/now/os";
import Technology from "@/components/now/technology";

export default function Home() {
  return (
    <div className="mx-4 flex flex-col">
      {/* Leading Title */}
      <h1 className="font-bold">Welcome to My Website!</h1>

      <p>
        This is my <span className="italic">now</span> page where I will be
        talking about what&apos;s going on{" "}
        <span className="font-bold"> right now</span> in my life.
      </p>
      <p>
        I&apos;ll also talk about things that I&apos;m interested in or like at
        this moment.
      </p>

      {/* Current X */}
      <div className="mt-4 flex flex-col space-y-4">
        {/* Current Listen */}
        <div>
          <p className="font-semibold">Albums</p>
          <ul>
            {Object.entries(albums).map(([key, value]) => (
              <li key={key}>
                <Album
                  title={value.title}
                  artist={value.artist}
                  albumLink={value.albumLink}
                  artistLink={value.artistLink}
                />
              </li>
            ))}
          </ul>
        </div>

        {/* Current Book */}
        <div>
          <p className="font-semibold">Books</p>
          <ul>
            {Object.entries(books).map(([key, value]) => (
              <li key={key}>
                <Book
                  title={value.title}
                  author={value.author}
                  bookLink={value.bookLink}
                  authorLink={value.authorLink}
                />
              </li>
            ))}
          </ul>
        </div>

        {/* Current Technologies */}
        <div>
          <p className="font-semibold">Current Technologies</p>
          <ul>
            {Object.entries(technologies).map(([key, value]) => (
              <li key={key}>
                <Technology
                  name={value.name}
                  description={value.description}
                  link={value.link}
                />
              </li>
            ))}
          </ul>
        </div>

        {/* Current Operating Systems */}
        <div>
          <p className="font-semibold">Operating Systems</p>
          <ul>
            {Object.entries(os).map(([key, value]) => (
              <li key={key}>
                <OperatingSystem
                  name={value.name}
                  icon={value.icon}
                  link={value.link}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
