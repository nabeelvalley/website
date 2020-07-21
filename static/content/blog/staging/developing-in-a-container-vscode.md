Recently I'd started using Visual Studio Code's _Remote Containers_ functionality for development and it's been really useful

The Remote Containers extension allows us to write code and develop applications within a virtualized environment that allows us to more easily control our development environment as well as more closely reselble our target deployment environment (if we're deploying to Docker or Kubernetes)

In this post I'll take a look at what a Docker container is, why we would want to use one as a development environment, and how we can go about setting one up for VSCode

# Docker Containers

A Container, in this context, 