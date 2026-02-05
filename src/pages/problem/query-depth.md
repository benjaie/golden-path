---
title: Excessive query depth
---

## What it is

Deeply nested queries can cause exponential work or trigger worst-case behavior in resolvers and backends.

## Symptoms

- Very deep selection sets
- Requests that time out or exhaust resources

## Why it matters

Depth-based failures are easy to trigger and hard to mitigate after the fact.

## Patterns that address this

- [Depth limits](/pattern/depth-limits)
- [Trusted documents](/pattern/trusted-documents)
