---
title: Server
sidebar_position: 25
---

Pick one of these roles if you are the developer of a GraphQL server
library/framework.

For most users, the server default should be
[First-party API](/roles/server/first-party): APIs intended to power their own
websites and applications only, and reject external requests. This is the right
baseline for the majority of GraphQL deployments where clients are controlled by
the same organization that develops the GraphQL API. It is also much easier to
open an API up later than it is to lock it down once it has already shipped.

Use [Third-party API](/roles/server/third-party) only when untrusted external
clients must be allowed to send ad hoc documents (for example the GitHub or
Shopify public APIs).

## Server roles

- [First-party API (default)](/roles/server/first-party)
- [Third-party API (opt-in)](/roles/server/third-party)
