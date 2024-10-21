import { ComputerProps, Usage } from "@/types/computer";
import { FaApple } from "react-icons/fa";
import { SiNixos } from "react-icons/si";

export const computers: ComputerProps = {
  macbook: {
    specs: {
      os: {
        icon: FaApple,
        name: "macOS Sequoia",
      },
      cpu: "M3 Max 14 Core (10 performance, 4 efficiency)",
      gpu: "M3 Max 18 Core",
      ram: "36.0GB Unified RAM",
    },
    meta: {
      name: "Macbook Pro M3 Max",
      releaseYear: 2023,
      acquireYear: 2024,
      description: `
My primary daily driver that I use between personal AI, web development,
personal projects, research, and media consumption.

I got this Macbook early in 2024 when I was going through my Master's program.
Until that point, I was rocking the Macbook Air M1 (goated) for all of my
classes and personal use. It was the perfect device to be honest, but it did
feel sluggish especially when we started game and macOS development and some
other heavier courses.

At that point in time, I was really obsessed with the new Macbooks. A large
part of me wishes that I just kept that Macbook Air because I don't think I
*need* this beast of a machine. Like sure I'm messing around with Ollama, OBS,
iPhone simulators, etc. but that's not worth the price I paid. Like here I am
now using tmux and neovim instead of the latest and greatest text editors. Over
the summer, I learned that you really don't need a whole ton to code which is
what I was into. I kept telling myself that I was going to start becoming a
creative with app development, music production, or art, but that's not going
to happen with me buying something new and shiny.

I've experimented quite a bit with the setup and workflow, and what I find
works best now is to use the default Apple apps with nix as the primary package
manager (brew as secondary of course). Exceptions to that rule are Spotify,
VSCode, and many other utility apps that I genuinely use. I feel like I spent
so much time chasing the productivity wave and installing random junk onto my
computer that I would never even touch or remembered about. I would obsess over
watching other people's setups or read articles and posts. Anyway, the config
exhaustion has set in on me and now I'm ready to just create, work, and play.
      `,
      usage: Usage.Daily,
      link: "https://support.apple.com/en-us/117736",
    },
  },
  penguin: {
    specs: {
      os: {
        icon: SiNixos,
        name: "NixOS",
      },
      cpu: "i5-1135G7 processor Quad-core 2.40 GHz",
      gpu: "Intel Iris Xe Graphics",
      ram: "8.0GB DDR4 RAM",
    },
    meta: {
      name: "Acer Spin 713-3w",
      releaseYear: 2021,
      acquireYear: 2021,
      description: `
My secondary daily driver that I picked up again recently over the Summer. I
got this in sophomore year of college because I wanted a lighter weight laptop
than my MSI Raider to take to school. I actually wanted to get a pretty cheap
one (like say $100-200) but my dad insisted that I should just get a more
expensive one which will last longer. That's been kind of a regret for its
price because I could've gotten a used Thinkpad or Macbook Air (which I did by
stealing my mom's lmao) for much cheaper and would have been upgradable.

I ran classic ChromeOS with the integrated Linux feature for much of its life.
It was fine for a while, but felt overly restrictive in many ways. In Summer
2024, I finally decided to follow Mr Chromebook's chrultrabook guide to convert
the chromebook into a full-blown Linux device. It was kind of a scary process
where you had to take the back cover off, disconnect the battery, then run
through a few firmware scripts that disabled secure boot. Anyway, I'm not even
sure I can go back to regular ChromeOS again because I lost the image that I
was supposed to save.

Back to Linux, I went with Debian first because that's what I was familiar with,
but then moved to Arch because I wanted newer packages. Finally I decided to
move to NixOS because I was worried about stability and possibly having to
re-do all my configurations and whatnot, which
nix solved.

Currently, the audio (bluetooth is fine) and thunderbolt ports don't work, but
that's honestly fine because I think the speakers were pretty shitty anyway lol.
The battery life is okay...is all I'll say about that. It was better a few years
ago, but has lost like 15-20% capacity since then which sucks.

All in all, the Acer Spin is a capable device which helped me learn a lot about
Linux and how to value technology.
       `,
      usage: Usage.Often,
      link: "https://store.acer.com/en-us/chromebook-spin-713-cp713-3w-5102",
    },
  },
};

export default computers;
