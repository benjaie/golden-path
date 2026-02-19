---
title: N+1 queries
---


The N+1 problem occurs when a GraphQL server resolves a list field and issues
one follow-up query per item, resulting in N+1 backend calls.

## Symptoms

- Latency grows linearly with list size
- Sudden spikes in database or downstream service load
- Repeated queries with different IDs

## Why it matters

N+1 leads to unpredictable performance and makes it hard to set safe defaults.

## Practices that address this

- [Batched execution](/practice/batched-execution)

## Patterns that address this

- [Batch resolvers](/pattern/batch-resolvers)
- [Batching and caching (DataLoader)](/pattern/batching-caching)
