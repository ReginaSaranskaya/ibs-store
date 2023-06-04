const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@/api": path.resolve(__dirname, "./src/api"),
      "@/pages": path.resolve(__dirname, "./src/pages"),
      "@/state": path.resolve(__dirname, "./src/state"),
      "@/assets": path.resolve(__dirname, "./src/assets"),
      "@/context": path.resolve(__dirname, "./src/context"),
      "@/components": path.resolve(__dirname, "./src/components"),
      "@/ui-components": path.resolve(__dirname, "./src/ui-components"),
    },
  },
};
