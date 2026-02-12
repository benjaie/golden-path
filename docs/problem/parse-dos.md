---
title: Parse-time denial of service
pagination_prev: null
pagination_next: null
---

## What it is

Attackers or accidental clients send extremely deep or large queries that are
expensive to parse and validate, exhausting CPU and memory before execution.

## Symptoms

- CPU spikes before any resolvers run
- Slow or failed parsing/validation
- Service instability under malicious or accidental load

## Why it matters

Parse-time DoS can take down a server without touching business logic.

## Practices that address this

- [Trusted documents](/practice/trusted-documents)
- [Operation cost controls](/practice/operation-cost-controls)

## Patterns that address this

- [Depth limits](/pattern/depth-limits)
- [Trusted documents (operation allowlist)](/pattern/trusted-documents)
