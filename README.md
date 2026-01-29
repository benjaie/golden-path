# GraphQL Golden Path

This repository is a first draft from the **GraphQL Golden Path Initiative**. The goal is to help authors of GraphQL software (clients, servers, gateways, tooling, registries, observability platforms) converge on a shared set of default behaviors, configuration options, and error language that should lead to the long term success of their users.

This is **not** intended to be guidance for application developers who write GraphQL queries. The audience is the people who build the tools and frameworks those developers use.

## Intent

- Identify common problems that users face, especially issues that cause frustration, disillusionment, or are hard to rectify.
- Identify and specify the patterns that libraries/tooling/frameworks should put in place so that users never meet these problems.
- Define common names for these techniques/patterns and their parameters, and determine the recommended defaults and configuration parameters.
- Explain why each pattern exists and when it may be reasonable for a user to opt out.
- Connect patterns to the concrete problems they solve.
- Don't be overly prescriptive, allow space for innovation.

The long-term aim is that GraphQL tooling can provide a consistent, safe, and predictable “golden path” out of the box, while still allowing experts to opt out with informed intent.

### Allowing for innovation

Though this is intended to be a highly opinionated guide that puts new GraphQL users on a path that should lead to their success, this is intended to be used across the ecosystem and thus it's important to not accidentally limit innovation.

For example: it makes sense to encourage co-location of data requirements with components and prevention of accessing unrequested data, but mandating this be done through fragment co-location and data-masking would limit innovation. A client could achieve this by inferring data usage through source code and generating queries internally, or could rely on the build-time type system rather than run-time data masking, or some other approach to solve the issue.

## Status

- Work in progress and **not official**.
- Content is incomplete and may be incorrect.
- AI has had a significant hand in the initial draft, so hallucination is likely.
- The current site is a skeleton to enable discussion and feedback.

## Contributing

This repo is intended to enable collaboration across the GraphQL ecosystem. If you maintain GraphQL tooling or have strong opinions on defaults, please open issues or pull requests with suggested patterns, problems, and configuration details.

## Local development

```bash
npm install
npm start
```

Build for production:

```bash
npm run build
```
