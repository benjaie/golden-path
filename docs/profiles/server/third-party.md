---
title: Third-party API (opt-in)
sidebar_position: 40
---

Use this profile for an API that must accept operations authored by untrusted or
third-party clients. This is a more niche use-case for GraphQL that requires
more complex protections against malicious requests; we recommend implementing a
[first-party API](/profiles/server/first-party/) if your use case supports it.

## Intended for

- Public platform APIs
- Partner ecosystems
- Any endpoint where ad-hoc documents are expected

## Recommended practices

- [Operation cost controls](/practices/operation-cost-controls)
- [Cursor pagination](/practices/cursor-pagination)
- [Pagination limits](/practices/pagination-limits)
- [Error hardening](/practices/error-hardening)
- [Batched execution](/practices/batched-execution)

## Recommended patterns

- [Cursor Connections](/patterns/cursor-connections)
- [Query complexity limits](/patterns/query-complexity-limits)
- [Depth limits](/patterns/depth-limits)
- [Token limits](/patterns/token-limits)
- [Validation timeouts](/patterns/validation-timeouts)
- [Execution timeouts](/patterns/execution-timeouts)

## Notes

- Full trusted-document allowlisting usually cannot be enforced.
- Keep strict parse/validation/runtime protections enabled by default.
- Consider disabling introspection by default and instead publish the schema
  definition (SDL) through a separate integrator channel.
