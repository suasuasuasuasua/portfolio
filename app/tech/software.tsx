import { CLIProps, SoftwareProps } from "@/types/software";
import { FaApple, FaFirefox, FaLinux, FaSafari } from "react-icons/fa";
import {
  SiAlacritty,
  SiElement,
  SiIterm2,
  SiNeovim,
  SiObsidian,
  SiObsstudio,
  SiProton,
  SiTmux,
  SiWindows11,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

export const devSoftware: SoftwareProps = {
  alacritty: {
    name: "Alacritty",
    icon: SiAlacritty,
    description: "Cross-platform OpenGL-powered terminal emulator",
    link: "https://alacritty.org/",
    platforms: [FaApple, FaLinux, SiWindows11],
  },
  iterm2: {
    name: "iTerm2",
    icon: SiIterm2,
    description: "Modern macOS terminal emulator",
    link: "https://iterm2.com/",
    platforms: [FaApple],
  },
  neovim: {
    name: "neovim",
    icon: SiNeovim,
    description: "Modern text editor fork of Vim",
    link: "https://neovim.io/",
    platforms: [FaApple, FaLinux, SiWindows11],
  },
  tmux: {
    name: "tmux",
    icon: SiTmux,
    description: "Terminal multiplexer",
    link: "https://github.com/tmux/tmux",
    platforms: [FaApple, FaLinux, SiWindows11],
  },
  vscode: {
    name: "Visual Studio Code",
    icon: VscVscode,
    description: "Cross-platform modern extensible text editor",
    link: "https://code.visualstudio.com/",
    platforms: [FaApple, FaLinux, SiWindows11],
  },
};

export const cliSoftware: CLIProps = {
  nix: {
    name: "nix",
    description: "Declarative functional package manager",
    link: "https://nixos.org/",
    platforms: [FaApple, FaLinux],
  },
  brew: {
    name: "brew",
    description: "Third party package manager for macOS and Linux",
    link: "https://brew.sh/",
    platforms: [FaApple, FaLinux],
  },
  devenv: {
    name: "devenv",
    description: "Declarative nix development shell composer",
    link: "https://devenv.sh/",
    platforms: [FaApple, FaLinux],
  },
  direnv: {
    name: "direnv",
    description: "Load environment variables on directory switch",
    link: "https://direnv.net/",
    platforms: [FaApple, FaLinux],
  },
  lazygit: {
    name: "lazygit",
    description: "terminal UI for git commands",
    link: "https://github.com/jesseduffield/lazygit",
    platforms: [FaApple, FaLinux, SiWindows11],
  },
  commitizen: {
    name: "commitizen",
    description: "conventional git commit prompter",
    link: "https://github.com/commitizen-tools/commitizen",
    platforms: [FaApple, FaLinux, SiWindows11],
  },
};

export const genSoftware: SoftwareProps = {
  firefox: {
    name: "Firefox",
    icon: FaFirefox,
    description: "Privacy-first web browser from Mozilla",
    link: "https://www.mozilla.org/en-US/firefox/",
    platforms: [FaApple, FaLinux, SiWindows11],
  },
  safari: {
    name: "Safari",
    icon: FaSafari,
    description: "Default privacy-first and optimized macOS web browser",
    link: "https://www.apple.com/safari/",
    platforms: [FaApple],
  },
  obsidian: {
    name: "Obsidian",
    icon: SiObsidian,
    description: "Markdown-based note organizer",
    link: "https://obsidian.md/",
    platforms: [FaApple, FaLinux, SiWindows11],
  },
  obs: {
    name: "OBS",
    icon: SiObsstudio,
    description: "Open source video and live streaming software",
    link: "https://obsproject.com/",
    platforms: [FaApple, FaLinux, SiWindows11],
  },
  element: {
    name: "Element",
    icon: SiElement,
    description: "Cross-platform Matrix client",
    link: "https://element.io/",
    platforms: [FaApple, FaLinux, SiWindows11],
  },
  proton: {
    name: "Proton",
    icon: SiProton,
    description: "Security-first encrypted email service",
    link: "https://proton.me/",
    platforms: [FaApple, FaLinux, SiWindows11],
  },
};
