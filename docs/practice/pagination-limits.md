---
title: Pagination limits
sidebar_position: 30
---

Enforce bounded page sizes and pagination windows by default so list queries
cannot request unbounded result sets.

## Applies to

- GraphQL servers
- Gateways and proxies

## Why this should be default

Trusted documents reduce untrusted query risk, but trusted operations can still
request too much data unless pagination is bounded.

## Solves

- [DoS via runtime execution](/problem/runtime-dos)
- [Execution cost spikes](/problem/execution-cost)
- [Request payload size](/problem/request-payload-size)

## Implementing patterns

- [Validation pagination limits](/pattern/validation-pagination-limits)
- [Resolver pagination clamping](/pattern/resolver-pagination-clamping)
- [Result size limits](/pattern/result-size-limits)
