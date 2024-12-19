{pkgs, ...}: {
  # https://devenv.sh/packages/
  packages = with pkgs;
    [
      nixpkgs-fmt
      nixfmt-rfc-style
      markdownlint-cli

      git
      gnupg
      pinentry-curses
      commitizen
      act

      fastfetch
      onefetch
      tree
    ]
    ++ (with nodePackages; [vercel]);

  languages.javascript = {
    enable = true;

    npm.enable = true;
    pnpm = {
      enable = true;
      install.enable = true;
    };
  };

  processes = {
    nextjs.exec = "pnpm dev";
  };

  # Load env files automatically
  dotenv.enable = true;

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
