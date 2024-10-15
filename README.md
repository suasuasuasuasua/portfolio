# Personal Website

Hi, this is my personal website! I'm currently between classical web development
with html, css, and javascript and modern web development with Next.js and
React.

## Tech Stack

- `nix` to setup the [development machine](#developer-workflow)
- [Next.js](https://nextjs.org) for the [React](https://react.dev) framework
  with [tailwindcss](https://tailwindcss.com)
  - [pnpm](https://pnpm.io) for the package manager
  - [eslint](https://eslint.org) for the `js[x]` and `ts[x]` formatter
  - [prettier](https://prettier.io) for the general linter
- Deploying (currently) on [Vercel](https://vercel.com) at
  [sua.sh](https://sua.sh)

## Developer Workflow

### Installation

Install `nix` from
[Determinate Systems](https://determinate.systems/posts/determinate-nix-installer/).

```bash
curl --proto '=https' --tlsv1.2 -sSf -L \
     https://install.determinate.systems/nix | sh -s -- install
```

Use [`devenv`](https://devenv.sh) and [`direnv`](https://direnv.net) to install
and load the developer shell with all the tooling built in.

> I recommend using [`neovim`](https://neovim.io) or
> [`vscode`](https://code.visualstudio.com) with the
> [devcontainer extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)
> for the text editor.

### Run the Server

Run `pnpm run dev` to start up the local development web server

Alternatively, use `vercel dev` and sign in to start the same server but gain
the ability to interact with Vercel data.

### Contribution

When committing, use
[commitizen](https://commitizen-tools.github.io/commitizen/) to format the
commit title and subtext to ensure
[conventional commits](https://commitizen-tools.github.io/commitizen/).

There are also a number of commit hooks set up for
[pre-commit](https://pre-commit.com) to ensure consistent formatting and style.
