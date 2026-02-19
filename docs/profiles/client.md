---
title: Client
sidebar_position: 50
---

Use this profile if you build GraphQL client libraries, frameworks, or SDKs.

Client behavior should be endpoint-capability-driven, not split by first-party
vs third-party profiles.

## Recommended practices

- [Query composition](/practices/query-composition)
- [Trusted documents](/practices/trusted-documents)
- [Cursor pagination](/practices/cursor-pagination)

## Recommended patterns

- [Cursor Connections](/patterns/cursor-connections)
- [Trusted documents (operation allowlist)](/patterns/trusted-documents)
- [Query composition](/patterns/query-composition)

## Capability-driven configuration

- Detect endpoint service capabilities and auto-configure client behavior.
- Use capability negotiation to determine whether trusted documents are
  required, optional, or unsupported.
- If trusted documents are enabled, use capability metadata to discover publish
  and execute endpoints.
- Fall back safely when capabilities are absent or partial.

## Key responsibilities

- Make fragment-driven composition the default developer experience.
- Provide first-class pagination primitives for connection fields.
- Support build-time operation extraction and persisted-document publishing when
  capabilities indicate trusted document support.

:::note[No first-party vs third-party profiles]

Client implementers do not need separate first-party vs third-party profiles.
Instead, clients should detect endpoint behavior using "service capabilities"
and configure themselves from those advertised capabilities.

:::
