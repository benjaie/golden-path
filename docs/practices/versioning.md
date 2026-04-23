---
title: Versioning
---

GraphQL schemas will typically evolve over time, schema designers need a
strategy in place to ensure clients can adjust to these changes.

The traditional advice is to design your schema in a "versionless" way,
deprecating but continuing to support old fields as you add replacement
functionality. This means that ancient clients can continue to use a GraphQL
endpoint indefinitely, but does require a significant level of foresight at
schema development time. Some teams prefer a more traditional approach where
GraphQL endpoints are explicitly versioned and have their own lifecycle and
sunsetting timelines.

## Recommended solutions

- [Versionless schema design](/solutions/versionless-schema-design)
- To document: alternative versioning solutions
