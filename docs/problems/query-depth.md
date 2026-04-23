---
title: Excessive query depth
---

Deeply nested queries can result in expensive waterfalls, and nesting lists can
cause exponential increases to the amount of work to be done.

## Symptoms

- Requests that time out or exhaust resources
- Excessive backend load

## Why it matters

Risk of denial of service. Importantly, depth limits should be set early and
raised as needed, they're hard to introduce at a later time as it may break
existing queries. List depth is much more significant than selection set depth
since it scales complexity exponentially rather than linarly.

## Practices that address this

- [Trusted documents](/practices/trusted-documents)

## Patterns that address this

- [Depth limits](/patterns/depth-limits)
- [Trusted documents (allowlist)](/patterns/trusted-documents)
