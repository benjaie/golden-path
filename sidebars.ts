import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  goldenPathSidebar: [
    "overview",
    {
      type: "category",
      label: "Practices",
      link: { type: "doc", id: "practices" },
      items: [
        "practice/batched-execution",
        "practice/trusted-documents",
        "practice/pagination-limits",
        "practice/error-surface-hardening",
        "practice/query-composition",
        "practice/operation-cost-controls",
      ],
    },
    {
      type: "category",
      label: "Patterns",
      link: { type: "doc", id: "patterns" },
      items: [
        "pattern/batch-resolvers",
        "pattern/batching-caching",
        "pattern/trusted-documents",
        "pattern/validation-pagination-limits",
        "pattern/resolver-pagination-clamping",
        "pattern/result-size-limits",
        "pattern/query-complexity-limits",
        "pattern/depth-limits",
        "pattern/validation-timeouts",
        "pattern/execution-timeouts",
        "pattern/error-masking",
        "pattern/introspection-controls",
        "pattern/query-composition",
      ],
    },
    {
      type: "category",
      label: "Problems",
      link: { type: "doc", id: "problems" },
      items: [
        "problem/n-plus-1",
        "problem/request-payload-size",
        "problem/parse-dos",
        "problem/validation-dos",
        "problem/runtime-dos",
        "problem/execution-cost",
        "problem/query-complexity",
        "problem/query-depth",
        "problem/introspection-exposure",
        "problem/error-leakage",
        "problem/overfetching-underfetching",
      ],
    },
  ],
};

export default sidebars;
