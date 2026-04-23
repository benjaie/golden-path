---
title: DoS via validation
---

Validation helps protect your GraphQL service from invalid or expensive
requests. However, it can itself be a subject of attack. Many of the validation
algorithms scale as O(N²) (e.g. field merging), so more input tokens can cause
exponentially increasing validation costs.

## Symptoms

- High validation time, with high CPU and memory usage

## Why it matters

Validation is on the hot path for every request, so abuse affects all users.

## Practices that address this

- [Trusted documents](/practices/trusted-documents)
- TODO: caching parse/validate

## Solutions that address this

- [Trusted documents (allowlist)](/solutions/trusted-documents)
- [Token limits](/solutions/token-limits)
- [Validation timeouts](/solutions/validation-timeouts)
