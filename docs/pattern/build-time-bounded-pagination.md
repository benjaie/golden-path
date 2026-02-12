---
title: Build-time bounded pagination
---

## Summary

Enforce pagination bounds in source documents at build time, then rely on
trusted documents so runtime traffic can only execute bounded operations.

## Practices implemented

- [Pagination limits](/practice/pagination-limits)

## Applies to

- GraphQL clients with build pipelines
- GraphQL servers using trusted documents
- Schema registries and CI tooling

## Configuration (suggested defaults)

| Parameter | Default | Notes |
| --- | --- | --- |
| `defaultPageSize` | `20` | Insert when omitted in source docs. |
| `maxPageSize` | `100` | Reject docs above this bound in CI. |
| `enforcement` | `error` | Fail build/publish on violations. |

## Implementation notes

- Lint operations for unbounded list fields.
- Require explicit page-size arguments on list selections.
- Gate deploy/publish on passing checks.

## Cautions

- Requires trusted documents to be effective at runtime.
- Dynamic user-authored queries bypass build-time controls.

## Problems addressed

- [DoS via runtime execution](/problem/runtime-dos)
- [Execution cost spikes](/problem/execution-cost)
- [Request payload size](/problem/request-payload-size)
