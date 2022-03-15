---
layout: blog
title: Understanding Docker
date: 2022-03-15T10:14:30.857Z
tags: "Docker "
category: DevOps
subCategory: Docker
slug: understanding-docker
---
Making use of containers for your applications is great practice, especially for cloud-based applications. It is a great way to build on isolated environments and scale them easily.

Containers first originated in the Linux world. However, it was complex and not easily accessible, until Docker came along.

The concept of containerization might be hard to wrap your head around, and at some point in your career as a developer or cloud engineer, you’re bound to cross paths with Docker.

In this article, we’ll run through the basics of Docker. Just enough for you to get started as a developer.

## A little bit of History

Before Docker and Linux Containers, virtual machines (VMs) were used to run multiple applications on a single server. However, keeping up became demanding to manage as time went on. There were different challenges including the fact that every VM required it’s own dedicated operating system (OS), they were slow to boot and not so portable.

Then came **Linux Containers**.

Linux Containers didn’t require their own OS, they were faster and portable. They saved more time and resources, compared to VMs. Irrespective of this, containers were out of reach for many as they were quite complex.

And then came **Docker**.

Docker, Inc. (the company) started out as a Platform as a Service (PaaS) provider known as *dotCloud*. The dotCloud platform was built on Linux Containers. They created an in-house tool called Docker to help create and manage these containers. However, relying on Linux Containers was a problem for projects that were to be multi-platform. As a result, Docker, Inc. developed a replacement for Linux Containers as the default driver, called **Libcontainer**.

## The Docker Technology

Docker is commonly known as the software used to create, run, and manage containers on Linux, Unix, and Windows OS. Although, when referring to Docker, there are at least 3 things to be aware of;

- The runtime
- The daemon/engine
- The orchestrator

### The runtime

This is the lowest operation level. Docker’s runtime architecture is layered into low-level (`runc`) and high-level (`containerd`), to work together.

### runc

The sole purpose of the `runc` runtime is to create containers. It can also be referred to as the **OCI Layer** as it is the reference implementation of the [Open Container Initiative](https://opencontainers.org/) (OCI) runtime standards.

### containerd

Pronounced as container-dee, it is used to manage the entire lifecycle of containers. It is responsible for pulling images, creating network interfaces with the Docker daemon(engine), and managing the lower-level `runc` instances.

### Docker daemon

The docker daemon sits above `containerd` on the operational ladder. It performs high-level tasks such as exposing the Docker remote API, managing images, volumes, networks and more. Its major job is to provide an easy-to-use interface that abstracts the lower levels.

### Docker swarm

This is a container orchestration tool used to manage clusters of nodes(machines) running on the Docker application. It is easy to use and great to use in real-time. Though, Kubernetes is sometimes chosen over Docker swarm.

## Images and Containers

When you install Docker on your machine, you get two major components;

- Docker client
- Docker daemon/engine

To run containers with docker, you need these components and images.

A **Docker image** is a package that includes an OS filesystem, an application and its dependencies. For instance, a `python` image would contain all that is needed to run python, and if we run it as a container, it would open up a python shell.

Let's try it out!
To pull the latest version of python as an image, run the command:

```bash
 $ docker image pull python:latest
```

It's a relatively large image, so it should take a couple of minutes. Once it's done, you can check to confirm if it was pulled, by running the command:

```bash
 $ docker image ls
```

This command gives you a list of images you have on your host machine. Now, we can launch a container from the python container that we have pulled. Run the command:

```bash
 $ docker container run -it python
```

By running this command, we have launched a container that can work as an instance of a python shell. However, you should note that when you use the `-it` flag, it tells Docker to attach the container's terminal to your current shell.

## How running containers work

The behind the scenes of how containers are run is quite interesting and simple.

```bash
 $ docker container run ubuntu:latest
```

When you type a command into a Docker CLI, the Docker client converts the command to the appropriate API payload, then POSTs them to the API endpoint exposed by the daemon.
The API is implemented in the daemon and can be exposed over a local socket or network;

- On Linux- /var/run/docker.sock
- On Windows - \pipe\docker_engine
- On MacOS - /var/lib/docker

Once the daemon receives the command to create a new container, it makes a call to `containerd`, through a CRUD-Style API. Since `containerd` cannot create containers, it converts the Docker image required into an OCI bundle and tells `runc` to create a new container, using it.
`runc` then works with the OS Kernel to construct all that's needed to create a container. The container process is started as a child process of `runc`, and as soon as it is started, `runc` exits because its work is done.

## Docker Use Cases

It’s important to understand when to use docker. There are several use cases for Docker. I’ll give 3 typical instances.

### **Case 1 — *Learning and using new technology.***

When you’re getting started with a new tool, chances of spending time installing and configuring the tool on your PC, are high. With Docker, you can create an isolated and disposable environment to get familiar with that tool. Many tools have ready to use Docker Images with their apps already set up. 

For example, If you want to try out an NginX Server, you can simply create a Dockerfile that pulls the NginX Image from [Docker Hub](https://hub.docker.com/), set up your app commands, and containerize the application. 

### Case 2 — *Ensure compatibility and productivity.*

In several cases, developers you work with might have different setups. Building an Image from your app and running it as a container, is a convenient way to work with others. Your Docker image would run the same, regardless of the kind of machine they’re working with. 

It’s also a great way to have local development environments that will match the production environment. 

### Case 3 —*Continuous Integration and Delivery.*

Docker is also great to use when your app delivery cycle (eg development-testing-QA-production) is in stages. 

It provides repeatable environments for these different stages, allowing you to efficiently analyze and fix bugs within the application. 

# Benefits of using Docker

Seeing some possible use cases of Docker, it's easy to pick up some benefits of using docker. Some of which include;

- Using Docker cuts the cost and resources required to buy and maintain primary infrastructure, allowing teams to be smaller and more effective.
- Docker solves the "it works on my machine" problem that many developers have faced. It allows compatibility because Docker images would run the same on whatever machine.
- Deployment time is reduced because Docker doesn't need to boot an OS to get work done.
- It ensures portability and can be easily moved to cloud service providers, provided that the host OS supports Docker.
- With Docker, there's room for efficient scalability and maintenance.
- It ensures that applications and their resources are isolated, making sure each app uses only its delegated resources.

# Wrapping it up

There's definitely a lot more to the benefits of Docker. The availability and accessibility of Docker have made the development, deployment and operations of software more efficient and better.
I hope you enjoyed reading this article and found it helpful. If you have any questions or comments, feel free to reach out to [me](https://twitter.com/lulunwenyi) and I’ll be happy to answer.