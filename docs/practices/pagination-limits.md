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

- [DoS via runtime execution](/problems/runtime-dos)
- [Execution cost spikes](/problems/execution-cost)
- [Request payload size](/problems/request-payload-size)

## Implementing patterns

- [Validation pagination limits](/patterns/validation-pagination-limits)
- [Resolver pagination limits](/patterns/resolver-pagination-limits)
- [Result size limits](/patterns/result-size-limits)
