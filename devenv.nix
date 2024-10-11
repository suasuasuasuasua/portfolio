{pkgs, ...}: {
  # https://devenv.sh/packages/
  packages = with pkgs;
    [
      git
      commitizen
      gnupg

      just
      fastfetch
      onefetch
      tree

      markdownlint-cli
      nixfmt-rfc-style
    ]
    ++ (with nodePackages; [vercel]);

  languages.javascript = {
    enable = true;

    # npm but better? lol
    pnpm = {
      enable = true;
      install.enable = true;
    };
  };

  pre-commit.hooks = {
    # Nix
    alejandra.enable = true;
    deadnix.enable = true;

    # Git
    commitizen.enable = true;

    # Docs
    markdownlint.enable = true;
    typos.enable = true;

    # General
    check-added-large-files.enable = true;
    check-merge-conflicts.enable = true;
    end-of-file-fixer.enable = true;
    trim-trailing-whitespace.enable = true;

    # HTML, CSS, JS, TS, etc.
    prettier.enable = true;
    eslint.enable = true;
  };
}
