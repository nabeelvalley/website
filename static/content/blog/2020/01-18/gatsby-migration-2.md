<details>
<summary>Contents</summary>

- [Introduction](#introduction)
- [Getting Ready](#getting-ready)
  - [Update Folder Structure](#update-folder-structure)
  - [Install Gatsby](#install-gatsby)

</details>

# Introduction

In the [last post](../01-18/gatsby-migration-1) we looked setting up an application with a few basic routes. These routes were all assigned to Components in the `src/pages` directory.

This post will be going throught the Gatsby Setup necessary in order to migrate our current site to Gatsby, we will be looking at the second step in the process that was outlined in the last post:

1. [Creating the initial React App](../01-18/gatsby-migration-1)
2. Rendering the "Dumb" pages with Gatsby (This post)
3. [Rendering the "Smart" page with Gatsby](./road-to-gatsby-3)
4. [Image optimization and lazy loading](./road-to-gatsby-4)

# Getting Ready

In order to `Gatsbyify` the application, there are a two (potentially three) steps that we will need to carry before we can start updating our pages to work with the new system

1. Update folder structure
2. Install Gatsby
3. Create the necessary Gatsby Config files
4. Add the PostCSS Plugin
5. Fixing any possible `window` references in 3rd Party Libraries

## Update Folder Structure

Gatsby Builds are placed into the `public` directory. This currently has the files get copied into our final Build if we are doing a standard React Build

Before we do anything more we should rename our `public` directory to `static` as this is what Gatsby uses for static files, and then make a `git commit` before we add the `public` directory to our `.gitignore`

> We need to make the commit here otherwise our `public` directory will end up being tracked and we don't want that

Now we need to add the following lines to the end of our `.gitignore` file so that we do not track the gatsby build files:

`.gitignore`

```sh
# gatsby
public
.cache
```

## Install Gatsby

To add Gataby to our project we need to add the `gatsby` package from `npm` as a dependency to our project. From the project's root directory run:

```
yarn add gatsby
```

Next we'll add/update the following commands in our `package.json` file so that we can start the Gatsby Dev Server as well as build the application

`package.json`

```json
"scripts": {
    "start": "gatsby develop",
    "build": "gatsby build",
    "clean": "gatsby clean",
    ...
},
```
