---
title: Introspection exposure
pagination_prev: null
pagination_next: null
---

## What it is

Unrestricted introspection can expose schema details in environments where that
information should be limited.

## Symptoms

- Introspection available in production without controls
- Schema details visible to untrusted clients

## Why it matters

Exposure increases attack surface and can reveal internal structure.

## Practices that address this

- [Trusted documents](/practice/trusted-documents)

## Patterns that address this

- [Introspection controls](/pattern/introspection-controls)
- [Trusted documents (operation allowlist)](/pattern/trusted-documents)
