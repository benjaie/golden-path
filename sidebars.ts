import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  goldenPathSidebar: [
    "overview",
    "practices",
    {
      type: "category",
      label: "Practice Details",
      items: [
        "practice/batched-execution",
        "practice/trusted-documents",
        "practice/pagination-limits",
        "practice/error-surface-hardening",
        "practice/query-composition",
        "practice/operation-cost-controls",
      ],
    },
    "patterns",
    {
      type: "category",
      label: "Pattern Details",
      items: [
        "pattern/batch-resolvers",
        "pattern/batching-caching",
        "pattern/trusted-documents",
        "pattern/build-bounded-pagination",
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
    "problems",
  ],
};

export default sidebars;
