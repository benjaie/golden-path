---
title: Third-party APIs (opt-in)
sidebar_position: 20
---

Use this profile when an API must accept documents authored by untrusted or
third-party clients.

Examples of third-party APIs are
[the GitHub API](https://docs.github.com/en/graphql) and
[the Shopify API](https://shopify.dev/docs/api/admin-graphql/latest).

Third party APIs have significantly increased complexity due to the nature of
needing to handle untrusted documents safely; the majority of GraphQL APIs are
[first party APIs](/profile/first-party/) and can instead use
[trusted documents](../practice/trusted-documents.md) to offset these concerns.

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

- A document allowlist (e.g. [Trusted documents](/practice/trusted-documents))
  explicitly cannot be used; however the network optimizations such as persisted
  queries still can.
- Parse/validation/runtime protections should be enabled by default.
- Introspection is usually constrained with explicit policy.
- There's a significantly larger number of unique documents that a server is
  likely to handle, so different caching strategies may be needed.

## Library author guidance

Expose this as an explicit opt-in mode, for example:

- `profile: "third-party"`

Allow per-practice overrides, but start from strict defaults.
