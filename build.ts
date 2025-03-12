import bunPluginTailwind from "bun-plugin-tailwind"
import bunPluginSvelte from "bun-plugin-svelte"

Bun.build({
	entrypoints: ["src/index.html", "src/another-page.html"],
	outdir: "./dist",
	minify: true,
	splitting: true,
	sourcemap: "linked",
	naming: {
		entry: "[dir]/[name].[ext]", // Preserves original HTML names
		chunk: "assets/[name]-[hash].[ext]", // Unique chunks with hashes
		asset: "assets/[name]-[hash].[ext]", // Unique assets with hashes
	},
	plugins: [bunPluginTailwind, bunPluginSvelte],
});