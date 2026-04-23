---
title: Mutation payloads
---

Return a dedicated payload object per mutation so successful results and
metadata remain structured and evolvable.

Use this in combination with
[Modeled mutation errors](/solutions/modeled-mutation-errors).

## Implementer guidance

### Schema designer

- Return a dedicated payload type instead of bare scalars/object types.
- Include core result objects plus extensible metadata fields.
- Keep payload shapes stable and additive.
- Consider adding a `query: Query` field to mutation payloads so users can
  request arbitrary data after completing a mutation.

### Client implementer

- Standardize mutation result handling around payload structures.
- Reuse fragments across related mutation payloads.

### Tooling implementer

- Lint for mutation payload naming and structural conventions.
- Lint to ensure each mutation has its own unique mutation payload type. Initial
  alignment is liable to break as the schema evolves, so it is wise to start
  with unique types even if they have an identical set of fields.
- Generate typed payload helpers in SDK/codegen workflows.

## Problems addressed

- [Under-fetching](/problems/underfetching)
