---
title: Trusted documents (operation allowlist)
---


Trusted documents allow only pre-registered operations to execute, reducing
attack surface and enabling predictable performance.

## Practices implemented

- [Trusted documents](/practices/trusted-documents)

## Applies to

- GraphQL clients
- GraphQL servers
- Gateways and proxies
- Schema registries and build tooling

## Configuration (suggested defaults)

| Parameter                 | Default     | Notes                                           |
| ------------------------- | ----------- | ----------------------------------------------- |
| `mode`                    | `allowlist` | Reject unknown operations by default.           |
| `documentIdAlgorithm`     | `sha256`    | Stable hashing for IDs.                         |
| `unknownDocumentBehavior` | `reject`    | Error on unknown IDs.                           |
| `persistedDocumentStore`  | `required`  | Server-side operation store must be configured. |

## Implementation notes

- Clients upload operations during build or release.
- Servers accept only a document ID, then look up the stored operation.
- Maintain a migration path (for example, `mode: hybrid`) for existing traffic.

## Cautions

- Third-party APIs may need to opt out or run in hybrid mode.
- Align client and server hash algorithms and canonicalization.
- Ensure tooling can safely roll back or revoke documents.

## Problems addressed

- [Request payload size](/problems/request-payload-size)
- [Parse-time denial of service](/problems/parse-dos)
- [DoS via validation](/problems/validation-dos)
- [Introspection exposure](/problems/introspection-exposure)
