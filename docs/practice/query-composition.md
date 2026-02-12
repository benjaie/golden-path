---
title: Query composition
sidebar_position: 50
---

Keep data requirements close to where data is rendered, and compose operations
from those local requirements.

## Applies to

- GraphQL clients
- Client frameworks
- Code generators and linting tooling

## Why this should be default

It prevents drift between data usage and data requests, reducing over-fetching,
fragile mega-queries, and accidental coupling.

## Solves

- [Over-fetching and under-fetching](/problem/overfetching-underfetching)

## Implementing patterns

- [Query composition](/pattern/query-composition)
