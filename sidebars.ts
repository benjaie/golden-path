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
        "practice/operation-cost-controls",
        "practice/error-surface-hardening",
        "practice/query-composition",
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
        "pattern/query-complexity-limits",
        "pattern/depth-limits",
        "pattern/validation-timeouts",
        "pattern/execution-timeouts",
        "pattern/result-size-limits",
        "pattern/error-masking",
        "pattern/introspection-controls",
        "pattern/query-composition",
      ],
    },
    "problems",
  ],
};

export default sidebars;
