---
title: Excessive query complexity
---


Queries with high field counts or expensive resolvers can overwhelm backend
resources even if depth is limited.

## Symptoms

- Very large selection sets
- Queries that appear shallow but are expensive
- Unpredictable performance under load

## Why it matters

Complexity-driven spikes make performance and safety hard to reason about.

## Practices that address this

- [Trusted documents](/practice/trusted-documents)

## Patterns that address this

- [Query complexity limits](/pattern/query-complexity-limits)
- [Trusted documents (operation allowlist)](/pattern/trusted-documents)
