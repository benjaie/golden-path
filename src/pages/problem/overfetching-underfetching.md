---
title: Over-fetching and under-fetching
---

## What it is

Over-fetching happens when clients request more data than they render.
Under-fetching happens when clients do not request data they actually need,
leading to extra round trips or fragile follow-up queries.

## Symptoms

- Large responses with many unused fields
- Repeated follow-up queries to fill in missing data
- Fragile “mega queries” that change frequently

## Why it matters

These issues reduce performance and increase maintenance costs as teams add
features. They also make it harder to reason about ownership and data
dependencies.

## Patterns that address this

- [Query composition](/pattern/query-composition)
