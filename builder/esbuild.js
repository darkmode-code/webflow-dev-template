import * as esbuild from 'esbuild';

const BUILD_DIRECTORY = 'dist';
const ENTRY_POINTS = ['src/index.ts'];
const IS_PROD = process.env.BUILD_ENV === 'prod';
const LIVE_RELOAD = !IS_PROD;
const SERVE_PORT = 3000;
const SERVE_ORIGIN = `http://localhost:${SERVE_PORT}`;

const context = await esbuild.context({
  entryPoints: ENTRY_POINTS,
  outdir: BUILD_DIRECTORY,
  bundle: true,
  minify: IS_PROD,
  sourcemap: !IS_PROD,
  target: 'esnext',
  inject: LIVE_RELOAD ? ['./builder/live-reload.js'] : undefined,
  define: {
    SERVE_ORIGIN: JSON.stringify(SERVE_ORIGIN),
  },
});

if (IS_PROD) {
  console.log('prod')
  await context.rebuild();
  context.dispose();
}
else {
  console.log(`Dev Mode on \x1b[36m${SERVE_ORIGIN}/index.js\x1b[0m`);
  console.log(`Write in Webflow: \x1b[32m<script src=\x1b[36m"${SERVE_ORIGIN}/index.js"\x1b[32m></script>\x1b[0m`);
  await context.watch();
  await context
    .serve({
      servedir: BUILD_DIRECTORY,
      port: SERVE_PORT,
    })
}