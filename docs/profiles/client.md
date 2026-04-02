---
title: Client
sidebar_position: 50
---

Use this profile if you build GraphQL client libraries, frameworks, or SDKs.

## Recommended practices

Once [service capabilities](https://github.com/graphql/graphql-spec/pull/1208)
are integrated into the GraphQL specification, some client behaviors should be
driven by the server's exposed capabilities.

For servers that require [trusted documents](/practices/trusted-documents), the
client must support them.

It's always recommended to address:

- [Query componentization](/practices/query-componentization)
- [Cursor pagination](/practices/cursor-pagination)

## Capability-driven configuration

(Near future, hopefully!)

- Detect endpoint service capabilities and auto-configure client behavior:
  websockets, server sent events, etc.
- Use capability negotiation to determine whether persisted documents are
  required, optional, or unsupported.
- If persisted documents are enabled, use capability metadata to discover
  publish and execute endpoints.
- Fall back safely when capabilities are absent or partial.
