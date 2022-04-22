---
layout: blog
title: Getting started with Infrastructure as Code
date: 2022-04-22T09:45:38.916Z
tags: IAC
category: DevOps
subCategory: IAC
slug: getting-started-with-infrastructure-as-code
---
In the past, provisioning and managing infrastructure had to be done manually by the IT admins through user interfaces, batch scripts, etc.

Now, with the use of tools that support the full software lifecycle, you can define and manage your software Infrastructure as Code(IaC).

For instance, let’s say you’re a developer working with MongoDB and AWS on a project with 3 environments(dev, test, production). Using infrastructure as code, creating, upgrading or destroying databases for your environments would be made time and cost-efficient.

In this article, we’ll see the benefits of infrastructure as code, how it works, various approaches, tools and best practices when using IaC — all you need to know to get started with Infrastructure as Code.

# What is Infrastructure as Code?

Infrastructure as Code(IaC) is the process of defining your infrastructure provisions and management through code, instead of the manual process.

With your software infrastructure defined as code, you can easily edit and distribute its configurations without changing its desired state.

# Iac vs IaaS

A common misconception amongst beginners is the difference between Infrastructure as Code, and Infrastructure as a Service. These are two different concepts.

**Infrastructure as a Service** is a core cloud service that provides fundamental computing resources on-demand at a pay-as-you-go basis, whereas **Infrastructure as Code** is a tool that can be used to manage infrastructure for cloud or on-premise resources.

# How IaC works

Infrastructure as Code uses high-level coding languages that allow you to describe the resources and dependencies to provision your infrastructure.

When you run the code, it creates, updates or destroys resources by communicating with the API of your cloud provider to determine the differences between the configurations described in your code and their current state in the cloud.

# Why use code for infrastructure?

Because it employs the same software engineering concepts that have enabled software-based systems to scale properly, infrastructure as code reduces the complexity of cloud infrastructure.

Sometimes, it may seem unnecessary to use IaC for less complex infrastructure. However, asides from scaling, there are a lot more reasons and advantages to declaring your infrastructure as code. Such as:

1. IaC allows infrastructure to be integrated into source control methods, giving room for versioning and code reviews that follow existing software engineering practices.
2. It enables the standard of creating infrastructure configurations that can be reproduced.
3. The need for manual provisioning and infrastructure management is removed, allowing tasks to be completed in less time.
4. With IaC, you can write tests for your infrastructure to ensure its correctness.
5. It can be easily integrated with CI/CD tools.
6. IaC gives room for a more consistent and efficient software development lifecycle.

# Common IaC Tools and Platforms

### **Terraform:**

[Terraform by HashiCorp](https://www.terraform.io/) is one of the most used tools for infrastructure as code. It supports its own HashiCorp Language(HCL) that allows you to define providers and resources for your software infrastructure.

### Pulumi:

[Pulumi](https://www.pulumi.com/) is another outstanding IaC tool. It does, however, aim for a developer-first experience by allowing you to write your infrastructure's code in a programming language that you are familiar with. Python, TypeScript, JavaScript, Go, C#, and F# are supported languages managed by the Pulumi service.

### Ansible:

RedHat's [Ansible](https://ansible.com) is a free and open-source configuration management tool that may also be used for Infrastructure as Code. While it's an excellent tool for configuration management and infrastructure provisioning, it's not so great for infrastructure management.

### AWS CloudFormation:

CloudFormation is an AWS infrastructure management platform-specific IaC tool. As a first-party solution, it offers good compatibility with all AWS services and can support any AWS configuration.

### Azure Resource Templates:

Microsoft Azure utilises resource templates in JSON format to support Infrastructure as Code within the platform.

### Chef/Puppet:

Chef and Puppet are great configuration management and automation tools that have IaC capabilities.

# Methods of IaC

There are two approaches to writing Infrastructure as Code — **Declarative** and **Imperative**.

### Declarative Method

This means that you simply need to specify the requirements for the end results, and the IaC tool will manage the procedures required to attain the specified resources. This is the most often utilised strategy since it allows for greater flexibility in infrastructure management.

Common declarative IaC tools include Terraform, Pulumi, Ansible, and AWS CloudFormation. However, Ansible also supports imperative commands.

### Imperative Method

Rather than declare the requirements and resources, you would need to specify the exact steps for the tool to execute a change.

# 5 Best Practices for Infrastructure as Code

The adoption of IaC Tools is the first step in streamlining your development workflow. The following practices can assist in ensuring the success of your implementation:

1. You should ensure that whichever tool you select supports all of your resources and requirements.
2. Make use of version control to track changes being made to your software infrastructure.
3. Continuously test your code for errors to confirm its accuracy, before deploying to production.
4. Avoid the use of hard-coded variables and secret keys.
5. Once you begin using Infrastructure as Code, be sure that all modifications are made using the IaC tool only and that no manual changes are made.



Infrastructure as Code is becoming an essential component of modern application development and deployment pipelines. It unlocks the full potential of cloud computing and frees developers from manual, error-prone operations. It also increases efficiency across the software development lifecycle.

At first, it may seem difficult to get started because of the many tools and different use cases. You would, however, have developed fantastic infrastructure management methods over time.