import { defineConfig, build as viteBuild } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";

build();

const clientEnvironment = getClientEnvironment(process.env);

const definedEnv = Object.keys(clientEnvironment).reduce((env, currentKey) => {
  return {
    ...env,
    [`process.env.${currentKey}`]: JSON.stringify(
      clientEnvironment[currentKey]
    ),
  };
}, {});

async function build() {
  await viteBuild(
    defineConfig({
      define: {
        ...definedEnv,
        "process.env.NODE_ENV": JSON.stringify("production"),
      },
      resolve: {
        alias: {
          "@dynamic": path.resolve("./src/shared/dynamic/web-component"),
        },
      },
      build: {
        outDir: path.resolve("./scripts/web-component/web-component-build"),
        lib: {
          entry: path.resolve(
            "./src/shared/components/PostDetails/web-component.ts"
          ),
          name: "component",
          fileName: "component",
          formats: ["iife"],
        },
      },
      plugins: [react()],
    })
  );
}

function getClientEnvironment<
  TObject extends Record<string, string | undefined>
>(environment: TObject): Record<string, string | undefined> {
  let clientEnvironment: Record<string, string | undefined> = {};

  for (const key in environment) {
    if (key.startsWith("NEXT_PUBLIC")) {
      clientEnvironment = { ...clientEnvironment, [key]: environment[key] };
    }
  }
  return clientEnvironment;
}
