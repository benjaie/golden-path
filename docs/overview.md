---
title: GraphQL Golden Path
slug: /
---

The goal of the GraphQL Golden Path is to align default behaviors, protections,
error messages, and configuration options across the GraphQL software ecosystem
so users start on a “golden path” that leads them to the "pit of success",
avoiding many of the problems that naive implementation of GraphQL can lead to.

This site is intended for authors and maintainers of GraphQL software:
client/server libraries and frameworks, gateways, schema tooling, code
generators, observability platforms, and related infrastructure. Though it may
be useful for application developers who write GraphQL queries for their own
apps, they are not the target audience.

## How to use this site

Pick and implement the patterns that match your software category. Each pattern
page documents the intent, configuration, defaults, and cautions. Each problem
page describes a common failure mode and links back to patterns that address it.

This site is **pattern-centric**: implement the recommended patterns and your
users should be set on the path to success. The problems are documented only to
justify why a pattern exists and to provide context.

In practical terms, the intent is to:

- Provide clear, named patterns that tooling authors should implement by
  default.
- Define common parameters and recommended defaults for each pattern.
- Explain why a pattern exists, why it is the recommended default, and when
  users might opt out.
- Keep space for innovation while still converging on shared outcomes.

## “Just works” defaults

Recommended patterns should **just work** for users without complex
documentation or ongoing vigilance. If users must exert effort, the easiest way
to achieve the goal should be the way that minimizes potential downside, such
that the path of least resistance still lands them in the pit of success.

For example, DataLoader is the traditional solution to the N+1 problem, but it
requires users to know about it in the first place, and to expend the effort to
wire it into every resolver (or throughout their business logic) manually and
deliberately. Instead, if "batch" resolvers were the default (where instead of
passing the "parent object", a list of parent objects is passed - essentially
every resolver follows the DataLoader pattern), the N+1 problem is automatically
addressed by the shape of the solution. The user doesn't need to go out of their
way to learn a technique that they must then implement and enforce everywhere;
instead, the technique is their default experience and straying from it is the
advanced path.

Combining query composition with fragment co-location and data masking ensures
that data requirements stay local, and root-level additions do not accidentally
leak into every component. Making this experience the default/easiest/most
type-safe/most concise approach helps guide users to the pit of success.

## Allowing for innovation

Though intended to be a highly opinionated guide that puts new GraphQL users on
a path that should lead to their success, it's important to recognize and
celebrate the variety and composibility of the GraphQL ecosystem and not
accidentally limit innovation.

For example: it makes sense to encourage co-location of data requirements with
components and prevention of accessing unrequested data, but mandating this be
done through fragment co-location and data-masking would limit innovation. A
client could achieve this by inferring data usage through source code and
generating queries internally, or could rely on the build-time type system
rather than run-time data masking, or some other approach to solve the issue. So
long as the underlying problem(s) are solved by default out of the box, we
should be happy!

If you feel that a particular pattern is overly prescriptive, please contribute
a PR that maintains the intent (i.e. ensures the same problems are still solved)
whilst updating the language to be more inclusive of alternative solutions.

### GraphQL server or gateway

- [Batch resolvers](/pattern/batch-resolvers)
- [Batching and caching (DataLoader)](/pattern/batching-caching)
- [Query complexity limits](/pattern/query-complexity-limits)
- [Depth limits](/pattern/depth-limits)
- [Validation timeouts](/pattern/validation-timeouts)
- [Execution timeouts](/pattern/execution-timeouts)
- [Result size limits](/pattern/result-size-limits)
- [Error masking](/pattern/error-masking)
- [Introspection controls](/pattern/introspection-controls)
- [Trusted documents](/pattern/trusted-documents)
- [Query composition](/pattern/query-composition)

### GraphQL client or client framework

- [Trusted documents](/pattern/trusted-documents)
- [Query complexity limits](/pattern/query-complexity-limits)
- [Query composition](/pattern/query-composition)

### Tooling (codegen, linting, schema registries)

- [Trusted documents](/pattern/trusted-documents)
- [Query complexity limits](/pattern/query-complexity-limits)
- [Depth limits](/pattern/depth-limits)
- [Introspection controls](/pattern/introspection-controls)
- [Error masking](/pattern/error-masking)
- [Query composition](/pattern/query-composition)

## Status

This is a work in progress and not official. Content is incomplete and may be
incorrect, and the initial draft was AI-assisted, so verification is
recommended.

## External references

- GraphQL best practices: https://graphql.org/learn/best-practices/
- GraphQL security: https://graphql.org/learn/security/
- GraphQL execution: https://graphql.org/learn/execution/
