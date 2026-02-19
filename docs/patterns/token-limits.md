---
title: Token limits
---

Limit the number of lexer/parser tokens in a GraphQL document before full parse
or validation.

## Practices implemented

- [Operation cost controls](/practice/operation-cost-controls)

## Applies to

- GraphQL servers
- Gateways and proxies
- Parser/security middleware

## Configuration (suggested defaults)

| Parameter | Default | Notes |
| --- | --- | --- |
| `maxTokens` | `15000` | Maximum tokens allowed for application operations. |
| `maxIntrospectionTokens` | `30000` | Higher allowance for introspection documents. |
| `onLimitExceeded` | `reject` | One of: `reject`, `warn`. |

## Implementation notes

- Count tokens from the lexer stream before expensive parse/validation phases.
- Enforce separate token ceilings for application and introspection operations.
- Return stable error codes/messages so users can tune limits safely.

## Cautions

- Very low limits can break legitimate operations with many fragments.
- Token limits are not a replacement for depth/complexity controls.

## Problems addressed

- [Parse-time denial of service](/problem/parse-dos)
- [DoS via validation](/problem/validation-dos)
