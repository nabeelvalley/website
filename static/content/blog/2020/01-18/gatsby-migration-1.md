<details>
<summary>Contents</summary>

- [Introduction](#introduction)
- [The React App](#the-react-app)
- [Create React App](#create-react-app)
- [Hard Coded Pages](#hard-coded-pages)
- [Dynamic Post Page](#dynamic-post-page)
- [App Layout and Routes](#app-layout-and-routes)
  - [Summary](#summary)

</details>

# Introduction

<!-- NEED TO CLARIFY INTENT OF THE POST -->

Lately I've spent a lot of time looking at and playing with Static Site Generators, and to be fully transparent - they're all actually all a lot more complicated than I was anticipating

My primary concern was reduction in load speed because of the calls to the backend which were unecessarily holding up page conent

What if we could have all that _live_ content baked right into the initial HTML instead of making a second trip to the get the markown and convert it on the client. I've considered a few different ways to go about transforming this site into one that's static, but I still wanted the responsiveness of a Single Page Application

I've been hearing about [Gatsby.js](https://www.gatsbyjs.org/) for quite some time and thought it may be worth giving a shot on my current site as it's based on a combination of React and Markdown stitched together with [Showdown.js](http://www.showdownjs.com/) which seemed like a potential fit, the process was a bit more complicated that I'd have liked but there was a lot to be learnt from the process

For the sake of being complete, this series will be broken into four posts:

1. Creating the initial React App (This post)
2. [Rendering the "Dumb" pages with Gatsby](./road-to-gatsby-2.md)
3. [Rendering the "Smart" page with Gatsby](./road-to-gatsby-3.md)
4. [Image optimization and lazy loading](./road-to-gatsby-1.md)

# The React App

I initially tried to write this by using my personal website as a reference point but thought it would be more beneficial for readers to follow if I used something more standard

For this example we'll use a basic React site that has the following:

1. Two "hard-coded" pages and a 404 page
2. A dynamic page with an API call to retrieve data
3. Overall app layout with child routes for `1` - `3`

# Create React App

To get started, we'll create a fresh React App:

```
npx create-react-app gatsby-to-be
```

And add the `react-router`

```
yarn add react-router-dom
```

Running this command should set up the application, if you don't know much about React I'd suggest taking a look at [the documentation](https://create-react-app.dev/docs/getting-started)

# Hard Coded Pages

We will create the following three hard-coded pages in the `src/pages` directory:

`Blog.js`

```js
import React from "react"
import { Link } from "react-router-dom"

const Blog = () => (
  <div className="Blog">
    <h1>Blog</h1>
    <p>This is the Blog page</p>
    <div>
      <Link to="/blog/post-1">Post 1</Link>
    </div>
    <div>
      <Link to="/blog/post-2">Post 2</Link>
    </div>
  </div>
)

export default Blog
```

Additionally we have the `Home.js` and `NotFound.js` files which follow pretty much the same structure but without the Links:

<details>
<summary>`Home.js`</summary>

```js
import React from "react"

const Home = () => (
  <div className="Home">
    <h1>Home</h1>
    <p>This is the Home page</p>
  </div>
)

export default Home
```

</details>

<details>
<summary>`NotFound.js`</summary>

```js
import React from "react"

const NotFound = () => (
  <div className="NotFound">
    <h1>404</h1>
    <p>Page Not Found</p>
  </div>
)

export default NotFound
```

</details>

# Dynamic Post Page

We will use the `Post` component which utilizes the `useEffect` hook to load content from `json` files in the `public` directory

The `useState` hook is used to initialize the state the component, in this case using the `hasError` and `data` variables, as well as providing the functions necessary for updating those in the form of `setHasError` and `setData` respectively

`Post.js`

```js
import React, { useEffect, useState } from "react"

const Post = ({ match }) => {
  const slug = match.params.slug

  const [hasError, setHasError] = useState(false)
  const [data, setData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/posts/${slug}.json`)
        const json = await res.json()
        setData(json)
      } catch (error) {
        console.log(error.toString())
        setHasError(true)
      }
    }

    fetchData()
  }, [])

  return (
    <div className="Post">
      <p>
        This is the <code>{slug}</code> page
      </p>
      {data ? (
        <div className="content">
          <h1>{data.title}</h1>
          <p>{data.body}</p>
          <img src={data.image} alt="" />
        </div>
      ) : hasError ? (
        <div className="error">
          <h1>Error</h1>
          <p>{hasError}</p>
        </div>
      ) : (
        <p>Loading .. </p>
      )}
    </div>
  )
}

export default Post
```

In the above component we are making use of the following pattern to decide what to render:

1. If the data is loaded then show the data
2. Else if there is an error then show the error data
3. Otherwise show a loading message

The way we are rendering the `Post` component with a parameter for `match`. The `match` parameter will be passed in as a `prop` from the `Router` that we will configure next, this allows us to use the `slug` from the URL to retrieve the content for the page

We use `fetch` in the `useEffect` hook to retrieve the data from the `public` directory. The `useEffect` hook allows us to pass a function that will be called to allow us to update side effects. The second input, in our case `[]` is the array of objects that when are changed we want our hook to run - since we only want it to run once and don't care about any other state changes we pass in an empty array for this value

The two data files we have to pull content from in the `public/posts` directory are `post-1.json` and `post-2.json`

<details>
<summary>`post-1.json`</summary>

```json
{
  "title": "Post 1",
  "body": "Hello world, how are you",
  "image": "/posts/1.jpg"
}
```

</details>

<details>
<summary>`post-2.json`</summary>

```json
{
  "title": "Post 2",
  "body": "Hello world, I am fine",
  "image": "/posts/2.jpg"
}
```

> The images `posts/1.jpg` and `posts/2.jpg` can also just be any images in that directory

</details>

# App Layout and Routes

Next, we'll specify our application layout with the relevant routes in the `App.js` file, referencing the components we have created, we do this using the `BrowserRouter`. When we switch the project over to a Gatsby one, the `App.js` file will be converted into our `Layout` component to wrap our different pages

Fow now, our `App.js` file is as follows:

```js
import React from "react"
import "./App.css"
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom"
import Home from "./pages/Home"
import Blog from "./pages/Blog"
import Post from "./pages/Post"
import NotFound from "./pages/NotFound"

const App = () => (
  <Router>
    <div className="App">
      <header>
        <nav>
          <h1>My Website Title</h1>
          <Link to="/">Home</Link>
          <Link to="/blog">Blog</Link>
        </nav>
      </header>
      <main>
        <Switch>
          <Route exact path="/" component={Home}></Route>

          <Route exact path="/blog" component={Blog}></Route>

          <Route exact path="/blog/:slug" component={Post}></Route>

          <Route path="/*" component={NotFound}></Route>
        </Switch>
      </main>
    </div>
  </Router>
)

export default App
```

## Summary

We have built a fairly simple application that makes use of both static and data-based pages, we have also tied all of these together using the `App` component and a `Router` with the following routes:

1. `/` which will render the `Home` component
2. `/blog` which will render the `Blog` component
3. `/blog/:slug` which will render the `Post` component with the given `slug`
4. `/*` which will match any other routes and render the `NotFound` component

In the next part we will learn how to take what we have so far and transform this application into a Gatsby one
