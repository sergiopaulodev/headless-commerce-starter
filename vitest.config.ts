import { defineConfig } from "vitest/config";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
    plugins: [tsconfigPaths()],

    test: {
        environment: "node",

        include: ["lib/commerce/contracts/**/*.test.ts"],

        coverage: {
            provider: "v8",
            reporter: ["text","json", "html"],
        },
    },
});