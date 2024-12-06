import { ComputerProps } from "@/types/computer";
import { FaApple } from "react-icons/fa";
import { SiNixos, SiWindows11 } from "react-icons/si";

export const computers: ComputerProps = {
  macbook: {
    specs: {
      os: {
        icon: FaApple,
        name: "macOS Sequoia",
      },
    },
    meta: {
      name: "Macbook Pro M3 Max",
      description: `
      My daily driver laptop for general purpose and software development.
      `,
      link: "https://support.apple.com/en-us/117736",
    },
  },
  penguin: {
    specs: {
      os: {
        icon: SiNixos,
        name: "NixOS 25.05 (unstable)",
      },
    },
    meta: {
      name: "Acer Spin 713-3w",
      description: `
      Secondary driver for experimenting with Linux and NixOS in particular.
      Used as a beater laptop around the house or for small trips.
       `,
      link: "https://store.acer.com/en-us/chromebook-spin-713-cp713-3w-5102",
    },
  },
  legion: {
    specs: {
      os: {
        icon: SiWindows11,
        name: "Windows 11",
      },
    },
    meta: {
      name: "Lenovo Legion T730-28ICO",
      description: `
      Primarily used for Windows exclusive apps (like video games and whatnot)
      and softwere development sometimes.
`,
      link: "https://www.lenovo.com/us/outletus/en/p/desktops/legion-desktops/legion-t-series-towers/lenovo-legion-t730-28ico/90jf00kvus?orgRef=https%253A%252F%252Fwww.google.com%252F&srsltid=AfmBOop5EtlrcGhEQFudRHxKuXM56kAEJmC7ByIk1Bl9RoVJX4hCC3Tk",
    },
  },
  optiplex: {
    specs: {
      os: {
        icon: SiNixos,
        name: "NixOS 25.05 (unstable)",
      },
    },
    meta: {
      name: "OptiPlex 5060M",
      description: `
      A secondary Linux mini-pc on my office desk. Used for dabbling in Linux,
      though nothing that the Macbook can't already do!
`,
      link: "https://store.acer.com/en-us/chromebook-spin-713-cp713-3w-5102",
    },
  },
  raider: {
    specs: {
      os: {
        icon: SiNixos,
        name: "NixOS 25.05 (unstable)",
      },
    },
    meta: {
      name: "MSI Raider GE75",
      description: `
      Retired gaming laptop from undergrad used for Linux distro hopping -- most
      recently Proxmox and now NixOS for home server use. Uniquely has an "okay"
      GPU so can run small LLMs like llama3.2.
`,
      link: "https://www.costco.com/msi-ge75-raider-gaming-laptop---10th-gen-intel-core-i7-10750h---geforce-rtx-2060---1080p.product.100568605.html",
    },
  },
};

export default computers;
