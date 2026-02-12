---
title: Error leakage
pagination_prev: null
pagination_next: null
---

## What it is

Internal errors and stack traces leak sensitive information to clients.

## Symptoms

- Raw stack traces in responses
- Inconsistent error codes or messages

## Why it matters

Leaked errors expose internals and make client behavior inconsistent.

## Practices that address this

- [Error surface hardening](/practice/error-surface-hardening)

## Patterns that address this

- [Error masking](/pattern/error-masking)
