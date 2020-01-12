const initialState = {
	palette: {
		colors: [
			{ id: 0, hex: "#000000" },
			{ id: 800000, hex: "#800000" },
			{ id: 8000, hex: "#008000" },
			{ id: 808000, hex: "#808000" },
			{ id: 80, hex: "#000080" }
		],
		selectedColor: { id: 0, hex: "#000000" }
	},
	brush: {
		color: "#000000",
		weight: 8
	},
	canvas: {
		lines: [{ points: [], color: "#000" }]
	}
};

export default initialState;
