# Webflow Dev Template

A template for starting all your Webflow projects requiring code using Typescript.
It looks like the one of [finsweet](https://github.com/finsweet/developer-starter) but it's easily customizable and the deployement is easier.

## Requirements

Install pnpm on your computer
```bash
npm i -g pnpm
```

Got a npm access token : [How to do](https://docs.npmjs.com/creating-and-viewing-access-tokens)

## Installation

1. Click on Use this template > [Create a repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template#creating-a-repository-from-a-template)
2. Change some settings in your repository 

```Settings > Secrets and variables > Actions > New repository secret ```
- Name: NPM_TOKEN
- Secret: you token from npm
3. Install dependencies
```bash
pnpm install
```

You can start your project! Here are two useful scripts:

Dev mode (with live reload)
```bash
pnpm dev
```

Build (for production)
```bash
pnpm build
```

4. Write your code in src/index.ts (don't touch Webflow.push but you should remove console.log)

```typescript
Webflow.push(() => {
  //Write your code here

  console.log('Hello World')
})

```

## Deployment

Commit all your work

Then write :
```bash
pnpm release
```
Choose between Major, Minor or Patch and write a commit message for the deployment

Push your code,

When CI/CD is finished in Github, your package will appear in npm.

## Tools

The advantage of this template is you can easily change each tool to suit your configuration.

### Finsweet ts-utils (don't change)

Finsweet did a HUGE work by typing the Webflow.js file included in all Webflow projects.

With this, you can access many types and methods not provided by Webflow.

[ts-utils documentation](https://finsweet.com/open-source/ts-utils/)

### ESBuild

A fast JavaScript bundler and minifier that compiles and packages JavaScript and TypeScript code for deployment.

Update builder/esbuild.js

It includes a live reload in builder/live-reload.js

### TSConfig

A configuration file for TypeScript that specifies the compiler options and file paths required to compile a TypeScript project.

Update tsconfig.json

### ESLint

A static code analysis tool for JavaScript that identifies and fixes problems in your code to ensure adherence to specified coding standards and best practices.

Update eslint.config.js

### Prettier

A code formatter for JavaScript that enforces consistent style by parsing code and reprinting it with its own rules.

Update .prettierrc file.

### Husky (Git hooks)

A tool that enables Git hook scripts to run automatically, helping to enforce quality checks and other tasks during the development process.

Add hooks in .husky folder

### bump-version.js (versioning)

A script for managing and automating versioning.

Update builder/bump-version.js

### CI/CD

This pipeline uses GitHub Actions

#### Release

Publish package to npm

Update .github/workflows.realease.yml
