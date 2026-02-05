---
title: Result size limits
---

## Summary

Limits the size of responses to avoid large payloads or expensive computation.

## Applies to

- GraphQL servers
- Gateways and proxies

## Configuration (suggested defaults)

| Parameter | Default | Notes |
| --- | --- | --- |
| `maxNodes` | `5000` | Cap total nodes per response. |
| `maxResponseBytes` | `1_000_000` | Cap serialized response size. |
| `enforcement` | `reject` | Reject responses that exceed limits. |

## Implementation notes

- Count nodes and bytes during execution.
- Prefer per-field list limits via pagination defaults.
- Return stable errors when limits are hit.

## Cautions

- Limits can surprise users if defaults are too low.
- Counting bytes may require buffering.

## Why this is the recommended default

It prevents unbounded responses from overwhelming infrastructure and clients.

## Why users might opt out

Some internal systems may accept larger responses in exchange for fewer round trips.

## Problems addressed

- [DoS via runtime execution](/problem/runtime-dos)
- [Request payload size](/problem/request-payload-size)
