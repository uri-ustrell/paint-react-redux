const initialState = {
	palette: {
		colors: [
			{ id: 1, hex: "#ff5f00" },
			{ id: 2, hex: "#ff005f" },
			{ id: 3, hex: "#af0087" },
			{ id: 4, hex: "#8700d7" },
			{ id: 5, hex: "#2874A6" },
			{ id: 6, hex: "#EC7063" },
			{ id: 7, hex: "#AF7AC5" },
			{ id: 8, hex: "#5499C7" },
			{ id: 9, hex: "#5DADE2" },
			{ id: 10, hex: "#48C9B0" },
			{ id: 11, hex: "#52BE80" },
			{ id: 12, hex: "#58D68D" },
			{ id: 13, hex: "#F4D03F" },
			{ id: 14, hex: "#F5B041" },
			{ id: 15, hex: "#EB984E" },
			{ id: 16, hex: "#DC7633" },
			{ id: 17, hex: "#99A3A4" },
			{ id: 18, hex: "#5D6D7E" },
			{ id: 19, hex: "#1b2631" },
			{ id: 20, hex: "#ffffff" }
		],
		selectedColor: { id: 19, hex: "#1B2631" }
	},
	weights: { all: [3, 6, 9, 12], selectedWeight: 6 },
	brush: {
		color: "#1B2631",
		weight: 8
	},
	canvas: {
		lines: [{ points: [], color: "#000", weight: 15 }],
		history: {
			past: { lines: [] },
			future: { lines: [] }
		}
	}
};

export default initialState;
