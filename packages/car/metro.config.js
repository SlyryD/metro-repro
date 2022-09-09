const { makeMetroConfig } = require("@rnx-kit/metro-config");
const {
  CyclicDependencies,
} = require("@rnx-kit/metro-plugin-cyclic-dependencies-detector");
const {
  DuplicateDependencies,
} = require("@rnx-kit/metro-plugin-duplicates-checker");
const MetroSymlinkResolver = require("@rnx-kit/metro-resolver-symlinks");
const { MetroSerializer } = require("@rnx-kit/metro-serializer");
const path = require("path");

module.exports = makeMetroConfig({
  resolver: {
    resolveRequest: MetroSymlinkResolver(),
  },

  serializer: {
    // Empty getModulesRunBeforeMainModule and getPolyfills
    getModulesRunBeforeMainModule: () => [],
    getPolyfills: () => [],

    // Custom serializer to not emit define/require as part of bundle prelude
    customSerializer: MetroSerializer([
      CyclicDependencies(),
      DuplicateDependencies(),
    ]),
  },

  // ESModule support
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: true,
        inlineRequires: true,
      },
    }),
  },
});

console.log(module.exports);
