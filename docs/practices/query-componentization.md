---
title: Query componentization
sidebar_position: 50
---

Keep data requirements close to where data is rendered, and compose operations
from those local requirements.

## Applies to

- GraphQL clients
- Client frameworks
- Code generators and linting tooling

## Why this should be default

Enables local reasoning and prevents accidental coupling by ensuring a
component's actual data usage and declared data requirements are defined
alongside each other and are consistent. A change in one must be reflected by a
change in the other, and these changes should not impact the rest of the
application. This not only simplifies reasoning for developers, avoiding the
need to perform props drilling, but also ensures that only data required to
render the page is actually fetched.

By ensuring data usage and requirements are synchronized, the problem of drift
is eliminated. Drift traditionally occurs where data that was once required is
no longer needed but it cannot be safely removed from the underlying operation
because tracing down where it is used is too time consuming.

## Solves

- [Over-fetching and under-fetching](/problems/overfetching-underfetching)

## Implementing patterns

To implement this, pick one of:

- To document: data masking
- To document: type masking
- To document: code-to-query generation

Alongside the above, you should also implement the following:

- To document: linting to ensure usage&ndash;requirement synchronization
- To document: linting to ensure props defined in terms of fragments
- To document: linting to ensure fragments correctly defined for child
  components
