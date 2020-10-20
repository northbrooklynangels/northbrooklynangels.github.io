# NBA Website

To locally develop this site, follow the following steps:

1. Download and install [Jekyll](https://jekyllrb.com/docs/installation/) following the instructions for your operating system. I personally develop on Windows using WSL as my backend.
2. Download and install [Node.js](https://nodejs.org/en/). Use the latest version available for your OS.
3. Clone the repository using `git clone -b bootstrap https://github.com/northbrooklynangels/northbrooklynangels.github.io.git` (if this was merged to `master`, delete the `-b bootstrap` from the command).
4. Run `bundler` to install the Ruby software needed. 
5. Run `npm install` to download the front-end assets needed (as of this writing, it's required to pull in the Bootstrap source).
6. Run `npm start` to start the development server. Alternatively, run `npm build` to statically build the site if you need to for whatever reason.