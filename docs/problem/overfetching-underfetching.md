---
title: Over-fetching and under-fetching
pagination_prev: null
pagination_next: null
---


Over-fetching happens when clients request more data than they render.
Under-fetching happens when clients do not request data they need, leading to
extra round trips.

## Symptoms

- Large responses with many unused fields
- Repeated follow-up queries to fill in missing data
- Fragile mega queries that change frequently

## Why it matters

These issues reduce performance and increase maintenance costs as systems grow.

## Practices that address this

- [Query composition](/practice/query-composition)

## Patterns that address this

- [Query composition](/pattern/query-composition)
