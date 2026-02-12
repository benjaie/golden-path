---
title: GraphQL Golden Path
slug: /
---

This site is a draft playbook for **authors of GraphQL software**: client
libraries, servers, gateways, schema tooling, code generators, observability
platforms, and related infrastructure. It is **not** for application developers
who write GraphQL queries for their own apps.

The goal is to align default behaviors, protections, error messages, and
configuration options across GraphQL tooling so users start on a “golden path”
that leads them to the "pit of success", avoiding many of the problems that
naive implementation of GraphQL can lead to.

## Who this is for

- Library and framework maintainers
- Tooling authors (codegen, linting, registries)
- Server, gateway, and platform teams
- Observability and security tooling teams

## Who this is not for

- Application developers writing queries
- Teams consuming a GraphQL API without maintaining GraphQL tooling

## How to use this site

Pick and implement the patterns that match your software category. Each pattern
page documents the intent, configuration, defaults, and cautions. Each problem
page describes a common failure mode and links back to patterns that address it.

This site is **pattern-centric**: implement the recommended patterns and your
users should be set on the path to success. The problems are documented only to
justify why a pattern exists and to provide context.

In practical terms, the intent is to:

- Provide clear, named patterns that tooling authors should implement by
  default.
- Define common parameters and recommended defaults for each pattern.
- Explain why a pattern exists, why it is the recommended default, and when
  users might opt out.
- Keep space for innovation while still converging on shared outcomes.

## “Just works” defaults

Recommended patterns should **just work** for users. If a user must put in
effort, the default should be the **only** way to do the thing so the path of
least resistance still lands them in the pit of success.

Examples:

- Batch resolvers remove N+1 by default and require explicit effort to unbatch,
  while DataLoader requires users to wire it everywhere and reason about
  lifecycle and cache scope.
- Combining query composition with fragment co-location and data masking ensures
  local data requirements; adding fields to a root query won’t silently leak
  into every component.

## Allowing for innovation

This website is deliberately opinionated, but it is not intended to limit
innovation. For example, encouraging co-location of data requirements and
prevention of unrequested data access does not require a single implementation.
A client might infer data usage via static analysis, rely on build-time typing,
or use runtime masking—different approaches can still satisfy the same goal.

If you feel that a particular pattern is overly prescriptive, please contribute
a PR that maintains the intent (i.e. ensures the same problems are still solved)
whilst updating the language to be more inclusive of alternative solutions.

### GraphQL server or gateway

- [Batch resolvers](/pattern/batch-resolvers)
- [Batching and caching (DataLoader)](/pattern/batching-caching)
- [Query complexity limits](/pattern/query-complexity-limits)
- [Depth limits](/pattern/depth-limits)
- [Validation timeouts](/pattern/validation-timeouts)
- [Execution timeouts](/pattern/execution-timeouts)
- [Result size limits](/pattern/result-size-limits)
- [Error masking](/pattern/error-masking)
- [Introspection controls](/pattern/introspection-controls)
- [Trusted documents](/pattern/trusted-documents)
- [Query composition](/pattern/query-composition)

### GraphQL client or client framework

- [Trusted documents](/pattern/trusted-documents)
- [Query complexity limits](/pattern/query-complexity-limits)
- [Query composition](/pattern/query-composition)

### Tooling (codegen, linting, schema registries)

- [Trusted documents](/pattern/trusted-documents)
- [Query complexity limits](/pattern/query-complexity-limits)
- [Depth limits](/pattern/depth-limits)
- [Introspection controls](/pattern/introspection-controls)
- [Error masking](/pattern/error-masking)
- [Query composition](/pattern/query-composition)

## Status

This is a work in progress and not official. Content is incomplete and may be
incorrect, and the initial draft was AI-assisted, so verification is
recommended.

## External references

- GraphQL best practices: https://graphql.org/learn/best-practices/
- GraphQL security: https://graphql.org/learn/security/
- GraphQL query execution: https://graphql.org/learn/execution/
