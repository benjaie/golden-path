---
title: Server
sidebar_position: 25
---

Pick one of these profile if you are the developer of a GraphQL server
library/framework.

For most users, the server default should be
[First-party API](/profiles/server/first-party) &mdash; APIs intended to power
their own websites and applications only (and reject external requests). This is
the right baseline for the majority of GraphQL deployments where clients are
controlled by the same organization. It's also much easier to open an API up
later than it is to lock it down later!

Use [Third-party API](/profiles/server/third-party) only when untrusted external
clients must be allowed to send arbitrary documents (for example the GitHub or
Shopify public APIs).

## Server sub-profiles

- [First-party API (default)](/profiles/server/first-party)
- [Third-party API (opt-in)](/profiles/server/third-party)
