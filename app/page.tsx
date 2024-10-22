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
            {albums.map(album => (
              <li key={album.link}>
                <Album
                  title={album.title}
                  artist={album.artist}
                  link={album.link}
                />
              </li>
            ))}
          </ul>
        </div>

        {/* Current Book */}
        <div>
          <p className="font-semibold">Books</p>
          <ul>
            {books.map(book => (
              <li key={book.link}>
                <Book
                  title={book.title}
                  author={book.author}
                  link={book.link}
                />
              </li>
            ))}
          </ul>
        </div>

        {/* Current Technologies */}
        <div>
          <p className="font-semibold">Current Technologies</p>
          <ul>
            {technologies.map(tech => (
              <li key={tech.link}>
                <Technology
                  name={tech.name}
                  description={tech.description}
                  link={tech.link}
                />
              </li>
            ))}
          </ul>
        </div>

        {/* Current Operating Systems */}
        <div>
          <p className="font-semibold">Operating Systems</p>
          <ul>
            {os.map(os => (
              <li key={os.link}>
                <OperatingSystem name={os.name} icon={os.icon} link={os.link} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
