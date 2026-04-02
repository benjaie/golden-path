---
title: GraphQL Golden Path
slug: /
---

**The GraphQL Golden Path outlines an opinionated set of practices believed to
give GraphQL adopters the greatest chance of success with the technology when
made part of the default experience.**

Since the Golden Path is about defining the default experience of GraphQL
adapters, the audience for this resource is primarily not the adoptors
themselves but instead developers writing the shared tooling that the adopters
will rely upon. This audience is typically comprised of open source and
proprietary software maintainers writing GraphQL libraries, frameworks and
tooling (servers, clients, gateways, code generators, etc), and the people
designing schemas who need to ensure these core functionalities are exposed in a
compatible way. To a lesser extent, this resources also serves as a shared
vendor-neutral reference to these patterns, to explain why they exist and how to
use them.

The Golden Path is a community-maintained resource, lead by the GraphQL
Technical Steering Committee, and is likely to evolve over time. It is motivated
by problems that users face whilst using GraphQL, and aims to reduce these
problems for future users. Sometimes this involves changes to the GraphQL
specifications itself, but typically it involves aligning the ecosystem on a set
of practices that minimize downsides for application developers by default
(without requiring them to read large amounts of documentation).

## Model

The content is organized around four concepts:

- **Profiles**: entrypoints that map the reader's role to relevant practices.
- **Practices**: default behaviors that should be adopted, one way or another.
- **Patterns**: concrete implementation approaches for one or more practices.
- **Problems**: failure modes these practices and patterns are intended to
  mitigate.

In short: determine the profile (or profiles) that best describe you as the
reader and implement the specified practices by picking and appling one or more
patterns for your implementer type.

## Get started

The practices you need to implement will differ depending on your role; start by
picking the [profile(s)](/profiles) that best reflect you or your project. You
will also find terminology definitions on that page.

## Status

This site is a work in progress and not official. Guidance may be incomplete or
incorrect.

## References

- GraphQL best practices: https://graphql.org/learn/best-practices/
- GraphQL security: https://graphql.org/learn/security/
- GraphQL execution: https://graphql.org/learn/execution/
