---
title: N+1 queries
pagination_prev: null
pagination_next: null
---

## What it is

The N+1 problem occurs when a GraphQL server resolves a list field and issues one follow-up query per item, resulting in N+1 backend calls.

## Symptoms

- Latency grows linearly with list size
- Sudden spikes in database or downstream service load
- Repeated queries with different IDs

## Why it matters

N+1 leads to unpredictable performance and makes it hard to set safe defaults. It is one of the most common reasons GraphQL deployments degrade over time.

## Patterns that address this

- [Batch resolvers](/pattern/batch-resolvers)
