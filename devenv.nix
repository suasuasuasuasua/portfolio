{pkgs, ...}: {
  # https://devenv.sh/packages/
  packages = with pkgs;
    [
      git
      gnupg
      pinentry-curses
      git-cliff
      commitizen

      fastfetch
      onefetch
      tree

      markdownlint-cli
      nixfmt-rfc-style
    ]
    ++ (with nodePackages; [vercel]);

  languages.javascript = {
    enable = true;

    pnpm = {
      enable = true;
      install.enable = true;
    };
  };

  processes = {
    nextjs.exec = "pnpm dev";
  };

  devcontainer = {
    enable = true;
    settings = {
      image = "ghcr.io/cachix/devenv:latest";
      customizations.vscode.extensions = [];
    };
  };

  git-hooks.hooks = {
    # Nix
    alejandra.enable = true;
    deadnix.enable = true;

    # Git
    commitizen.enable = true;

    # Docs
    markdownlint.enable = true;
    typos.enable = true;

    # General
    check-merge-conflicts.enable = true;
    end-of-file-fixer.enable = true;
    trim-trailing-whitespace.enable = true;

    # HTML, CSS, JS, TS, etc.
    prettier.enable = true;
    eslint = {
      enable = true;
      args = ["--fix app/"];
      settings = {
        extensions = "\.(js|jsx|ts|tsx|mdx)$";
      };
    };
  };
}
