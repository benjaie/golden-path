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

The content is organized around four concepts:

- **Profiles**: deployment-oriented bundles of defaults (for example,
  first-party vs public API).
- **Practices**: default behaviors your software should implement.
- **Problems**: failure modes that should not occur when those practices are in
  place.
- **Patterns**: concrete implementation approaches used to implement a
  practice.

In short: pick a profile, implement its practices, and users should avoid the
corresponding problems. Pick whichever patterns best implement those practices
for your architecture.

## How to use this site

1. Start with [Profiles](/profiles) and choose your default deployment mode.
2. Implement the linked [Practices](/practices) for that profile.
3. Review [Problems](/problems) to verify intended outcomes.
4. Choose implementation [Patterns](/patterns) that fit your architecture.

## Recommended default profile

For most library consumers, default to
[First-party APIs](/profile/first-party).

Offer [Public APIs](/profile/public-api) as an explicit opt-in profile for
untrusted/ad-hoc document use cases.

## Status

This site is a work in progress and not official. Guidance may be incomplete or
incorrect.

## References

- GraphQL best practices: https://graphql.org/learn/best-practices/
- GraphQL security: https://graphql.org/learn/security/
- GraphQL execution: https://graphql.org/learn/execution/
