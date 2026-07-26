import { readFileSync } from "node:fs";

import { describe, expect, it } from "vitest";

const workflow = readFileSync(".github/workflows/ci.yml", "utf8");

describe("CI workflow contract", () => {
  it("reruns pull requests for every base and base retarget", () => {
    expect(workflow).toMatch(
      /pull_request:\s*\n\s+types:\s*\[[^\]]*\bedited\b[^\]]*\]/,
    );
    expect(workflow).not.toMatch(
      /pull_request:\s*\n(?:\s{4,}.*\n)*?\s{4,}branches:/,
    );
  });

  it("runs a blocking secret scan", () => {
    expect(workflow).toContain("gitleaks secret scan");
    expect(workflow).toContain(
      "gitleaks/gitleaks-action@e0c47f4f8be36e29cdc102c57e68cb5cbf0e8d1e",
    );
  });
});
