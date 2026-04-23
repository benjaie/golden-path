---
title: Response size
---

GraphQL responses can become large due to repeated fragments, nested or
unpaginated lists, or deeply nested selections. Large responses typically have
high associated execution, serialization, and network transfer costs.

## Symptoms

- Slow execution
- Large response payloads
- Slow serialization

## Why it matters

Large responses increase computation and serialization costs and may lead to
denial of service. Large responses can be the result of malicious queries,
though regular queries if written with insufficient care may also lead to much
larger responses than expected. A carefully crafted malicious request can
produce a very large response with minimal input size.

## Practices that address this

- [Trusted documents](/practices/trusted-documents)
- [Pagination limits](/practices/pagination-limits)
- [Operation cost controls](/practices/operation-cost-controls)
