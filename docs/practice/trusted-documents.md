---
title: Trusted documents
sidebar_position: 20
---

## What this practice is

Execute only operations your system trusts by default, usually by referencing a
pre-registered document ID instead of accepting arbitrary query text.

## Applies to

- GraphQL clients
- GraphQL servers
- Gateways and proxies
- Build tooling and schema registries

## Suggested default parameters

| Parameter                 | Default     | Notes                      |
| ------------------------- | ----------- | -------------------------- |
| `mode`                    | `allowlist` | Reject unknown operations. |
| `documentIdAlgorithm`     | `sha256`    | Stable operation identity. |
| `unknownDocumentBehavior` | `reject`    | Safe-by-default handling.  |

## Why this should be default

It reduces attack surface, keeps parse/validation costs predictable, and
standardizes request behavior across tooling.
In deployments that fully enforce trusted documents, this can remove the need
for broad operation cost controls as a default baseline, though pagination
limits are still recommended.

## Problems this practice solves

- [Request payload size](/problem/request-payload-size)
- [Parse-time denial of service](/problem/parse-dos)
- [DoS via validation](/problem/validation-dos)
- [Introspection exposure](/problem/introspection-exposure)

## Patterns that implement this practice

- [Trusted documents (operation allowlist)](/pattern/trusted-documents)
