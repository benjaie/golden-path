---
title: Excessive query complexity
---

Queries with high field counts or expensive resolvers can overwhelm backend
resources even if depth is limited.

## Symptoms

- Large execution time despite passing depth limits
- Large amounts of data for relatively small requests

## Why it matters

Attackers (and naive users) do not need huge queries to cause problems. Even
small queries can be expensive to execute or result in outsized output. Without
safeguards, an attacker can leverage this asymmetry, cheaply issuing many small
but expensive requests in order to exhaust CPU, memory, or downstream services
and cause denial of service.

## Practices that address this

- [Trusted documents](/practices/trusted-documents)

## Solutions that address this

- [Query complexity limits](/solutions/query-complexity-limits)
- [Trusted documents (allowlist)](/solutions/trusted-documents)
