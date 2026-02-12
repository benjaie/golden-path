---
title: GraphQL Golden Path
slug: /
---

The GraphQL Golden Path is a draft guide for people who build GraphQL software:
server engines, gateways, clients, code generators, schema tooling, and
observability platforms.

It is **not** written for application developers who consume GraphQL APIs in
product code.

## Model

The content is organized around three concepts:

- **Practices**: what software should do by default.
- **Problems**: failure modes users run into.
- **Patterns**: concrete implementation approaches.

A practice may solve multiple problems. A practice may be implemented by one or
more patterns.

## How to use this site

1. Start with [Practices](/practices) and pick the ones your software category
   should implement by default.
2. Review the linked [Problems](/problems) to understand the intended outcomes.
3. Choose implementation [Patterns](/patterns) that best fit your architecture.

## By software category

### GraphQL server, gateway, or proxy

- [Batched execution](/practice/batched-execution)
- [Trusted documents](/practice/trusted-documents)
- [Operation cost controls](/practice/operation-cost-controls)
- [Error surface hardening](/practice/error-surface-hardening)

### GraphQL client or client framework

- [Trusted documents](/practice/trusted-documents)
- [Query composition](/practice/query-composition)
- [Operation cost controls](/practice/operation-cost-controls)

### Tooling (codegen, linting, schema registries)

- [Trusted documents](/practice/trusted-documents)
- [Query composition](/practice/query-composition)
- [Operation cost controls](/practice/operation-cost-controls)

## Status

This site is a work in progress and not official. Guidance may be incomplete or
incorrect.

## References

- GraphQL best practices: https://graphql.org/learn/best-practices/
- GraphQL security: https://graphql.org/learn/security/
- GraphQL execution: https://graphql.org/learn/execution/
