---
title: Cursor pagination
---

Use cursor-based pagination as the default contract for paginated lists.

## Applies to

- Schema designers
- GraphQL clients
- GraphQL servers
- Tooling and code generation

## Why this should be default

Cursor-based pagination gives clients stable forward/backward traversal,
encourages bounded list access, and creates a consistent contract across schema,
client abstractions, and enforcement tooling.

## Solves

- [Execution cost spikes](/problems/execution-cost)
- [DoS via runtime execution](/problems/runtime-dos)
- [Over-fetching and under-fetching](/problems/overfetching-underfetching)

## Implementing patterns

- [Cursor Connections](/patterns/cursor-connections)
