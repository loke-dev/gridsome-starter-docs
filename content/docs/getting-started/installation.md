---
title: "Installation"
description: "Installing the Maizzle Email Framework on your machine and creating a new project"
---

# Installing Maizzle

## Requirements

Maizzle needs a few tools installed on your machine:

### Node.js and NPM

You'll obviously need [Node.js](https://nodejs.org/en/download/) - NPM comes included with it. To check if they're installed, use these commands:

```sh
node -v
```

and

```sh
npm -v
```

### Git

The `maizzle new` command for scaffolding a new project works by cloning a Git repo. So it needs [Git](https://help.github.com/en/articles/set-up-git#setting-up-git) installed. 

Check if you have it, by running this command:

```sh
git --version
```

## Installation

Maizzle consists of:

- a CLI tool
- the Framework
- a Starter project

When developing emails in Maizzle, you run a CLI command inside your Starter project directory root. That simply asks the Framework to build the emails inside your current project, based on config files it finds in there.

With that in mind:

### Install the CLI globally

With NPM:

```sh
npm install -g @maizzle/cli
```

With [Yarn](https://yarnpkg.com):

```sh
yarn global add @maizzle/cli
```

### Create a project

```sh
maizzle new my-project
```

That will clone the [Maizzle Starter](https://github.com/maizzle/maizzle) into a directory named `my-project` at your current path, and will automatically run `npm install` to install its NPM dependencies for you.

Once that's done, change your current directory to the project root: 

```sh
cd my-project
```

Congratulations, you can now start using Maizzle! 

Start local email development by running the `serve` command:

```sh
maizzle serve
```

Ready for production?

```sh
maizzle build production
```

Check out the [Commands](/docs/commands/) for more info.
