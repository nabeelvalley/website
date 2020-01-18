# Introduction

<!-- NEED TO CLARIFY INTENT OF THE POST -->

Lately I've spent a lot of time looking at and playing with Static Site Generators, and to be fully transparent - they're all actually all a lot more complicated than I was anticipating

My primary concern was reduction in load speed because of the calls to the backend which were unecessarily holding up page conent

What if we could have all that _live_ content baked right into the initial HTML instead of making a second trip to the get the markown and convert it on the client. I've considered a few different ways to go about transforming this site into one that's static, but I still wanted the responsiveness of a Single Page Application

I've been hearing about [Gatsby.js](https://www.gatsbyjs.org/) for quite some time and thought it may be worth giving a shot on my current site as it's based on a combination of React and Markdown stitched together with [Showdown.js](http://www.showdownjs.com/) which seemed like a potential fit, the process was a bit more complicated that I'd have liked but there was a lot to be learnt from the process

And so begins the process of turning a React App into a Gatsby Site

# The Sample App

I initially tried to write this by using my personal website as a reference point but thought it would be more beneficial for readers to follow if I used something more standard

For this example we'll use a basic React site that has the following:

1. Two "hard-coded" pages and a 404 page
2. A dynamic page with an API call to retrieve data
3. Overall app layout with child routes for `1` - `3`

## Create App

To get started, we'll create a fresh React App:

```
npx create-react-app gatsby-to-be
```

And add the `react-router`

```
yarn add react-router-dom
```

Running this command should set up the application, if you don't know much about React I'd suggest taking a look at [the documentation](https://create-react-app.dev/docs/getting-started)

## Hard Coded Pages

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
      <Link to="/post/post-1">Post 1</Link>
    </div>
    <div>
      <Link to="/post/post-2">Post 2</Link>
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

## Dynamic Post Page

We will use the `Post` component which utilizes the `useEffect` hook to load content from `json` files in the `public` directory

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
  })

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

Also note the way we are rendering the `Post` component with a route parameter for `slug`, this allows us to use the `slug` to retrieve the content in the `useEffect` hook with the route information which will be passed in by the Router

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

## App Layout and Routes

Next, we'll specify out application layout with the relevant routes in the `App.js` file, referencing the components we will be creating, we do this using the `BrowserRouter`

# Let's Get Moving

I sort of followed [the documentation](https://www.gatsbyjs.org/docs/porting-from-create-react-app-to-gatsby/) on porting from a `create-react-app` app to a Gatsby one. The first step was to Install Gatsby

```
yarn add gatsby
```

Next, before doing anything else, rename the `public` directory of the CRA app to `static`. This is because Gatsby builds output to the `public` and you're just going to end up in a really annoying place if you don't do that - learnt that the hard way

> you may also want to update your `.gitignore` and clean your repo's cached files to work align with what Gatsby Uses

# Setting up a Test Page

To create a page in Gatsby we simply need to set up a React component with the page name and add it to the `src/pages` directory, this is a lot like how we would place HTML files if it was a static site

In a traditional CRA we have our routes mapped to components, for example we can see the route to the `Home` and `About` componentss below:

`App.js`

```js
const App = props => (
  <div className="App">
    <Router>
      <Navbar />
      <ScrollToTop />
      <Suspense fallback={<Preloader />}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
        </Switch>
      </Suspense>
      <Footer />
    </Router>
  </div>
)
export default App
```

Going off the above structure I added the `index.js` file to the `pages` directory with my basic home page content. The simplest way to create a page was to just copy my `Home` component that I use in my app's router

`index.js`

```js
const Home = ({ location, data }) => (
  <div className="Home">
    <Helmet>
      <title>Home | Nabeel Valley</title>
      <meta
        name="description"
        content="Nabeel Valley's Portfolio and Blog. Web Development, Photography, and Design"
      />
    </Helmet>

    <Landing />
    <FeaturedPost
      image="/content/blog/2019/12-11/header.jpg"
      title="Real-time Communication with MQTT"
      date="12 November 2019"
      description="MQTT and real-time communication with the browser, JavaScript, Web Sockets and a Mosquitto message broker"
      link="/blog/2019/12-11/rtc-with-mqtt"
    />
    <SectionDivider title="What's New?" />
    <ProjectGroup isFullWidth={true}>
      <ProjectItem
        title="Docs"
        tech={["literally everything"]}
        description="I'm migrating all my dev notes over from GitHub Pages, you can take a look at what's there so far:"
        link="/docs/index"
        linkText="View Docs"
      />
    </ProjectGroup>
  </div>
)

export default Home
```

# Gatsbyfication

In order to actually `Gatsbyify` the application, there were still a couple of more things I could do before my _copy and paste_ current page could work at all

1. Create the necessary Gatsby Config files
2. Include the PostCSS Plugin
3. Fix `window` references in 3rd party libraries
