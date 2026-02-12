---
title: Query composition
sidebar_position: 50
---

## What this practice is

Keep data requirements close to where data is rendered, and compose operations
from those local requirements.

## Applies to

- GraphQL clients
- Client frameworks
- Code generators and linting tooling

## Suggested default parameters

| Parameter            | Default     | Notes                                            |
| -------------------- | ----------- | ------------------------------------------------ |
| `fragmentColocation` | `required`  | Local ownership of data requirements.            |
| `compositionMode`    | `automatic` | Build operations from fragments.                 |
| `dataMasking`        | `enabled`   | Prevent accidental access to unrequested fields. |

## Why this should be default

It prevents drift between data usage and data requests, reducing over-fetching,
fragile mega-queries, and accidental coupling.

## Problems this practice solves

- [Over-fetching and under-fetching](/problem/overfetching-underfetching)

## Patterns that implement this practice

- [Query composition](/pattern/query-composition)
