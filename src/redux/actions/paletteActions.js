export const loadPaletteColors = colors => ({
	type: "LOAD_PALETTE_COLORS",
	colors
});

export const selectPaletteColor = selectedColor => ({
	type: "SELECT_PALETTE_COLOR",
	selectedColor
});
