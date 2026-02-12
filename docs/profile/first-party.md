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

- [Trusted documents](/practice/trusted-documents)
- [Batched execution](/practice/batched-execution)
- [Pagination limits](/practice/pagination-limits)
- [Error surface hardening](/practice/error-surface-hardening)
- [Query composition](/practice/query-composition) (client/tooling side)

## Usually not default in this profile

- [Operation cost controls](/practice/operation-cost-controls)

Use operation cost controls when this profile is mixed with untrusted traffic or
ad-hoc query execution.

## Library author guidance

Expose this as the default startup mode, for example:

- `profile: "first-party"`
