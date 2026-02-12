---
title: Public APIs (opt-in)
sidebar_position: 20
---

Use this profile when an API must accept documents authored by untrusted or
third-party clients.

## Intended for

- Public platform APIs
- Partner ecosystems
- Any endpoint where ad-hoc documents are expected

## Default practices

- [Operation cost controls](/practice/operation-cost-controls)
- [Pagination limits](/practice/pagination-limits)
- [Error surface hardening](/practice/error-surface-hardening)
- [Batched execution](/practice/batched-execution)

## Practice differences vs first-party

- [Trusted documents](/practice/trusted-documents) is typically disabled or run
  in hybrid mode.
- Parse/validation/runtime protections should be enabled by default.
- Introspection is usually constrained with explicit policy.

## Library author guidance

Expose this as an explicit opt-in mode, for example:

- `profile: "public-api"`

Allow per-practice overrides, but start from strict defaults.
