---
title: GraphQL Golden Path
slug: /
---

This site is a draft playbook for **authors of GraphQL software**: client libraries, servers, gateways, schema tooling, code generators, observability platforms, and related infrastructure. It is **not** for application developers who write GraphQL queries for their own apps.

The goal is to align default behaviors, protections, error messages, and configuration options across GraphQL tooling so users start on a “golden path” that leads them to the "pit of success", avoiding many of the problems that naive implementation of GraphQL can lead to.

## Who this is for

- Library and framework maintainers
- Tooling authors (codegen, linting, registries)
- Server, gateway, and platform teams
- Observability and security tooling teams

## Who this is not for

- Application developers writing queries
- Teams consuming a GraphQL API without maintaining GraphQL tooling

## How to use this site

Pick the patterns that match your software category. Each pattern page documents the intent, configuration, defaults, and cautions. Each problem page describes a common failure mode and links back to patterns that address it.

### GraphQL server or gateway

- [Batch resolvers](/pattern/batch-resolvers)
- [Query complexity limits](/pattern/query-complexity-limits)
- [Depth limits](/pattern/depth-limits)
- [Trusted documents](/pattern/trusted-documents)

### GraphQL client or client framework

- [Trusted documents](/pattern/trusted-documents)
- [Query complexity limits](/pattern/query-complexity-limits)

### Tooling (codegen, linting, schema registries)

- [Trusted documents](/pattern/trusted-documents)
- [Query complexity limits](/pattern/query-complexity-limits)
- [Depth limits](/pattern/depth-limits)

## External references

- GraphQL best practices: https://graphql.org/learn/best-practices/
- GraphQL security: https://graphql.org/learn/security/
- GraphQL query execution: https://graphql.org/learn/execution/
