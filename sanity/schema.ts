export default {
	name: "carouselImage",
	title: "Carousel Image",
	type: "document",
	fields: [
		{
			name: "image",
			title: "Image",
			type: "image",
			options: { hotspot: true },
		},
		{
			name: "alt",
			title: "Alt Text",
			type: "string",
		},
		{
			name: "caption",
			title: "Caption",
			type: "string",
		},
	],
};
