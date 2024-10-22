import {
  AlbumProps,
  BookProps,
  OperatingSystemProps,
  TechnologyProps,
} from "@/types/nows";
import { FaApple } from "react-icons/fa";
import { SiNixos } from "react-icons/si";

export const albums: AlbumProps = {
  loseYourself: {
    title: "Lose Yourself",
    artist: "Kiss of Life",
    link: "https://open.spotify.com/album/4eguh1dJUXRh0IMiLKRwab",
  },
  bewitched: {
    title: "Bewitched",
    artist: "Laufey",
    link: "https://open.spotify.com/album/1rpCHilZQkw84A3Y9czvMO",
  },
  pianoConceroNo2: {
    title: "Piano Concerto No. 2 in C Minor, Op. 18",
    artist: "Sergei Rachmaninoff",
    link: "https://open.spotify.com/album/5lVqgXqdoIH3W1wUM2hzPx",
  },
  telos: {
    title: "Telos",
    artist: "Zedd",
    link: "https://open.spotify.com/album/5V7WoYwRXtheRjhOjgUeR5",
  },
};

export const books: BookProps = {
  aliasGrace: {
    title: "Alias Grace",
    author: "Margaret Atwood",
    link: "https://isbndb.com/book/9780385490443",
  },
  screwtapeLetters: {
    title: "The Screwtape Letters",
    author: "C.S. Lewis",
    link: "https://isbndb.com/book/9780060652937",
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
