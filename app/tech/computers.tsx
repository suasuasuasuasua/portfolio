import { ComputerProps, Usage } from "@/types/computer";
import { FaApple } from "react-icons/fa";
import { SiNixos, SiProxmox, SiWindows11 } from "react-icons/si";

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
      cpu: "i5-1135G7 (4-core, 8 threads, 2.40 GHz)",
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
re-do all my configurations and whatnot, which nix solved. The reason why I still
call it penguin is because ChromeOS's linux feature called the hostname penguin.

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
  legion: {
    specs: {
      os: {
        icon: SiWindows11,
        name: "Windows 11",
      },
      cpu: "i7-9900K (8 core, 16 threads, 3.6GHz)",
      gpu: "GeForce RTX 2080",
      ram: "36.0GB DDR4 RAM (16.00 DDR3 RAM stock)",
    },
    meta: {
      name: "Lenovo Legion T730-28ICO",
      releaseYear: 2018,
      acquireYear: 2019,
      description: `
I've had this computer for a long time now, and it's been through thick and
thin with me. I remember my dad randomly putting this box in front of my bedroom
door, so when I got home from school I was so surprised and confused. I didn't
expect to get a computer (we were long overdue anyway). It was a really exciting
upgrade! We were still playing the same games like League and CSGO, but at least
we had the option of trying other games like RE2, RDR2, Minecraft with
raytracing, etc.

I used this computer a lot in the past, but took a break when I went to college.
Dad was really strict about not bringing it up because it was just a distraction.
I managed to convince him to let *me* bring it up, but idk how Bryan was able to
convince him because all he did was game lmao. Like yes I also played games, but
I didn't lose control like he did. I was experimenting with Linux distros (shout
out Fedora) and using it when my MacBook Air wasn't powerful enough.

Lately I've been thinking about putting NixOS on it, but I am hesitant because
I won't be able to play many Windows-only games like League and Valorant. Also,
my setup is fine right now because I have the trifecta with all the major
operating systems. I did run Chris Titus' Toolbox to debloat the system which
makes it quite snappy and enjoyable to use (Microsoft stop putting stupid ads
on the start menu!). It's really just been a dedicated Elden Ring machine at
this point (only low shader quality sadge), YouTube box, and Ollama chat. I
sometimes use WSL (shout out Microsoft, best feature ever) to experiment with
different distros and code. I didn't know that you could use NixOS as a distro,
but it was kind of janky especially for Docker Desktop integration, so I'm just
rocking Ubuntu with Nix.
`,
      usage: Usage.Sometimes,
      link: "https://www.lenovo.com/us/outletus/en/p/desktops/legion-desktops/legion-t-series-towers/lenovo-legion-t730-28ico/90jf00kvus?orgRef=https%253A%252F%252Fwww.google.com%252F&srsltid=AfmBOop5EtlrcGhEQFudRHxKuXM56kAEJmC7ByIk1Bl9RoVJX4hCC3Tk",
    },
  },
  optiplex: {
    specs: {
      os: {
        icon: SiNixos,
        name: "NixOS",
      },
      cpu: "i5-8600T (6-core, 6 threads, 3.70 GHz)",
      gpu: "Intel UHD Graphics 630",
      ram: "16.0GB DDR4 RAM",
    },
    meta: {
      name: "OptiPlex 5060M",
      releaseYear: 2018,
      acquireYear: 2024,
      description: `
This micro PC was actually meant for my brother, but he never bothered learning
Linux to set it up. I just took it and put NixOS on it. I use this at my main
work desk as a secondary machine when I want to code with no distractions.
Generally though, I do use my MacBook as the main development machine.

All in all, this is a great machine. It's handled pretty much anything that I've
thrown at it, except maybe OBS (no hardware codecs sadge) and steam games (no
discrete gpu sadge), but that's to be expected. One thing that is annoying about
using this computer is that when it goes to sleep/hibernate and you wake it up,
the resolution becomes super squished between 1024x768, and the only way to fix
it is to replug the display port cable or reboot the computer.
`,
      usage: Usage.Often,
      link: "https://store.acer.com/en-us/chromebook-spin-713-cp713-3w-5102",
    },
  },
  raider: {
    specs: {
      os: {
        icon: SiProxmox,
        name: "Proxmox",
      },
      cpu: "i7-10750H (6 core, 12 threads, 2.6GHz)",
      gpu: "GeForce RTX 2060 (notebook version)",
      ram: "16.0GB DDR4 RAM",
    },
    meta: {
      name: "MSI Raider GE75",
      releaseYear: 2019,
      acquireYear: 2020,
      description: `
I used the MSI raider all throughout college until the last years when I wanted
use the Lenovo tower. It was great for what it was, being relatively cheap yet
powerful. The thing that got me was the thermal performance. The fans would spin
up to max power on boot or opening something simple like chrome which was hella
annoying.

This laptop is precious to me though, and I still see it as a capable machine.
Over the summer, I experimented putting Arch linux on it just to learn (I ended
up using the cheater archinstall anyway), so I could put it on my chromebook.
I then learned about NixOS and decided to take that leap and experimented on the
Raider and a virtual machine on my MacBook. Figuring out NixOS was possibly the
most annoying and time consuming, but ultimately rewarding endeavour that I've
undertaken. I felt consumed almost because I was thinking about the configuration
at basically every waking moment XD. Anyway, I'm at a point where I'm very happy
with how things are, and I feel more confident in using my computers now. I know
I can always restore it to the same exact machine if anything goes wrong.

After I figured out NixOS on the Optiplex and chromebook, I decided to put
Proxmox on it. I never knew what the hell Proxmox was even though people mention
it on the self hosting subreddit all the time. I thought it was something like
VirtualBox; to be fair, it is similar to VirtualBox in the sense that it's a
virtualization platform and is used to spin up virtual machines, but I didn't
realize that it was an entire operating system dedicated to creating virtual
machines and LXCcontainers and orchestrating nodes. I don't think I even scratch
the surface on how useful it can be. I used tteck's proxmox scripts to easily
spin up services on separate LXC containers. As of now, it's just sitting in my
room not doing much. Ideally I would like to use it for Ollama primarily and a
few supporting services, but I haven't found the time or effort.
`,
      usage: Usage.Rarely,
      link: "https://www.costco.com/msi-ge75-raider-gaming-laptop---10th-gen-intel-core-i7-10750h---geforce-rtx-2060---1080p.product.100568605.html",
    },
  },
};

export default computers;
