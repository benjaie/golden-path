---
title: DoS via validation
---


Expensive validation can be exploited by sending many large or complex queries.

## Symptoms

- High CPU during validation
- Spikes in validation time

## Why it matters

Validation is on the hot path for every query, so abuse affects all users.

## Practices that address this

- [Trusted documents](/practice/trusted-documents)

## Patterns that address this

- [Trusted documents (operation allowlist)](/pattern/trusted-documents)
- [Token limits](/pattern/token-limits)
- [Validation timeouts](/pattern/validation-timeouts)
