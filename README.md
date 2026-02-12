# GraphQL Golden Path

This repository is a first draft from the **GraphQL Golden Path Initiative**.
The goal is to help authors of GraphQL software (clients, servers, gateways,
tooling, registries, observability platforms) converge on a shared set of
default behaviors, configuration options, and error language that should lead to
the long term success of their users.

This is **not** intended to be guidance for application developers who write
GraphQL queries. The audience is the people who build the tools and frameworks
those developers use.

## Intent

- Identify common problems that users face, especially issues that cause
  frustration, disillusionment, or are hard to rectify if not addressed from the
  start.
- Identify and specify the patterns that libraries/tooling/frameworks should put
  in place so that users never meet these problems.
- Define common names for these techniques/patterns and their parameters, and
  determine the recommended defaults and configuration parameters.
- Explain why each pattern exists, why it is the recommended default, and when
  it may be reasonable for a user to opt out.
- Connect patterns to the concrete problems they solve.
- Don't be overly prescriptive, allow space for innovation.

The long-term aim is that GraphQL tooling can provide a consistent, safe, and
predictable “golden path” out of the box, while still allowing experts to opt
out with informed intent.

The Golden Path isn't aiming to maximize upside (e.g. the absolute most
performant or lowest latency or most efficient), instead it is aiming to
minimize downside - if a user does not invest time in studying all GraphQL's
patterns up front, they should still end up with a solution that is "good
enough" 6 months down the road.

## Status

- Work in progress and **not official**.
- Content is incomplete and may be incorrect.
- The current site is a skeleton to enable discussion and feedback.

## Contributing

This repo is intended to enable collaboration across the GraphQL ecosystem. If
you maintain GraphQL tooling or have strong opinions on defaults, please open
issues or pull requests with suggested patterns, problems, and configuration
details.

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
