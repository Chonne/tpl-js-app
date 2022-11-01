# Description

Personal template for simple js apps using nodejs and npm. The settings have been adapted to my personal liking and are quite generic.

Includes or will include things useful for most js projects, eg:

- husky + lintstaged
- [commitlint](https://github.com/conventional-changelog/commitlint)
- eslint
- Dockerfile(s) for multiple envs

## Usage

Create your repo based on this template.

Install the packages with `npm i`.

Adapt the eslint rules in `.eslintrc.js`, they're mostly based on airbnb-base without semicolons.

Adapt the commitlint rules in `.commitlintrc.js`, the settings are the default conventional ones.

The source files are stored in `src`, with `src/index.js` defined as the app's main point of entry.

`husky` will install git pre-commit hooks which will:

- check (and not fix) that the linting is correct
- check that the commit message respects the rules
