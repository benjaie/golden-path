---
title: DoS via validation
---

## What it is

Expensive validation can be exploited by sending many large or complex queries.

## Symptoms

- High CPU during validation
- Spikes in validation time

## Why it matters

Validation is on the hot path for every query, so abuse affects all users.

## Patterns that address this

- [Trusted documents](/pattern/trusted-documents)
- [Validation timeouts](/pattern/validation-timeouts)
