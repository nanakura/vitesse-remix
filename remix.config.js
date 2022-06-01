/**
 * @type {import('@remix-run/dev').AppConfig}
 */
module.exports = {
  serverBuildTarget: "netlify",
  server: "./server.js",
  ignoredRouteFiles: ["**/.*"],
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // serverBuildPath: "build/index.js",
  // publicPath: "/build/",
  // this is used by remix-esbuild-override
  esbuildConfig(config, mode) {
    return {
      ...config,
      plugins: [
        ...config.plugins,
        require('unplugin-auto-import/esbuild')({
          imports: [
            'react',
            'react-router-dom',
            {
              'usehooks-ts': ['useCounter', 'useDarkMode']
            },
          ],
          dts: true,
        })
      ],
    };
  },
};