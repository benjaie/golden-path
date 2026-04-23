---
title: Third-party API (opt-in)
sidebar_position: 40
---

Use this role for an API that must accept operations authored by untrusted or
third-party clients. This is a more niche use-case for GraphQL that requires
more complex protections against malicious requests; we recommend implementing a
[first-party API](/roles/server/first-party/) if your use case supports it.

## Intended for

- Public platform APIs
- Partner ecosystems

## Recommended practices

- [Operation cost controls](/practices/operation-cost-controls)
- [Cursor pagination](/practices/cursor-pagination)
- [Pagination limits](/practices/pagination-limits)
- [Error hardening](/practices/error-hardening)
- [Batched execution](/practices/batched-execution)

## Notes

- Only use this where [trusted documents](/practices/trusted-documents) cannot
  be implemented.
- Keep strict parse/validation/runtime protections enabled by default.
- Consider disabling introspection by default and instead publish the schema
  definition (SDL) through a separate integrator channel.
