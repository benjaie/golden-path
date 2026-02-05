---
title: Trusted documents (operation allowlist)
---

## Summary

Trusted documents allow only pre-registered operations to execute, reducing attack surface and enabling predictable performance.

## Applies to

- GraphQL clients
- GraphQL servers
- Gateways and proxies
- Schema registries and build tooling

## Configuration (suggested defaults)

| Parameter | Default | Notes |
| --- | --- | --- |
| `mode` | `allowlist` | Reject unknown operations by default. |
| `documentIdAlgorithm` | `sha256` | Stable hashing for IDs. |
| `unknownDocumentBehavior` | `reject` | Error on unknown IDs. |
| `persistedDocumentStore` | `required` | Server-side operation store must be configured. |

## Implementation notes

- Clients upload operations during build or release.
- Servers accept only a document ID, then look up the stored operation.
- Maintain a migration path (e.g., `mode: hybrid`) for existing traffic.

## Cautions

- Public APIs may need to opt out or run in hybrid mode.
- Align client and server hash algorithms and canonicalization.
- Ensure operational tooling can safely roll back or revoke documents.

## Why this is the recommended default

Trusted documents make the safe path automatic: unknown operations are rejected, payloads are smaller, and parsing costs are predictable. This reduces the chance that users accidentally expose a public execution surface when they did not intend to.

## Why users might opt out

Users may need to support ad-hoc queries (public APIs, exploratory tooling, or third-party integrations) where pre-registration is not feasible. In those cases, a hybrid mode can be a bridge, but fully open execution trades safety for flexibility.

The risk of opting out is a larger attack surface: bigger payloads, higher parse/validation costs, and inconsistent error behaviors across tooling. Trusted documents are recommended because they standardize errors and limits, and they enable predictable performance.

## Problems addressed

- [Request payload size](/problem/request-payload-size)
- [Parse-time denial of service](/problem/parse-dos)
- [DoS via validation](/problem/validation-dos)
- [Introspection exposure](/problem/introspection-exposure)
