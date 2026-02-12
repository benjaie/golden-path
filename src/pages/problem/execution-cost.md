---
title: Execution cost spikes
---

## What it is

Queries that are valid and small can still trigger expensive execution, such as
large fan-out, expensive joins, or heavy computation.

## Symptoms

- Slow requests despite small payloads
- Resource exhaustion during execution
- High variance in latency for similar queries

## Why it matters

Without predictable execution costs, default limits and SLOs become guesswork
and attackers can drain resources with simple requests.

## Patterns that address this

- [Query complexity limits](/pattern/query-complexity-limits)
- [Depth limits](/pattern/depth-limits)
