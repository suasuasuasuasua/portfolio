import {
  AlbumProps,
  BookProps,
  OperatingSystemProps,
  TechnologyProps,
} from "@/types/nows";
import { FaApple } from "react-icons/fa";
import { SiNixos } from "react-icons/si";

export const albums: AlbumProps = {
  "Lose Yourself": {
    title: "Lose Yourself",
    artist: "Kiss of Life",
    albumLink: "https://open.spotify.com/album/4eguh1dJUXRh0IMiLKRwab",
    artistLink:
      "https://open.spotify.com/artist/4TEK9tIkcoxib4GxT3O4ky?si=RM2MZ7fSREG0xgWXm5v2Dg",
  },
  Bewitched: {
    title: "Bewitched",
    artist: "Laufey",
    albumLink: "https://open.spotify.com/album/1rpCHilZQkw84A3Y9czvMO",
    artistLink: "https://open.spotify.com/artist/7gW0r5CkdEUMm42w9XpyZO",
  },
  "Piano Concerto No. 2 in C Minor, Op. 18": {
    title: "Piano Concerto No. 2 in C Minor, Op. 18",
    artist: "Sergei Rachmaninoff",
    albumLink: "https://open.spotify.com/album/5lVqgXqdoIH3W1wUM2hzPx",
    artistLink: "https://open.spotify.com/artist/0Kekt6CKSo0m5mivKcoH51",
  },
  Telos: {
    title: "Telos",
    artist: "Zedd",
    albumLink: "https://open.spotify.com/album/5V7WoYwRXtheRjhOjgUeR5",
    artistLink: "https://open.spotify.com/artist/2qxJFvFYMEDqd7ui6kSAcq",
  },
};

export const books: BookProps = {
  "The Old Man and The Sea": {
    title: "The Old Man and The Sea",
    author: "Ernest Hemingway",
    bookLink: "https://isbndb.com/book/9780684801223",
    authorLink: "https://en.wikipedia.org/wiki/Ernest_Hemingway",
  },
  "Of Mice and Men": {
    title: "Of Mice and Men",
    author: "John Steinbeck",
    bookLink: "https://isbndb.com/book/9780142000670",
    authorLink: "https://en.wikipedia.org/wiki/John_Steinbeck",
  },
};

export const technologies: TechnologyProps = {
  nix: {
    name: "nix",
    description: "declarative package manager",
    link: "https://nixos.org/",
  },
  selfHosting: {
    name: "self hosting",
    description: "self sufficient technology management",
    link: "https://selfh.st/",
  },
  webDev: {
    name: "web development",
    description: "next.js in particular",
    link: "https://nextjs.org/",
  },
};

export const os: OperatingSystemProps = {
  nixos: {
    name: "NixOS",
    icon: SiNixos,
    link: "https://nixos.org/",
  },
  macOS: {
    name: "macOS",
    icon: FaApple,
    link: "https://www.apple.com/macos/macos-sequoia/",
  },
};
