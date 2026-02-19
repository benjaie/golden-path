---
title: First-party APIs (default)
sidebar_position: 10
---

Use this as the default profile for APIs consumed by trusted, first-party
clients (web/mobile/backend clients owned by the same organization).

## Intended for

- Internal product APIs
- Private BFFs
- Service-to-service GraphQL where operations are release-managed

## Default practices

- [Trusted documents](/practices/trusted-documents)
- [Batched execution](/practices/batched-execution)
- [Pagination limits](/practices/pagination-limits)
- [Error hardening](/practices/error-hardening)
- [Query composition](/practices/query-composition) (client/tooling side)

## Introspection default

- Keep introspection enabled by default for first-party APIs.
- Enforce introspection depth/list-depth via [Depth limits](/patterns/depth-limits).

## Optional practices

- [Operation cost controls](/practices/operation-cost-controls) (at client build
  time)

## Library author guidance

Expose this as the default startup mode, for example:

- `profile: "first-party"`
