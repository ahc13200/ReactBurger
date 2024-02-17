// uno.config.ts
import {
	defineConfig,
	presetAttributify,
	presetIcons,
	presetTypography,
	presetUno,
	presetWebFonts,
	transformerDirectives,
	transformerVariantGroup,
} from 'unocss';

export default defineConfig({
	presets: [
		presetUno(),
		presetAttributify(),
		presetIcons({
			scale: 1.2,
		}),
		presetTypography(),
		presetWebFonts({
			provider: 'google',
			fonts: {
				sans: ['Quicksand', 'Quicksand:400,500,700,900'],
			},
		}),
	],
	transformers: [transformerDirectives(), transformerVariantGroup()],
});
