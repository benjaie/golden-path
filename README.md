# GraphQL Golden Path

This repository is a first draft from the **GraphQL Golden Path Initiative**. The goal is to help authors of GraphQL software (clients, servers, gateways, tooling, registries, observability platforms) converge on a shared set of default behaviors, configuration options, and error language that should lead to the long term success of their users.

This is **not** intended to be guidance for application developers who write GraphQL queries. The audience is the people who build the tools and frameworks those developers use.

## Intent

- Identify common problems that users face, especially issues that cause frustration, disillusionment, or are hard to rectify if not addressed from the start.
- Identify and specify the patterns that libraries/tooling/frameworks should put in place so that users never meet these problems.
- Define common names for these techniques/patterns and their parameters, and determine the recommended defaults and configuration parameters.
- Explain why each pattern exists, why it is the recommended default, and when it may be reasonable for a user to opt out.
- Connect patterns to the concrete problems they solve.
- Don't be overly prescriptive, allow space for innovation.

The long-term aim is that GraphQL tooling can provide a consistent, safe, and predictable “golden path” out of the box, while still allowing experts to opt out with informed intent.

The Golden Path isn't aiming to maximize upside (e.g. the absolute most
performant or lowest latency or most efficient), instead it is aiming to minimize
downside - if a user does not invest time in studying all GraphQL's patterns up
front, they should still end up with a solution that is "good enough" 6 months
down the road.

### “Just works” defaults

A key requirement is that recommended patterns should **just work** for users without complex documentation or ongoing vigilance. If users must exert effort, the easiest way to achieve the goal should be the way that minimizes potential downside, such that the path of least resistance still lands them in the pit of success.

For example, DataLoader is the traditional solution to the N+1 problem, but it requires users to know about it in the first place, and to expend the effort to wire it into every resolver (or throughout their business logic) manually and deliberately. Instead, if "batch" resolvers were the default (where instead of passing the "parent object", a list of parent objects is passed - essentially every resolver follows the DataLoader pattern), the N+1 problem is automatically addressed by the shape of the solution. The user doesn't need to go out of their way to learn a technique that they must then implement and enforce everywhere; instead, the technique is their default experience and straying from it is the advanced path.

Combining query composition with fragment co-location and data masking ensures that data requirements stay local, and root-level additions do not accidentally leak into every component. Making this experience the default/easiest/most type-safe/most concise approach helps guide users to the pit of success.

### Allowing for innovation

Though intended to be a highly opinionated guide that puts new GraphQL users on a path that should lead to their success, it's important to recognize and celebrate the variety and composibility of the GraphQL ecosystem and not accidentally limit innovation.

For example: it makes sense to encourage co-location of data requirements with components and prevention of accessing unrequested data, but mandating this be done through fragment co-location and data-masking would limit innovation. A client could achieve this by inferring data usage through source code and generating queries internally, or could rely on the build-time type system rather than run-time data masking, or some other approach to solve the issue. So long as the underlying problem(s) are solved by default out of the box, we should be happy!

## Status

- Work in progress and **not official**.
- Content is incomplete and may be incorrect.
- The current site is a skeleton to enable discussion and feedback.

## Contributing

This repo is intended to enable collaboration across the GraphQL ecosystem. If you maintain GraphQL tooling or have strong opinions on defaults, please open issues or pull requests with suggested patterns, problems, and configuration details.

## Local development

Make sure you have `yarn` installed:

```bash
npm install -g yarn
```

To install the dependencies

```bash
yarn
```

To start the website in development mode:

```bash
yarn start
```

To build for production:

```bash
yarn build
```
