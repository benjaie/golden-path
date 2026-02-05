---
title: Introspection exposure
---

## What it is

Unrestricted introspection can expose schema details in environments where that information should be limited.

## Symptoms

- Introspection available in production without controls
- Schema details visible to untrusted clients

## Why it matters

Exposure increases attack surface and can reveal internal structure.

## Patterns that address this

- [Introspection controls](/pattern/introspection-controls)
- [Trusted documents](/pattern/trusted-documents)
