---
title: High execution costs
---

Queries that are valid and relatively small can still trigger expensive
execution, such as large fan-out, deep request waterfalls, heavy computation or
memory usage, or time-consuming serialization/deserialization.

## Symptoms

- Slow responses despite small requests
- Resource exhaustion during execution
- High variance in latency for similar queries
- Memory usage/garbage collection spikes
- Long time spent blocking CPU for resolution or serialization

## Why it matters

High execution costs can put a lot of stress on your infrastructure, increase
costs, increase latency, and potentially lead to denial of service.

## Practices that address this

- [Pagination limits](/practices/pagination-limits)
- [Operation cost controls](/practices/operation-cost-controls)
- [Trusted documents](/practices/trusted-documents)
